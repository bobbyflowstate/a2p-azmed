'use client';

import { useState } from 'react';
import { ContactFormData } from '@/types/contact';

export default function ContactForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // Allow empty phone since it's optional
    if (!phone) return true;
    // Remove all non-numeric characters
    const cleanPhone = phone.replace(/\D/g, '');
    // Check if it's a valid US phone number (10 digits)
    return cleanPhone.length === 10;
  };

  const formatPhoneNumber = (phone: string): string => {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length <= 3) return cleaned;
    if (cleaned.length <= 6) return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    // Show success message
    setShowSuccess(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (name === 'phone') {
      const formattedPhone = formatPhoneNumber(value);
      setFormData((prev) => ({ ...prev, phone: formattedPhone }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 p-6">
      {showSuccess && (
        <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-md">
          Your message has been sent! We will get back to you as soon as possible.
        </div>
      )}
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          className="mt-1 block w-full rounded-md border border-gray-200 h-12 px-4 focus:border-black focus:ring-0 text-gray-900"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          title="Please enter a valid email address"
          aria-describedby="email-hint"
          className="mt-1 block w-full rounded-md border border-gray-200 h-12 px-4 focus:border-black focus:ring-0 text-gray-900"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone (optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9-]*"
          title="Please enter a valid phone number (e.g., 123-456-7890)"
          aria-describedby="phone-hint"
          placeholder="123-456-7890"
          className="mt-1 block w-full rounded-md border border-gray-200 h-12 px-4 focus:border-black focus:ring-0 text-gray-900"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-md border border-gray-200 min-h-[120px] p-4 focus:border-black focus:ring-0 text-gray-900"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            className="h-5 w-5 rounded border border-gray-200 text-gray-600 focus:ring-0 focus:border-black"
            checked={formData.consent}
            onChange={handleChange}
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="consent" className="font-medium text-gray-700">
            I have read and agree to the Privacy Policy and Terms of Service,
            and I consent to receive text communications related to my inquiry.
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
}