import { JSONSchema } from 'objection';

export const UserRoleValidation: JSONSchema = {
  type: 'object',
  title: 'UserRole Schema Validation',
  properties: {
    role_id: { type: 'string' },
    user_id: { type: 'string' },
  },
};
