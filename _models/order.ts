export interface Order {
  address_name: string,
  created_at: string,
  order_id: number,
  restaurant_name: string,
  status: string,
  total_price: number,
  total_discount: number,
  is_takeout: boolean
}

export interface OrderResp {
  data: Array<Order>;
}

export interface MakeOder {
  data: MakeOrderResp;
  comment?: string,
  delivery_price: number,
  from: number,
  is_takeout: boolean;
  payment_id: number,
  products: Array<OrderItem>,
  restaurant_id: number,
  to: number,
  total: number,
  total_discount?: number
}

export interface MakeOrderResp {
  order_id?: number
}

export interface OrderItem {
  amount: number,
  product_discount_price: number,
  id: number,
  option_id: number,
  option_name: string,
  option_price: string,
  product_id: number,
  product_name: string,
  product_price: number
}

export interface OrderList {
  order_id: number,
  total_price: number,
  total_discount: number,
  address_name: string,
  restaurant_name: string,
  is_takeout?: boolean,
  courier?: CourierStatus,
  products: OrderListProducts[],
  delivery_price: number;
}

export interface OrderListResp {
  data: OrderList;
}

export interface CourierStatus {
  name: string;
  phone_number: string;
  status: string;
}

export interface OrderListProducts {
  id: number,
  amount: number,
  product_price: number,
  product_name: string,
  total_discount: number,
  total_price: number,
  option_name: string,
  discount_price: number
}

export interface Status {
  data: CourierStatus;
}

export interface OrderStatus {
  status: string;
}













