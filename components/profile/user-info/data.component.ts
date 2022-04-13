import {Component, OnInit} from '@angular/core';
import {AddressService, ProfileService, SharedService} from '../../../_services';
import {User} from '../../../_models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  profile = new User;
  isChecked: boolean;
  infoForm: FormGroup;
  profileText: boolean;
  styleToCheck = '(max-width: 479px)';

  constructor(private profileService: ProfileService,
              private formBuilder: FormBuilder,
              private sharedService: SharedService,
              private bpo: BreakpointObserver,
              private notifyService: ToastrService,
              private addressService: AddressService) {
    this.infoForm = this.formBuilder.group({
      fullName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getUserInfo();
    this.showOnMobile();
  }

  getUserInfo(): void {
    this.profileService.getUser()
      .subscribe(data => {
        this.profile = data;
        this.isChecked = data.pushNotify;
      });
  }

  get p(): any {
    return this.infoForm.controls;
  }

  updateUserInfo(): void {
    if (this.p.fullName.value == '') {
      this.p.fullName.value = this.profile.fullName;
    }
    this.profileService.userUpdate(this.p.fullName.value, this.isChecked)
      .subscribe(() => {
        this.notifyService.success("Данные успешно сохранены");
      });
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















