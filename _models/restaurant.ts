export interface Restaurant {
  id: number;
  name: string;
  file_name: string;
  min_price: string;
  delivery_time: string;
  description?: string;
}

export interface RestaurantResp {
  data: Array<Restaurant>;
}

export interface LocalRestaurant {
  restaurant_id: number;
  restaurant_name: string;
}

export interface Delivery {
  address_id?: number;
  price?: number;
}

export interface DeliveryResp {
  data: Array<Delivery>
}

