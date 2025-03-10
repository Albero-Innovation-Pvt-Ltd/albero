import { z } from 'zod';

// Form validation schema
export const contactFormSchema = z.object({
  firstName: z.string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters'),
  lastName: z.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters'),
  email: z.string()
    .email('Please enter a valid email address'),
  company: z.string()
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name must be less than 100 characters'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
  acceptTerms: z.boolean()
    .refine(val => val === true, 'You must accept the terms and conditions')
});

// Infer TypeScript type from schema
export type ContactFormData = z.infer<typeof contactFormSchema>;

// API response type
export interface SubmissionResponse {
  success: boolean;
  message: string;
}