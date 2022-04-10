import { IBase } from '../base';

export interface IRole extends IBase {
  role: string;
  desc?: string;
  slug: string;
  app_name?: string;
}
