import { Model } from 'objection';
import { BaseModel } from '../base';
import { RolePermissionModel } from './rolePermission.service';
import { RolePermissionValidation } from './rolePermission.validation';

describe('RolePermissionModel', () => {

  describe('RolePermission DB Model', () => {
    it('should return be define', () => {
      expect(RolePermissionModel).toBeDefined();
    });

    it('should extend Objection Model class', () => {
      expect(RolePermissionModel.prototype).toBeInstanceOf(Model);
    });

    it('should extend the BaseModel class', () => {
      expect(RolePermissionModel.prototype).toBeInstanceOf(BaseModel);
    });

    it('should have a table name', () => {
      expect(RolePermissionModel.tableName).toBe('account-service.roles_permissions');
    });

    it('should have a json schema', () => {
      expect(RolePermissionModel.jsonSchema).toBeDefined();
    });

    it('should have a schema validation', () => {
      expect(RolePermissionModel.jsonSchema).toEqual(RolePermissionValidation);
    });

    it('should have a relation to the Role model', () => {
      expect(RolePermissionModel.relationMappings.role).toBeDefined();
    });

    it('should have a relation to the Permission model', () => {
      expect(RolePermissionModel.relationMappings.permission).toBeDefined();
    });
  });
});
