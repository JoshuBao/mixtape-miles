'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    newsletter: false,
  });
  
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMessage('');
    
    try {
      // In a real application, you would send this data to your API
      // For now, we'll simulate an API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate API validation
      if (!formData.email.includes('@')) {
        throw new Error('Please enter a valid email address');
      }
      
      // Clear form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
        newsletter: false,
      });
      
      setFormState('success');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState('idle');
      }, 5000);
      
    } catch (error) {
      setFormState('error');
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-mixtape-text mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-mixtape-primary/20 rounded-lg focus:ring-2 focus:ring-mixtape-primary focus:border-mixtape-primary bg-mixtape-paper text-mixtape-text"
            required
            disabled={formState === 'submitting'}
          />
        </div>
        
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-mixtape-text mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-mixtape-primary/20 rounded-lg focus:ring-2 focus:ring-mixtape-primary focus:border-mixtape-primary bg-mixtape-paper text-mixtape-text"
            required
            disabled={formState === 'submitting'}
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-mixtape-text mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-mixtape-primary/20 rounded-lg focus:ring-2 focus:ring-mixtape-primary focus:border-mixtape-primary bg-mixtape-paper text-mixtape-text"
          required
          disabled={formState === 'submitting'}
        />
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-mixtape-text mb-1">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-mixtape-primary/20 rounded-lg focus:ring-2 focus:ring-mixtape-primary focus:border-mixtape-primary bg-mixtape-paper text-mixtape-text"
          required
          disabled={formState === 'submitting'}
        >
          <option value="">Select a subject</option>
          <option value="share-story">I want to share my song story</option>
          <option value="suggest-journey">I have a journey suggestion</option>
          <option value="collaboration">I&apos;d like to collaborate</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-mixtape-text mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-2 border border-mixtape-primary/20 rounded-lg focus:ring-2 focus:ring-mixtape-primary focus:border-mixtape-primary bg-mixtape-paper text-mixtape-text"
          required
          disabled={formState === 'submitting'}
        ></textarea>
      </div>
      
      <div className="flex items-start">
        <input
          id="newsletter"
          name="newsletter"
          type="checkbox"
          checked={formData.newsletter}
          onChange={handleCheckboxChange}
          className="h-4 w-4 text-mixtape-primary focus:ring-mixtape-primary border-mixtape-primary/20 rounded mt-1"
          disabled={formState === 'submitting'}
        />
        <label htmlFor="newsletter" className="ml-2 block text-sm text-mixtape-subtitle">
          Sign me up for the newsletter to receive updates on new journeys and stories
        </label>
      </div>
      
      {formState === 'success' && (
        <div className="p-4 bg-mixtape-mint text-mixtape-primary rounded-lg border-l-4 border-mixtape-primary">
          Thank you for your message! We&apos;ll get back to you soon.
        </div>
      )}
      
      {formState === 'error' && (
        <div className="p-4 bg-mixtape-coral text-mixtape-secondary rounded-lg border-l-4 border-mixtape-secondary">
          {errorMessage}
        </div>
      )}
      
      <div>
        <button
          type="submit"
          disabled={formState === 'submitting'}
          className={`w-full py-3 px-6 rounded-full transition duration-300 ${
            formState === 'submitting' 
              ? 'bg-mixtape-primary/50 cursor-not-allowed' 
              : 'bg-gradient-to-r from-mixtape-primary to-mixtape-secondary hover:from-mixtape-primary/90 hover:to-mixtape-secondary/90 text-mixtape-paper shadow-md hover:shadow-lg'
          }`}
        >
          {formState === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
} 