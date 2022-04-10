import { JSONSchema } from 'objection';
import { DatabaseSchema } from '../../database.schema';
import { DatabaseTable } from '../../database.tables';
import { BaseModel } from '../base';
import { IRolePermission } from './rolePermission.interface';
import { RolePermissionValidation } from './rolePermission.validation';

export class RolePermissionModel extends BaseModel implements IRolePermission {
  public id: IRolePermission['id'];
  public role_id: IRolePermission['role_id'];
  public created_at: IRolePermission['created_at'];
  public updated_at: IRolePermission['updated_at'];
  public permission_id: IRolePermission['permission_id'];

  static get tableName() {
    return `${DatabaseSchema.accountService}.${DatabaseTable.roles_permissions}`;
  }

  static get jsonSchema(): JSONSchema {
    return RolePermissionValidation;
  }

  static get relationMappings() {
    return {
      permission: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: `../permissions`,
        join: {
          from: `${DatabaseSchema.accountService}.${DatabaseTable.roles_permissions}.permission_id`,
          to: `${DatabaseSchema.accountService}.${DatabaseTable.permissions}.id`,
        },
      },

      role: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: `../roles`,
        join: {
          from: `${DatabaseSchema.accountService}.${DatabaseTable.roles_permissions}.role_id`,
          to: `${DatabaseSchema.accountService}.${DatabaseTable.roles}.id`,
        },
      },
    }
  };
}
