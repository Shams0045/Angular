import {Component, OnInit} from '@angular/core';
import {AddressService, ProfileService, SharedService} from '../../../_services';
import {UserAddress} from '../../../_models';
import {BreakpointObserver} from '@angular/cdk/layout';
import {ToastrService} from 'ngx-toastr';
import {GlobalService} from '../../../_services/global.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  showEmptyAddress: boolean;
  showAddress: boolean;
  showAddAddress: boolean;
  addressLists: UserAddress[] = [];
  profileText: boolean;
  styleToCheck = '(max-width: 479px)';
  isDisabled: boolean;

  constructor(private profileService: ProfileService,
              private sharedService: SharedService,
              private bpo: BreakpointObserver,
              private addressService: AddressService,
              private notify: ToastrService,
              public globalService: GlobalService) {
  }

  ngOnInit(): void {
    this.addressService.getAddressListsCalled.subscribe(() => {
      this.getAddressLists();
    });
    this.getAddressLists();
    this.showOnMobile();
  }

  getAddressLists(): void {
    this.profileService.getAllAddresses()
      .subscribe(data => {
       this.addressLists = data.data;
         if (this.addressLists.length === 0) {
           this.showEmptyAddress = true;
           this.showAddress = false;
        } else {
           this.showAddress = true;
           this.showAddAddress = false;
         }
       this.isDisabled = this.addressLists.length >= 5;
      });
  }

  deleteAddress(address): void {
    this.profileService.deleteAddress(address.id)
      .subscribe(() => {
        this.getAddressLists();
        this.sharedService.headerComponentName();
        this.addressService.callAddressList();
        this.notify.info('Адрес удален');
      });
  }

  addAddress(): void {
    this.showEmptyAddress = false;
    this.showAddAddress = true;
  }

  addNewAddress(): void {
    this.showAddress = false;
    this.showAddAddress = true;
  }

  goToProfile(): void {
    this.addressService.callShowProfile();
  }

  showOnMobile(): void {
    this.bpo.observe([this.styleToCheck])
      .subscribe(result => {
        this.profileText = result.matches;
      });
  }

}

























