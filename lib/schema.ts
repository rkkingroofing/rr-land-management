import { z } from 'zod';

export const SERVICE_OPTIONS = [
  'Septic',
  'Driveway',
  'Pond',
  'Land Clearing',
  'Utilities',
  'Bush Hogging',
  'Retaining Wall',
  'Other',
] as const;

export const QuoteFormSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/[\d\s\-\(\)\+\.]+/, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email'),
  address: z.string().optional(),
  service: z.enum(SERVICE_OPTIONS, { required_error: 'Pick a service' }),
  details: z.string().min(10, 'Tell us a little about the project (10+ characters)'),
  source: z.string().optional(),
  // Honeypot field — must be empty (bots fill it)
  website: z.string().max(0).optional(),
});

export type QuoteFormValues = z.infer<typeof QuoteFormSchema>;
