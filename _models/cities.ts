export interface Cities {
  is_active: boolean;
  id: number;
  name: string;
  bounds: {
    lat1: number;
    lon1: number;
    lat2: number;
    lon2: number;
  }
  center: {
    lat: number;
    lon: number;
  }
}

export interface CityResp {
  data: Array<Cities>;
}

