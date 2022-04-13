export interface Promotion {
  id: number;
  file_name: string;
}
export interface PromotionResp {
  data: Array<Promotion>;
}


export interface PromotionDetail {
  id: number;
  title: string;
  description: string;
  file_name: string;
}
export interface PromotionDetailResp {
  data: Array<PromotionDetail>;
}
