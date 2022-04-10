import { JSONSchema } from 'objection';

export const RoleValidation: JSONSchema = {
  type: 'object',
  title: 'Role Schema Validation',
  required: ['role', 'slug'],
  properties: {
    role: { type: 'string' },
    desc: { type: 'string' },
    slug: { type: 'string' },
    app_name: { type: 'string' },
  },
};
