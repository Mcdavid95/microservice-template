import { Model } from 'objection';
import { BaseModel } from '../base';
import { RoleModel } from './role.service';
import { RoleValidation } from './role.validation';

describe('RoleModel', () => {

  describe('Role DB Model', () => {
    it('should return be define', () => {
      expect(RoleModel).toBeDefined();
    });

    it('should extend Objection Model class', () => {
      expect(RoleModel.prototype).toBeInstanceOf(Model);
    });

    it('should extend the BaseModel class', () => {
      expect(RoleModel.prototype).toBeInstanceOf(BaseModel);
    });

    it('should have a table name', () => {
      expect(RoleModel.tableName).toBe('account-service.roles');
    });

    it('should have a json schema', () => {
      expect(RoleModel.jsonSchema).toBeDefined();
    });

    it('should have a schema validation', () => {
      expect(RoleModel.jsonSchema).toEqual(RoleValidation);
      expect(RoleModel.jsonSchema.required).toEqual(['role', 'slug']);
    });

    it('should have a relation to the users model', () => {
      expect(RoleModel.relationMappings.users).toBeDefined();
    });

    it('should have a relation to the permissions  model', () => {
      expect(RoleModel.relationMappings.permissions).toBeDefined();
    });
  });
});
