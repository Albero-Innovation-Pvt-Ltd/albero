import { useState } from 'react';
import { ContactFormData, SubmissionResponse } from './types';
import { submitContactForm } from './api';

export const useContactForm = (reset: () => void) => {
  const [submitStatus, setSubmitStatus] = useState<SubmissionResponse | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await submitContactForm(data);
      setSubmitStatus(response);
      
      if (response.success) {
        reset(); // Reset form on successful submission
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'An error occurred. Please try again later.'
      });
    }
  };

  return {
    onSubmit,
    submitStatus,
    setSubmitStatus
  };
};