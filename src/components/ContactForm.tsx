'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useDarkMode } from '@/contexts/DarkModeContext';

interface ContactFormProps {
  onSubmit?: (data: FormData) => Promise<boolean>;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const { isDarkMode } = useDarkMode();
  
  // Dynamic colors based on theme
  const textColor = isDarkMode ? 'text-white/90' : 'text-black/90';
  const textColorBold = isDarkMode ? 'text-white' : 'text-black';
  const bgColor = isDarkMode ? 'bg-white/5' : 'bg-black/5';
  const borderColor = isDarkMode ? 'border-white/20' : 'border-black/20';
  const borderColorFocus = isDarkMode ? 'focus:ring-white/30 focus:border-transparent' : 'focus:ring-black/30 focus:border-transparent';
  const placeholderColor = isDarkMode ? 'placeholder-white/50' : 'placeholder-black/50';
  const buttonBg = isDarkMode ? 'from-white/20 to-white/0' : 'from-black/20 to-black/0';
  const buttonBorder = isDarkMode ? 'border-white/30' : 'border-black/30';
  const buttonShadow = isDarkMode ? 'shadow-black/20' : 'shadow-white/20';
  const buttonBoxShadow = isDarkMode 
    ? '[box-shadow:0_0_2px_#fff_inset,_0_0_10px_#fff_inset] hover:[box-shadow:0_0_2px_#fff_inset,_0_0_15px_#fff_inset,_0_0_30px_#888]'
    : '[box-shadow:0_0_2px_#000_inset,_0_0_10px_#000_inset] hover:[box-shadow:0_0_2px_#000_inset,_0_0_15px_#000_inset,_0_0_30px_#888]';

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
        <label htmlFor="name" className={`block ${textColor} text-sm font-medium mb-2`}>
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
          className={`w-full px-4 py-3 ${bgColor} border ${borderColor} rounded-lg ${textColorBold} ${placeholderColor} focus:outline-none focus:ring-2 ${borderColorFocus} disabled:opacity-50`}
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className={`block ${textColor} text-sm font-medium mb-2`}>
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
          className={`w-full px-4 py-3 ${bgColor} border ${borderColor} rounded-lg ${textColorBold} ${placeholderColor} focus:outline-none focus:ring-2 ${borderColorFocus} disabled:opacity-50`}
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className={`block ${textColor} text-sm font-medium mb-2`}>
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
          className={`w-full px-4 py-3 ${bgColor} border ${borderColor} rounded-lg ${textColorBold} ${placeholderColor} focus:outline-none focus:ring-2 ${borderColorFocus} resize-none disabled:opacity-50`}
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
          className={`w-full bg-gradient-to-b ${buttonBg} ${textColorBold} backdrop-blur-lg border ${buttonBorder} shadow-xl ${buttonShadow} rounded-full text-lg font-semibold tracking-wide transition-all duration-300 py-4 ${buttonBoxShadow} disabled:opacity-50 disabled:cursor-not-allowed`}
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