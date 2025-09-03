'use client';

import { useState } from 'react';
import { ContactFormData } from '@/types/contact';
import Link from 'next/link';

export default function ContactForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    phone: '',
    marketingConsent: false,
    nonmarketingConsent: false,
  });

  const validatePhone = (phone: string): boolean => {
    const cleanPhone = phone.replace(/\D/g, '');
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
    
    if (!validatePhone(formData.phone)) {
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
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'phone') {
      const formattedPhone = formatPhoneNumber(value);
      setFormData((prev) => ({ ...prev, phone: formattedPhone }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 p-6">
      {showSuccess && (
        <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-md">
          We've received your number! We will get back to you as soon as possible.
        </div>
      )}

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          pattern="[0-9-]*"
          title="Please enter a valid phone number (e.g., 123-456-7890)"
          placeholder="123-456-7890"
          className="mt-1 block w-full rounded-md border border-gray-200 h-12 px-4 focus:border-black focus:ring-0 text-gray-900"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="marketingConsent"
              name="marketingConsent"
              type="checkbox"
              required
              className="h-5 w-5 rounded border border-gray-200 text-gray-600 focus:ring-0 focus:border-black"
              checked={formData.marketingConsent}
              onChange={handleChange}
            />
          </div>
          <div className="ml-3">
            <label htmlFor="marketingConsent" className="text-sm text-gray-700">
              I consent to receive marketing text messages from Arizona Integrated Medical LLC at the phone number provided. 
              Frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out.
            </label>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="nonmarketingConsent"
              name="nonmarketingConsent"
              type="checkbox"
              required
              className="h-5 w-5 rounded border border-gray-200 text-gray-600 focus:ring-0 focus:border-black"
              checked={formData.nonmarketingConsent}
              onChange={handleChange}
            />
          </div>
          <div className="ml-3">
            <label htmlFor="nonmarketingConsent" className="text-sm text-gray-700">
              I consent to receive non-marketing text messages from Arizona Integrated Medical LLC about my order updates, 
              appointment reminders, etc. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out.
            </label>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          By continuing, you agree to our{' '}
          <Link href="/privacy" className="text-blue-600 hover:text-blue-800">
            Privacy Policy
          </Link>
          {' '}and{' '}
          <Link href="/terms" className="text-blue-600 hover:text-blue-800">
            Terms of Service
          </Link>
          .
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