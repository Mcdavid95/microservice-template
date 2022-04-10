import { IBase } from '../base';

export interface IUser extends IBase {
  first_name: string;
  last_name: string;
  username: string;
  dob: Date;
  password: string;
  phone: string;
  phone_verified?: boolean;
  email: string;
  email_verified?: boolean;
  bvn: string;
  bvn_verified?: boolean;
  is_active?: boolean;
  gender: string;
  marital_status?: string;
  deleted_at?: Date;
}
