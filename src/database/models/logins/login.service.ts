import { JSONSchema } from 'objection';
import { DatabaseSchema } from '../../database.schema';
import { DatabaseTable } from '../../database.tables';
import { BaseModel } from '../base';
import { ILogin } from './login.interface';
import { LoginValidation } from './login.validation';

export class LoginModel extends BaseModel implements ILogin {
  public id: ILogin['id'];
  public user_id: ILogin['user_id'];
  public device_id: ILogin['device_id'];
  public last_login: ILogin['last_login'];
  public created_at: ILogin['created_at'];
  public updated_at: ILogin['updated_at'];
  public location_id: ILogin['location_id'];

  static get tableName() {
    return `${DatabaseSchema.accountService}.${DatabaseTable.logins}`;
  }

  static get jsonSchema(): JSONSchema {
    return LoginValidation;
  }

  static get relationMappings() {
    return {
      user: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: `../users`,
        join: {
          from: `${DatabaseSchema.accountService}.${DatabaseTable.logins}.user_id`,
          to: `${DatabaseSchema.accountService}.${DatabaseTable.users}.id`,
        },
      },

      location: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: `../locations`,
        join: {
          from: `${DatabaseSchema.accountService}.${DatabaseTable.logins}.location_id`,
          to: `${DatabaseSchema.accountService}.${DatabaseTable.locations}.id`,
        },
      },

      device: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: `../devices`,
        join: {
          from: `${DatabaseSchema.accountService}.${DatabaseTable.logins}.device_id`,
          to: `${DatabaseSchema.accountService}.${DatabaseTable.devices}.id`,
        },
      },
    }
  };
}
