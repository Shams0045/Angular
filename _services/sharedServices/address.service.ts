import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private updateAddressList = new Subject();
  private updateMapsAddressList = new Subject();
  private headerMapsSetCenter = new Subject();
  private showProfile = new Subject();


  getAddressListsCalled = this.updateAddressList.asObservable();
  getAddressCalled = this.updateMapsAddressList.asObservable();
  getMapsCalled = this.headerMapsSetCenter.asObservable();
  getProfileMenu = this.showProfile.asObservable();

  callAddressUpdateList(): void {
    this.updateAddressList.next();
  }

  callAddressList(): void {
    this.updateMapsAddressList.next();
  }

  callMapsSetCenter(): void {
    this.headerMapsSetCenter.next();
  }

  callShowProfile(): void {
    this.showProfile.next();
  }


}
