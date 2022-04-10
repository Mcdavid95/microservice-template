import { Model } from 'objection';
import { BaseModel } from '../base';
import { PasswordResetModel } from './passwordReset.service';
import { PasswordResetValidation } from './passwordReset.validation';

describe('PasswordResetModel', () => {

  describe('PasswordReset DB Model', () => {
    it('should return be define', () => {
      expect(PasswordResetModel).toBeDefined();
    });

    it('should extend Objection Model class', () => {
      expect(PasswordResetModel.prototype).toBeInstanceOf(Model);
    });

    it('should extend the BaseModel class', () => {
      expect(PasswordResetModel.prototype).toBeInstanceOf(BaseModel);
    });

    it('should have a table name', () => {
      expect(PasswordResetModel.tableName).toBe('account-service.password_resets');
    });

    it('should have a json schema', () => {
      expect(PasswordResetModel.jsonSchema).toBeDefined();
    });

    it('should have a schema validation', () => {
      expect(PasswordResetModel.jsonSchema).toEqual(PasswordResetValidation);
      expect(PasswordResetModel.jsonSchema.required).toEqual(['token', 'user_id']);
    });

    it('should have a relation to the User model', () => {
      expect(PasswordResetModel.relationMappings.user).toBeDefined();
    });
  });
});
