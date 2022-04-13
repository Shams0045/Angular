import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import {AuthenticationService} from '../_services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  error: string;
  constructor(private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status >= 501) {
        this.error = 'Упс... Что-то пошло не так, повторите попытку позже.';
      } else if (err.status === 401) {
        this.authenticationService.logout();
      } else {
        this.error = err.error.message || err.statusText;
      }
      return throwError(this.error);
    }));
  }
}
