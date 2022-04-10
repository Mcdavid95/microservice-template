import { Model } from 'objection';
import { BaseModel } from '../base';
import { PermissionModel } from './permission.service';
import { PermissionValidation } from './permission.validation';

describe('PermissionModel', () => {

  describe('Permission DB Model', () => {
    it('should return be define', () => {
      expect(PermissionModel).toBeDefined();
    });

    it('should extend Objection Model class', () => {
      expect(PermissionModel.prototype).toBeInstanceOf(Model);
    });

    it('should extend the BaseModel class', () => {
      expect(PermissionModel.prototype).toBeInstanceOf(BaseModel);
    });

    it('should have a table name', () => {
      expect(PermissionModel.tableName).toBe('account-service.permissions');
    });

    it('should have a json schema', () => {
      expect(PermissionModel.jsonSchema).toBeDefined();
    });

    it('should have a schema validation', () => {
      expect(PermissionModel.jsonSchema).toEqual(PermissionValidation);
      expect(PermissionModel.jsonSchema.required).toEqual(['permission']);
    });

    it('should have a relation to the Role model', () => {
      expect(PermissionModel.relationMappings.roles).toBeDefined();
    });
  });
});
