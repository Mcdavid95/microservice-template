import { Model } from 'objection';
import { BaseModel } from '../base';
import { UserRoleModel } from './userRole.service';
import { UserRoleValidation } from './userRole.validation';

describe('UserRoleModel', () => {

  describe('UserRole DB Model', () => {
    it('should return be define', () => {
      expect(UserRoleModel).toBeDefined();
    });

    it('should extend Objection Model class', () => {
      expect(UserRoleModel.prototype).toBeInstanceOf(Model);
    });

    it('should extend the BaseModel class', () => {
      expect(UserRoleModel.prototype).toBeInstanceOf(BaseModel);
    });

    it('should have a table name', () => {
      expect(UserRoleModel.tableName).toBe('account-service.users_roles');
    });

    it('should have a json schema', () => {
      expect(UserRoleModel.jsonSchema).toBeDefined();
    });

    it('should have a schema validation', () => {
      expect(UserRoleModel.jsonSchema).toEqual(UserRoleValidation);
    });

    it('should have a relation to the Role model', () => {
      expect(UserRoleModel.relationMappings.role).toBeDefined();
    });

    it('should have a relation to the User model', () => {
      expect(UserRoleModel.relationMappings.user).toBeDefined();
    });
  });
});
