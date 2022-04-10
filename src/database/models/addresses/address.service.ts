import { JSONSchema } from 'objection';
import { DatabaseSchema } from '../../database.schema';
import { DatabaseTable } from '../../database.tables';
import { BaseModel } from '../base';
import { IAddress } from './address.interface';
import { AddressValidation } from './address.validation';

export class AddressModel extends BaseModel implements IAddress {
  public id: IAddress['id'];
  public city: IAddress['city'];
  public line: IAddress['line'];
  public state: IAddress['state'];
  public country: IAddress['country'];
  public user_id: IAddress['user_id'];
  public zip_code: IAddress['zip_code'];
  public created_at: IAddress['created_at'];
  public updated_at: IAddress['updated_at'];
  public is_preferred: IAddress['is_preferred'];

  static get tableName() {
    return `${DatabaseSchema.accountService}.${DatabaseTable.addresses}`;
  }

  static get jsonSchema(): JSONSchema {
    return AddressValidation;
  }

  static get relationMappings() {
    return {
      user: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: `../users`,
        join: {
          from: `${DatabaseSchema.accountService}.${DatabaseTable.addresses}.user_id`,
          to: `${DatabaseSchema.accountService}.${DatabaseTable.users}.id`,
        },
      },
    };
  }
}
