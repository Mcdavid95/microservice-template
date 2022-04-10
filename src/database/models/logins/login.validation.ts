import { JSONSchema } from 'objection';

export const LoginValidation: JSONSchema = {
  type: 'object',
  title: 'Login Schema Validation',
  required: ['last_login', 'user_id'],
  properties: {
    last_login: { format: 'date-time' },
    location_id: { format: 'uuid' },
    device_id: { format: 'uuid' },
    user_id: { type: 'string' },
  },
};
