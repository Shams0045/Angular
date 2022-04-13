export interface RestaurantInfo {
  name: string;
  delivery_info: string;
  description: string;
  addresses: [
    {
      name: string;
    }
  ]
}

export interface RestaurantCart {
  restaurant_id: number;
  restaurant_name: string;
}
