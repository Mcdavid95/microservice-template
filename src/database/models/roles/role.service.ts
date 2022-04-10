import { JSONSchema } from 'objection';
import { DatabaseSchema } from '../../database.schema';
import { DatabaseTable } from '../../database.tables';
import { BaseModel } from '../base';
import { IRole } from './role.interface';
import { RoleValidation } from './role.validation';

export class RoleModel extends BaseModel implements IRole {
  public id: IRole['id'];
  public role: IRole['role'];
  public desc: IRole['desc'];
  public slug: IRole['slug'];
  public app_name: IRole['app_name'];
  public created_at: IRole['created_at'];
  public updated_at: IRole['updated_at'];

  static get tableName() {
    return `${DatabaseSchema.accountService}.${DatabaseTable.roles}`;
  }

  static get jsonSchema(): JSONSchema {
    return RoleValidation;
  }

  static get relationMappings() {
    return {
      permissions: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: `../permissions`,
        join: {
          from: `${DatabaseTable.roles}.id`,
          through: {
            from: `${DatabaseTable.roles_permissions}.role_id`,
            to: `${DatabaseTable.roles_permissions}.permission_id`,
          },
          to: `${DatabaseTable.permissions}.id`,
        },
      },

      users: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: `../users`,
        join: {
          from: `${DatabaseSchema.accountService}.${DatabaseTable.roles}.id`,
          through: {
            from: `${DatabaseSchema.accountService}.${DatabaseTable.users_roles}.role_id`,
            to: `${DatabaseSchema.accountService}.${DatabaseTable.users_roles}.user_id`,
          },
          to: `${DatabaseSchema.accountService}.${DatabaseTable.users}.id`,
        },
      },
    }
  };
}
