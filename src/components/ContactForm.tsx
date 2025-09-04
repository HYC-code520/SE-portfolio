'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  onSubmit?: (data: FormData) => Promise<boolean>;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (onSubmit) {
        const success = await onSubmit(formData);
        setSubmitStatus(success ? 'success' : 'error');
      } else {
        // Default behavior - just log the data
        console.log('Form submitted:', formData);
        setSubmitStatus('success');
      }
      
      if (submitStatus === 'success') {
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-white/90 text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent disabled:opacity-50"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-white/90 text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent disabled:opacity-50"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-white/90 text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          rows={5}
          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent resize-none disabled:opacity-50"
          placeholder="Tell me about your project..."
        />
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-3"
        >
          <CheckCircle className="w-5 h-5" />
          <span>Message sent successfully!</span>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3"
        >
          <AlertCircle className="w-5 h-5" />
          <span>Failed to send message. Please try again.</span>
        </motion.div>
      )}

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-b from-white/20 to-white/0 text-white backdrop-blur-lg border border-white/30 shadow-xl shadow-black/20 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 py-4 [box-shadow:0_0_2px_#fff_inset,_0_0_10px_#fff_inset] hover:[box-shadow:0_0_2px_#fff_inset,_0_0_15px_#fff_inset,_0_0_30px_#888] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Sending...</span>
            </div>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </motion.div>
    </form>
  );
}