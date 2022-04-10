import { JSONSchema } from 'objection';

export const RolePermissionValidation: JSONSchema = {
  type: 'object',
  title: 'RolePermission Schema Validation',
  properties: {
    role_id: { type: 'string' },
    permission_id: { type: 'string' },
  },
};
