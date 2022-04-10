import { JSONSchema } from 'objection';
import { DatabaseSchema } from '../../database.schema';
import { DatabaseTable } from '../../database.tables';
import { BaseModel } from '../base';
import { IUser } from './user.interface';
import { UserValidation } from './user.validation';

export class UserModel extends BaseModel implements IUser {
  public id: IUser['id'];
  public dob: IUser['dob'];
  public bvn: IUser['bvn'];
  public email: IUser['email'];
  public phone: IUser['phone'];
  public gender: IUser['gender'];
  public username: IUser['username'];
  public password: IUser['password'];
  public is_active: IUser['is_active'];
  public last_name: IUser['last_name'];
  public first_name: IUser['first_name'];
  public deleted_at: IUser['deleted_at'];
  public created_at: IUser['created_at'];
  public updated_at: IUser['updated_at'];
  public bvn_verified: IUser['bvn_verified'];
  public marital_status: IUser['marital_status'];
  public phone_verified: IUser['phone_verified'];
  public email_verified: IUser['email_verified'];

  static get tableName() {
    return `${DatabaseSchema.accountService}.${DatabaseTable.users}`;
  }

  static get jsonSchema(): JSONSchema {
    return UserValidation;
  }

  static get relationMappings() {
    return {
      documents: {
        relation: BaseModel.HasManyRelation,
        modelClass: `../documents`,
        join: {
          from: `${DatabaseSchema.accountService}.${DatabaseTable.users}.id`,
          to: `${DatabaseSchema.accountService}.${DatabaseTable.documents}.user_id`,
        },
      },

      businesses: {
        relation: BaseModel.HasManyRelation,
        modelClass: `../businesses`,
        join: {
          from: `${DatabaseSchema.accountService}.${DatabaseTable.users}.id`,
          to: `${DatabaseSchema.accountService}.${DatabaseTable.businesses}.user_id`,
        },
      },

      addresses: {
        relation: BaseModel.HasManyRelation,
        modelClass: `../addresses`,
        join: {
          from: `${DatabaseSchema.accountService}.${DatabaseTable.users}.id`,
          to: `${DatabaseSchema.accountService}.${DatabaseTable.addresses}.user_id`,
        },
      },

      passwordResets: {
        relation: BaseModel.HasManyRelation,
        modelClass: `../passwordResets`,
        join: {
          from: `${DatabaseSchema.accountService}.${DatabaseTable.users}.id`,
          to: `${DatabaseSchema.accountService}.${DatabaseTable.password_resets}.user_id`,
        },
      },

      logins: {
        relation: BaseModel.HasManyRelation,
        modelClass: `../logins`,
        join: {
          from: `${DatabaseSchema.accountService}.${DatabaseTable.users}.id`,
          to: `${DatabaseSchema.accountService}.${DatabaseTable.logins}.user_id`,
        },
      },

      devices: {
        relation: BaseModel.HasManyRelation,
        modelClass: `../devices`,
        join: {
          from: `${DatabaseSchema.accountService}.${DatabaseTable.users}.id`,
          to: `${DatabaseSchema.accountService}.${DatabaseTable.devices}.user_id`,
        },
      },

      locations: {
        relation: BaseModel.HasManyRelation,
        modelClass: `../locations`,
        join: {
          from: `${DatabaseSchema.accountService}.${DatabaseTable.users}.id`,
          to: `${DatabaseSchema.accountService}.${DatabaseTable.locations}.user_id`,
        },
      },
    };
  }
}
