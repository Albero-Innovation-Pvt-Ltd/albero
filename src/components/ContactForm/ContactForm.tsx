import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import * as Label from '@radix-ui/react-label';
import { Loader2 } from 'lucide-react';
import { contactFormSchema, type ContactFormData } from './types';
import { FormField } from './FormField';
import { submitContactForm } from './api';
import { useContactForm } from './useContactForm';

/**
 * ContactForm Component
 * 
 * A fully accessible, responsive contact form with validation and error handling.
 * Uses React Hook Form for form management and Zod for validation.
 */
export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur'
  });

  const { onSubmit, submitStatus, setSubmitStatus } = useContactForm(reset);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
      >
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        
        <AnimatePresence>
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`mb-6 p-4 rounded-lg ${
                submitStatus.success ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
              }`}
            >
              {submitStatus.message}
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="First Name"
              error={errors.firstName?.message}
              required
            >
              <input
                {...register('firstName')}
                type="text"
                placeholder="John"
                className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 focus:border-saatify-blue focus:outline-none transition-colors"
                aria-invalid={!!errors.firstName}
              />
            </FormField>

            <FormField
              label="Last Name"
              error={errors.lastName?.message}
              required
            >
              <input
                {...register('lastName')}
                type="text"
                placeholder="Doe"
                className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 focus:border-saatify-blue focus:outline-none transition-colors"
                aria-invalid={!!errors.lastName}
              />
            </FormField>
          </div>

          <FormField
            label="Email"
            error={errors.email?.message}
            required
          >
            <input
              {...register('email')}
              type="email"
              placeholder="john.doe@example.com"
              className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 focus:border-saatify-blue focus:outline-none transition-colors"
              aria-invalid={!!errors.email}
            />
          </FormField>

          <FormField
            label="Company"
            error={errors.company?.message}
            required
          >
            <input
              {...register('company')}
              type="text"
              placeholder="Acme Inc."
              className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 focus:border-saatify-blue focus:outline-none transition-colors"
              aria-invalid={!!errors.company}
            />
          </FormField>

          <FormField
            label="Message"
            error={errors.message?.message}
            required
          >
            <textarea
              {...register('message')}
              rows={5}
              placeholder="How can we help you?"
              className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 focus:border-saatify-blue focus:outline-none transition-colors resize-none"
              aria-invalid={!!errors.message}
            />
          </FormField>

          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <input
                {...register('acceptTerms')}
                type="checkbox"
                id="acceptTerms"
                className="mt-1"
              />
              <Label.Root htmlFor="acceptTerms" className="text-sm text-white/60">
                I agree to the{' '}
                <a href="/terms" className="text-saatify-blue hover:underline">
                  terms and conditions
                </a>
              </Label.Root>
            </div>
            {errors.acceptTerms && (
              <p className="text-sm text-red-400">{errors.acceptTerms.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-6 bg-saatify-blue hover:bg-saatify-blue/90 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;