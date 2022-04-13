import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {ActivatedRoute, Router} from '@angular/router';
import {AddressService, AuthenticationService, CartService, HeaderService, SharedService} from '../../_services';
import {ExitService} from '../../_services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  styleToCheck = '(max-width: 479px)';
  profile = true;
  component = true;

  constructor(private bpo: BreakpointObserver,
              private router: Router,
              private route: ActivatedRoute,
              private sharedService: SharedService,
              private authenticationService: AuthenticationService,
              private exitService: ExitService,
              private addressService: AddressService,
              private cartService: CartService,
              private headerService: HeaderService) {
  }

  ngOnInit(): void {
    this.bpo.observe([this.styleToCheck])
      .subscribe(result => {
        if (result.matches) {
          this.profile = false;
          this.component = true;
        }
      });
    this.addressService.getProfileMenu.subscribe(() => {
      this.callProfile();
    });
  }

  callProfile(): void {
    this.bpo.observe([this.styleToCheck])
      .subscribe(result => {
        if (result.matches) {
          this.profile = true;
          this.component = false;
        }
      });
  }

  showOrders(): void {
    this.bpo.observe([this.styleToCheck])
      .subscribe(result => {
        if (result.matches) {
          this.profile = false;
          this.component = true;
        }
      });
  }

  showData(): void {
    this.bpo.observe([this.styleToCheck])
      .subscribe(result => {
        if (result.matches) {
          this.profile = false;
          this.component = true;
        }
      });
  }

  showAddress(): void {
    this.bpo.observe([this.styleToCheck])
      .subscribe(result => {
        if (result.matches) {
          this.profile = false;
          this.component = true;
        }
      });
  }

  showNot(): void {
    this.bpo.observe([this.styleToCheck])
      .subscribe(result => {
        if (result.matches) {
          this.profile = false;
          this.component = true;
        }
      });
  }

  logout(): void {
    this.authenticationService.logout();
    this.cartService.clearCart();
    this.headerService.callHeaderSetCartPrice(0);
    this.exitService.changeTextOnHeader();
    this.router.navigate(['/']).then(() => {
    });
  }

}
