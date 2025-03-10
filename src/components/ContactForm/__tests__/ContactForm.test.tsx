import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from '../ContactForm';

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />);
    
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/company/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('displays validation errors for empty required fields', async () => {
    render(<ContactForm />);
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/first name must be at least/i)).toBeInTheDocument();
      expect(screen.getByText(/last name must be at least/i)).toBeInTheDocument();
      expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
    });
  });

  it('submits the form with valid data', async () => {
    render(<ContactForm />);
    
    await userEvent.type(screen.getByLabelText(/first name/i), 'John');
    await userEvent.type(screen.getByLabelText(/last name/i), 'Doe');
    await userEvent.type(screen.getByLabelText(/email/i), 'john.doe@example.com');
    await userEvent.type(screen.getByLabelText(/company/i), 'Acme Inc');
    await userEvent.type(screen.getByLabelText(/message/i), 'This is a test message');
    await userEvent.click(screen.getByLabelText(/terms and conditions/i));

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/thank you for your message/i)).toBeInTheDocument();
    });
  });
});