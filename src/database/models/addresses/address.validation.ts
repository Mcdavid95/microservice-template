import { JSONSchema } from 'objection';

export const AddressValidation: JSONSchema = {
  type: 'object',
  required: ['line', 'city'],
  title: 'Address Schema Validation',
  properties: {
    line: { type: 'string' },
    is_preferred: { type: 'boolean' },
    zip_code: { type: 'string' },
    city: { type: 'string' },
    state: { type: 'string' },
    country: { type: 'string' },
    user_id: { type: 'string' },
  }
}
