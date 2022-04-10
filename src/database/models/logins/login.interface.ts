import { IBase } from '../base';

export interface ILogin extends IBase{
  last_login: Date;
  user_id: string;
  location_id: string;
  device_id: string;
}
