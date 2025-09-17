'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Send, CheckCircle, Github, Linkedin } from 'lucide-react';
import { containerVariants, itemVariants } from '@/config/animations';

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/mrbawklk', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Sorry, there was an error sending your message. Please try again or email me directly at houyu_chen@fitnyc.edu');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      className="relative z-30 flex flex-col items-center justify-center min-h-screen pt-24 px-8 sm:px-12 md:px-16 lg:px-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Section */}
      <motion.div
          className="mb-16"
          variants={itemVariants}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-white/60 text-lg">...</span>
            <span className="text-white/90 text-xl font-medium">/Contact</span>
            <span className="text-white/60 text-lg">...</span>
          </div>

          <div className="text-white/80 text-lg md:text-xl leading-relaxed">
            <span className="text-white">Let's work together</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2 space-y-6"
              variants={itemVariants}
          >
            <form 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/70">Thanks for reaching out. I'll get back to you soon!</p>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(255, 255, 255, 0.1)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full bg-transparent text-white placeholder-white/50 focus:outline-none"
                      style={{
                        WebkitBoxShadow: '0 0 0 1000px transparent inset',
                        WebkitTextFillColor: 'white',
                        backgroundColor: 'transparent !important'
                      }}
                    />
                  </motion.div>

                  <motion.div
                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(255, 255, 255, 0.1)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full bg-transparent text-white placeholder-white/50 focus:outline-none"
                    />
                  </motion.div>

                  <motion.div
                    className="md:col-span-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(255, 255, 255, 0.1)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                      className="w-full bg-transparent text-white placeholder-white/50 focus:outline-none"
                    />
                  </motion.div>

                  <motion.div
                    className="md:col-span-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(255, 255, 255, 0.1)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Your Message"
                      required
                      className="w-full bg-transparent text-white placeholder-white/50 focus:outline-none resize-none"
                    />
                  </motion.div>

                  <motion.div
                    className="md:col-span-2"
                    variants={itemVariants}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 rounded-2xl py-4 text-lg font-medium text-white shadow-xl transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </div>
              )}
            </form>

            {/* Bottom Note */}
            <motion.div
              className="text-white/60 text-sm italic mt-8"
              variants={itemVariants}
            >
              Ready to <span className="text-white/80 font-medium">collaborate</span>?
              <br />
              Let's <span className="text-white/80 font-medium">create</span> something <span className="text-white/80 font-medium">amazing</span> together
            </motion.div>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div 
            className="flex justify-center lg:justify-center items-start"
            variants={itemVariants}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl w-full max-w-sm"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(255, 255, 255, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-white font-semibold text-lg mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Email</p>
                    <a 
                      href="mailto:houyu_chen@fitnyc.edu"
                      className="text-white font-medium text-sm hover:text-white/80 transition-colors"
                    >
                      houyu_chen@fitnyc.edu
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Location</p>
                    <p className="text-white font-medium text-sm">New York, USA</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/70 text-sm mb-4">Connect with me</p>
                  <div className="flex gap-3 justify-center">
                    <a 
                      href="https://www.linkedin.com/in/ariel-chen-se/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                    <a 
                      href="https://github.com/HYC-code520" 
                  target="_blank"
                  rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}