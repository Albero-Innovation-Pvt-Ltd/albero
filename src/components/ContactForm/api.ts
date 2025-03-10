import { ContactFormData, SubmissionResponse } from './types';

/**
 * Simulates an API call to submit the contact form data
 * In a real application, this would make an actual API request
 */
export const submitContactForm = async (
  data: ContactFormData
): Promise<SubmissionResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Simulate success response
  // In a real application, this would be the response from your API
  return {
    success: true,
    message: 'Thank you for your message. We will get back to you soon!'
  };
};