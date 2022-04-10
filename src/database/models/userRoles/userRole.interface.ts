import { IBase } from '../base';

export interface IUserRole extends IBase {
  role_id: string;
  user_id: string;
}
