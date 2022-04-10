import { JSONSchema } from 'objection';
import { DatabaseSchema } from '../../database.schema';
import { DatabaseTable } from '../../database.tables';
import { BaseModel } from '../base';
import { IUserRole } from './userRole.interface';
import { UserRoleValidation } from './userRole.validation';

export class UserRoleModel extends BaseModel implements IUserRole {
  public id: IUserRole['id'];
  public role_id: IUserRole['role_id'];
  public user_id: IUserRole['user_id'];
  public created_at: IUserRole['created_at'];
  public updated_at: IUserRole['updated_at'];

  static get tableName() {
    return `${DatabaseSchema.accountService}.${DatabaseTable.users_roles}`;
  }

  static get jsonSchema(): JSONSchema {
    return UserRoleValidation;
  }

  static get relationMappings() {
    return {
      user: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: `../users`,
        join: {
          from: `${DatabaseSchema.accountService}.${DatabaseTable.users_roles}.user_id`,
          to: `${DatabaseSchema.accountService}.${DatabaseTable.users}.id`,
        },
      },

      role: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: `../roles`,
        join: {
          from: `${DatabaseSchema.accountService}.${DatabaseTable.users_roles}.role_id`,
          to: `${DatabaseSchema.accountService}.${DatabaseTable.roles}.id`,
        },
      },
    }
  };
}
