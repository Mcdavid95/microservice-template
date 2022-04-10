import { IBase } from '../base';

export interface IRolePermission extends IBase {
  role_id: string;
  permission_id: string;
}
