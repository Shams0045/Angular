export interface UserAddress {
  id: number;
  city_id: number;
  default: boolean;
  info: string;
  lat: string;
  lon: string;
  name: string;
}

export interface UserAddressResp {
 data: Array<UserAddress>;
}
