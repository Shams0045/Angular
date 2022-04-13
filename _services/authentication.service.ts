import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Otp, User, Tokens} from "../_models";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  refreshTokenTimeout;

  private currentUserSubject: BehaviorSubject<Tokens>;
  public currentUser: Observable<Tokens>;

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
    this.currentUserSubject = new BehaviorSubject<any>(this.cookieService.get('tokens'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get userTokens(): Tokens {
    return this.currentUserSubject.value;
  }

  getCode(phone): Observable<Otp> {
    return this.http.post<Otp>(`${environment.apiUrl}/api/v1/user/get-otp`, {phone});
  }

  addName(name, pushNotify): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/api/v1/user`, {name, pushNotify},
      {withCredentials: true});
  }

  login(phone, code, token): Observable<Tokens> {
    return this.http.post<Tokens>(`${environment.apiUrl}/api/v1/user/sign-in`,
      {phone, code, token})
      .pipe(map(tokens => {
          this.cookieService.set('tokens', JSON.stringify(tokens));
          this.currentUserSubject.next(tokens);
          this.startRefreshTokenTimer();
          return tokens;
        }
      ));
  }

  logout(): void {
    this.stopRefreshTokenTimer();
    this.cookieService.delete('tokens');
    this.currentUserSubject.next(null);
  }

  refreshToken(): Observable<Tokens> {
    return this.http.post<Tokens>(`${environment.apiUrl}/api/v1/user/refresh`, this.cookieService.get('tokens'))
      .pipe(map((tokens) => {
        this.cookieService.set('tokens', JSON.stringify(tokens));
        this.currentUserSubject.next(tokens);
        this.startRefreshTokenTimer();
        return tokens;
      }));
  }

  startRefreshTokenTimer(): void {
    // parse json object from base64 encoded jwt token
    const jwtToken = JSON.parse(atob(this.cookieService.get('tokens').split('.')[1]));
    //  set a timeout to refresh the token a minute before it expires
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - (1000); // 1 * 1000
    this.refreshTokenTimeout = setTimeout(() => this.refreshToken()
      .subscribe(
        () => {
        },
        () => {
        }
      ), timeout);
  }

  stopRefreshTokenTimer(): void {
    clearTimeout(this.refreshTokenTimeout);
  }

}














