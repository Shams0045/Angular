export class  User {
  fullName: string;
  phone: string;
  address: string;
  pushNotify: boolean;
}

export interface Notification {
  title: string;
  body: string;
}

export interface NotificationResp {
  data: Array<Notification>;
}
