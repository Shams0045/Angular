export interface Category {
  id: number;
  name: string;
  is_main: boolean;
}
export interface CategoryResp {
  data: Array<Category>;
}
