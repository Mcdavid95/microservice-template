import { Model } from 'objection';
import { BaseModel } from '../base';
import { LoginModel } from './login.service';
import { LoginValidation } from './login.validation';

describe('LoginModel', () => {

  describe('Login DB Model', () => {
    it('should return be define', () => {
      expect(LoginModel).toBeDefined();
    });

    it('should extend Objection Model class', () => {
      expect(LoginModel.prototype).toBeInstanceOf(Model);
    });

    it('should extend the BaseModel class', () => {
      expect(LoginModel.prototype).toBeInstanceOf(BaseModel);
    });

    it('should have a table name', () => {
      expect(LoginModel.tableName).toBe('account-service.logins');
    });

    it('should have a json schema', () => {
      expect(LoginModel.jsonSchema).toBeDefined();
    });

    it('should have a schema validation', () => {
      expect(LoginModel.jsonSchema).toEqual(LoginValidation);
      expect(LoginModel.jsonSchema.required).toEqual(['last_login', 'user_id']);
    });

    it('should have a relation to the User model', () => {
      expect(LoginModel.relationMappings.user).toBeDefined();
    });

    it('should have a relation to the Location model', () => {
      expect(LoginModel.relationMappings.location).toBeDefined();
    });

    it('should have a relation to the Device model', () => {
      expect(LoginModel.relationMappings.device).toBeDefined();
    });
  });
});
