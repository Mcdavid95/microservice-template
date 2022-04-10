import { Model } from 'objection';
import { v4 as uuid } from 'uuid';
import { IBase } from './base.interface';


/*
* @class: BaseModel
*
* @description: Set general configuration for
* other models
*/
export class BaseModel extends Model implements IBase {
  id!: IBase['id'];
  created_at!: IBase['created_at'];
  updated_at!: IBase['updated_at'];

  // Set timestamps and id before creating new data in the db
  $beforeInsert() {
    this.id = uuid();
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  // Update the updated_at timestamp for the affected rows
  $beforeUpdate() {
    this.updated_at = new Date();
  }

  // Set the default path for all the models
  static get modelPaths(): string[] {
    return [__dirname];
  }
}
