'use client';

import { useState } from 'react';
import { ContactFormData } from '@/types/contact';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 p-6">
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
          className="mt-1 block w-full rounded-md border border-gray-200 h-12 px-4 focus:border-black focus:ring-0 text-gray-900"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
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