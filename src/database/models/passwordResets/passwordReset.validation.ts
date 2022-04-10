import { JSONSchema } from 'objection';

export const PasswordResetValidation: JSONSchema = {
  type: 'object',
  title: 'PasswordReset Schema Validation',
  required: ['token', 'user_id'],
  properties: {
    token: { type: 'string' },
    user_id: { type: 'string' },
  },
};
