import { Model } from 'objection';
import { BaseModel } from '../base';
import { AddressModel } from './address.service';
import { AddressValidation } from './address.validation';

describe('AddressModel', () => {

  describe('Address DB Model', () => {
    it('should return be define', () => {
      expect(AddressModel).toBeDefined();
    });

    it('should extend Objection Model class', () => {
      expect(AddressModel.prototype).toBeInstanceOf(Model);
    });

    it('should extend the BaseModel class', () => {
      expect(AddressModel.prototype).toBeInstanceOf(BaseModel);
    });

    it('should have a table name', () => {
      expect(AddressModel.tableName).toBe('account-service.addresses');
    });

    it('should have a json schema', () => {
      expect(AddressModel.jsonSchema).toBeDefined();
    });

    it('should have a schema validation', () => {
      expect(AddressModel.jsonSchema.required).toEqual(['line', 'city']);
      expect(AddressModel.jsonSchema).toEqual(AddressValidation);
    });

    it('should have a relation to the user model', () => {
      expect(AddressModel.relationMappings.user).toBeDefined();
    });
  });
});
