import { JSONSchema } from 'objection';
import { DatabaseSchema } from '../../database.schema';
import { DatabaseTable } from '../../database.tables';
import { BaseModel } from '../base';
import { IPermission } from './permission.interface';
import { PermissionValidation } from './permission.validation';

export class PermissionModel extends BaseModel implements IPermission {
  public id: IPermission['id'];
  public desc: IPermission['desc'];
  public permission: IPermission['permission'];
  public created_at: IPermission['created_at'];
  public updated_at: IPermission['updated_at'];

  static get tableName() {
    return `${DatabaseSchema.accountService}.${DatabaseTable.permissions}`;
  }

  static get jsonSchema(): JSONSchema {
    return PermissionValidation;
  }

  static get relationMappings() {
    return {
      roles: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: `../roles`,
        join: {
          from: `${DatabaseSchema.accountService}.${DatabaseTable.permissions}.id`,
          through: {
            from: `${DatabaseSchema.accountService}.${DatabaseTable.roles_permissions}.permission_id`,
            to: `${DatabaseSchema.accountService}.${DatabaseTable.roles_permissions}.role_id`,
          },
          to: `${DatabaseSchema.accountService}.${DatabaseTable.roles}.id`,
        },
      },
    }
  };
}
