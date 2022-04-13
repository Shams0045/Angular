import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {NotificationResp, OrderResp, User, UserAddress, UserAddressResp} from '../_models';

@Injectable({
  providedIn: 'any'
})

export class ProfileService {

  constructor(private http: HttpClient) {
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/api/v1/user`, {withCredentials: true});
  }

  userUpdate(name, pushNotify): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/api/v1/user`, {name, pushNotify},
      {withCredentials: true});
  }

  getOrders(): Observable<OrderResp> {
    return this.http.get<OrderResp>(`${environment.apiUrl}/api/v1/order/all`);
  }

  postAddress(city_id, lat, lon, name): Observable<UserAddressResp> {
    return this.http.post<UserAddressResp>(`${environment.apiUrl}/api/v1/address/add`,
      {city_id, lat, lon, name},
      {withCredentials: true});
  }

  addAddress(city_id, info, lat, lon, name): Observable<UserAddressResp> {
    return this.http.post<UserAddressResp>(`${environment.apiUrl}/api/v1/address/add`,

      {city_id, info, lat, lon, name},
      {withCredentials: true});
  }

  getAllAddresses(): Observable<UserAddressResp> {
    return this.http.get<UserAddressResp>(`${environment.apiUrl}/api/v1/address/get-all`,
      {withCredentials: true});
  }

  deleteAddress(id): Observable<UserAddressResp> {
    return this.http.put<UserAddressResp>(`${environment.apiUrl}/api/v1/address/${id}`, {});
  }

  postDefaultAddress(id): Observable<UserAddress> {
    return this.http.put<UserAddress>(`${environment.apiUrl}/api/v1/address/default/${id}`, {});
  }

  getAllNotifications(): Observable<NotificationResp> {
    return this.http.get<NotificationResp>(`${environment.apiUrl}/api/v1/notify/client`,
      {withCredentials: true});
  }

}










