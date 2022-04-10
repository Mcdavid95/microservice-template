import { JSONSchema } from 'objection';

export const PermissionValidation: JSONSchema = {
  type: 'object',
  title: 'Permission Schema Validation',
  required: ['permission'],
  properties: {
    permission: { type: 'string' },
    desc: { type: 'string' },
  },
};
