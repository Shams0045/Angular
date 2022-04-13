import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../../../_services';
import {OrderList, OrderListProducts, OrderStatus} from '../../../_models';
import {ToastrService} from 'ngx-toastr';
import {BreakpointObserver} from '@angular/cdk/layout';
import {GlobalService} from '../../../_services/global.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  orderId: number;
  orders: OrderList;
  products: OrderListProducts[] = [];
  orderText: boolean;
  styleToCheck = '(max-width: 479px)';

  orderStatus = new Map([
    ['Обрабатывается', 1],
    ['Курьер едет к ресторану', 2],
    ['Получен курьером из ресторана', 3],
    ['Доставляется Вам', 4],
    ['Доставлен', 5],
    ['Отменен', 0]
  ]);

  takeoutStatus = new Map([
    ['Обрабатывается', 1],
    ['Принят рестораном', 2],
    ['Завершен', 3],
    ['Отменен', 0]
  ]);

  key: string;
  currentStatus: OrderStatus;
  statusNumber: number;
  takeoutStatusNum: number;

  constructor(private activeRoute: ActivatedRoute,
              private orderService: OrderService,
              private notifyService: ToastrService,
              private bpo: BreakpointObserver,
              public globalService: GlobalService) {
  }

  ngOnInit(): void {
    this.orderId = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.showOrder();
    this.showStatus();
    this.showTakeoutStatus();
    this.showOnMobile();
  }

  showOrder(): void {
    this.orderService.getOrder(this.orderId)
      .subscribe(data => {
        this.orders = data.data;
        this.products = this.orders.products;
      });
  }

  showStatus(): void {
    this.orderService.getStatus(this.orderId)
      .subscribe(data => {
        this.currentStatus = data.data;
        for (this.key of this.orderStatus.keys()) {
          if (this.key === this.currentStatus.status) {
            this.statusNumber = this.orderStatus.get(this.key);
          }
        }
      });
  }

  showTakeoutStatus(): void {
    this.orderService.getStatus(this.orderId)
      .subscribe(data => {
        this.currentStatus = data.data;
        for (this.key of this.takeoutStatus.keys()) {
          if (this.key === this.currentStatus.status) {
            this.takeoutStatusNum = this.takeoutStatus.get(this.key);
          }
        }
      });
  }

  removeOrder(): void {
    this.orderService.cancelOrder(this.orderId)
      .subscribe(() => {
        this.notifyService.success('Заказ отменен');
        this.showOrder();
        this.showStatus();
        this.showTakeoutStatus();
      });
  }

  showOnMobile(): void {
    this.bpo.observe([this.styleToCheck])
      .subscribe(result => {
        this.orderText = result.matches;
      });
  }


}
