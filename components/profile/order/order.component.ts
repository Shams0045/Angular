import {Component, OnInit} from '@angular/core';
import {Order} from '../../../_models';
import {AddressService, ProfileService, SharedService} from '../../../_services';
import {BreakpointObserver} from '@angular/cdk/layout';
import {GlobalService} from '../../../_services/global.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orders: Order[] = [];
  profileText: boolean;
  styleToCheck = '(max-width: 479px)';

  config = {
    id: 'custom',
    itemsPerPage: 2,
    currentPage: 1,
  };

  constructor(private profileService: ProfileService,
              private sharedService: SharedService,
              private bpo: BreakpointObserver,
              private addressService: AddressService,
              public globalService: GlobalService) {
  }

  ngOnInit(): void {
    this.getOrders();
    this.showOnMobile();
  }

  getOrders(): void {
    this.profileService.getOrders()
      .subscribe(data => {
       this.orders = data.data;
      });
  }

  getBackgroundColor(statusColor) {
    switch (statusColor) {
      case 'Доставлен':
        return '#18AD35';
      case 'В пути':
        return '#858585';
      case 'Отменен':
        return '#D9331E';
    }
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
