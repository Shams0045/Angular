export interface Products {
  id: number;
  name: string;
  description: string;
  discount_price: number;
  file_name: string;
  food_info: string;
  price: string;
}

export interface ProductsResp {
  data: Array<Products>;
}

export interface ProductOptions {
  id: number;
  name: string;
  file_name: string;
  product_info: string;
  price: number;
  discount_price: number;
  options?: Option [];
}

export interface Option {
  id: number;
  name: number;
  price: number;
}

export interface CartProduct {
  amount: number;
  option_id: number;
  option_name: string;
  option_price: number;
  product_id: number;
  product_name: string;
  product_price: number;
  product_discount_price: number,
  product_discount_total: number,
  product_old_price: number,
  product_total_price: number;
  file_name: string,
}

export interface ProductOptionsResp {
  data: ProductOptions;
}









