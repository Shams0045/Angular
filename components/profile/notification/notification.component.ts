import {Component, OnInit} from '@angular/core';
import {AddressService, ProfileService} from '../../../_services';
import {Notification} from '../../../_models';
import {BreakpointObserver} from '@angular/cdk/layout';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notifications: Notification[] = [];
  notText: boolean;
  styleToCheck = '(max-width: 479px)';

  constructor(private profileService: ProfileService,
              private addressService: AddressService,
              private bpo: BreakpointObserver,
              public globalService: GlobalService) {
  }

  ngOnInit(): void {
    this.showAllNotifications();
    this.showOnMobile();
  }

  showAllNotifications(): void {
    this.profileService.getAllNotifications()
      .subscribe(data => {
        this.notifications = data.data;
      });
  }

  showOnMobile(): void {
    this.bpo.observe([this.styleToCheck])
      .subscribe(result => {
        this.notText = result.matches;
      });
  }

  goToProfile(): void {
    this.addressService.callShowProfile();
  }

}
