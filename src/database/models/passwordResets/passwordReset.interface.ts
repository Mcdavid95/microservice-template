import { IBase } from '../base';

export interface  IPasswordReset extends IBase {
  user_id: string;
  token: string;
}
