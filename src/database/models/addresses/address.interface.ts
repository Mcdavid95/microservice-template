import { IBase } from '../base';

export interface IAddress extends IBase {
  is_preferred?: boolean;
  line: string;
  zip_code: string;
  city: string;
  state?: string;
  country?: string;
  user_id?: string;
}

export interface IAddressPartial extends Partial<IAddress> {
  address?: string;
}
