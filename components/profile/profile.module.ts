import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileComponent} from './profile.component';
import {DataComponent} from './user-info/data.component';
import {AddressComponent} from './address/address.component';
import {OrderComponent} from './order/order.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {AddAddressComponent} from './add-address/add-address.component';
import {AngularYandexMapsModule} from 'angular8-yandex-maps';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { NotificationComponent } from './notification/notification.component';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    ProfileComponent,
    DataComponent,
    AddressComponent,
    OrderComponent,
    AddAddressComponent,
    OrderDetailComponent,
    NotificationComponent
  ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgxPaginationModule,
        AngularYandexMapsModule,
        NgxSkeletonLoaderModule
    ],
  exports: [
    AddAddressComponent
  ]
})
export class ProfileModule {
}
