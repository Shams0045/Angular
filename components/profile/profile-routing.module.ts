import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile.component';
import {AuthGuard} from '../../_helpers';
import {OrderComponent} from './order/order.component';
import {DataComponent} from './user-info/data.component';
import {AddressComponent} from './address/address.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {NotificationComponent} from './notification/notification.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'orders', component: OrderComponent},
      {path: 'data', component: DataComponent},
      {path: 'address', component: AddressComponent},
      {path: 'notifications', component: NotificationComponent},
      {path: ':id', component: OrderDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
