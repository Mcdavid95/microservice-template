import { Model } from 'objection';
import { BaseModel } from '../base';
import { UserModel } from './user.service';
import { UserValidation } from './user.validation';

describe('UserModel', () => {

  describe('User DB Model', () => {
    it('should return be define', () => {
      expect(UserModel).toBeDefined();
    });

    it('should extend Objection Model class', () => {
      expect(UserModel.prototype).toBeInstanceOf(Model);
    });

    it('should extend the BaseModel class', () => {
      expect(UserModel.prototype).toBeInstanceOf(BaseModel);
    });

    it('should have a table name', () => {
      expect(UserModel.tableName).toBe('account-service.users');
    });

    it('should have a json schema', () => {
      expect(UserModel.jsonSchema).toBeDefined();
    });

    it('should have a schema validation', () => {
      expect(UserModel.jsonSchema).toEqual(UserValidation);
      expect(UserModel.jsonSchema.required).toEqual(['first_name', 'last_name', 'username', 'dob', 'password', 'phone', 'email', 'bvn']);
    });

    it('should have a relation to the passwordReset model', () => {
      expect(UserModel.relationMappings.passwordResets).toBeDefined();
    });

    it('should have a relation to the business model', () => {
      expect(UserModel.relationMappings.businesses).toBeDefined();
    });

    it('should have a relation to the address model', () => {
      expect(UserModel.relationMappings.addresses).toBeDefined();
    });

    it('should have a relation to the device model', () => {
      expect(UserModel.relationMappings.devices).toBeDefined();
    });

    it('should have a relation to the document model', () => {
      expect(UserModel.relationMappings.documents).toBeDefined();
    });

    it('should have a relation to the location model', () => {
      expect(UserModel.relationMappings.locations).toBeDefined();
    });

    it('should have a relation to the login model', () => {
      expect(UserModel.relationMappings.logins).toBeDefined();
    });
  });
});
