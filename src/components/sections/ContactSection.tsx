'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Send, CheckCircle, Github, Linkedin, ArrowRight } from 'lucide-react';
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
          className="mb-8 text-left"
          variants={itemVariants}
        >
          <div className="flex items-start gap-4 mb-6">
            <span className="text-white/60 text-lg">...</span>
            <span className="text-white/90 text-xl font-medium">/Contact</span>
            <span className="text-white/60 text-lg">...</span>
          </div>

          <div className="text-white/80 text-lg md:text-xl leading-relaxed">
            <span className="text-white text-4xl md:text-5xl font-bold block mb-3">Let's create something amazing</span>
            <span className="text-white/70">Ready to bring your ideas to life? I'm just a message away.</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <motion.div
            className="space-y-8"
            variants={itemVariants}
          >
            {/* Quick Contact */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl">
              <h3 className="text-white font-semibold text-2xl mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <motion.a
                  href="mailto:houyu_chen@fitnyc.edu"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white/70 text-sm">Email me</p>
                    <p className="text-white font-medium">houyu_chen@fitnyc.edu</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                </motion.a>
                
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Based in</p>
                    <p className="text-white font-medium">New York, USA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl">
              <h3 className="text-white font-semibold text-xl mb-6">Connect</h3>
              <div className="flex gap-4">
                <motion.a 
                  href="https://www.linkedin.com/in/ariel-chen-se/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 p-4 bg-white/5 hover:bg-white/10 rounded-xl flex items-center gap-3 transition-colors group"
                  whileHover={{ y: -2 }}
                >
                  <Linkedin className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">LinkedIn</span>
                </motion.a>
                <motion.a 
                  href="https://github.com/HYC-code520" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 bg-white/5 hover:bg-white/10 rounded-xl flex items-center gap-3 transition-colors group"
                  whileHover={{ y: -2 }}
                >
                  <Github className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">GitHub</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/70">Thanks for reaching out. I'll get back to you soon!</p>
                </motion.div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                        style={{
                          WebkitBoxShadow: '0 0 0 1000px transparent inset',
                          WebkitTextFillColor: 'white',
                          backgroundColor: 'rgba(255, 255, 255, 0.05) !important'
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        required
                        className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                        style={{
                          WebkitBoxShadow: '0 0 0 1000px transparent inset',
                          WebkitTextFillColor: 'white',
                          backgroundColor: 'rgba(255, 255, 255, 0.05) !important'
                        }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="What's this about?"
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                      style={{
                        WebkitBoxShadow: '0 0 0 1000px transparent inset',
                        WebkitTextFillColor: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.05) !important'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project or idea..."
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors resize-none"
                      style={{
                        WebkitBoxShadow: '0 0 0 1000px transparent inset',
                        WebkitTextFillColor: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.05) !important'
                      }}
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-b from-white/20 to-white/0 text-white backdrop-blur-lg border border-white/30 shadow-xl shadow-black/20 rounded-xl text-lg font-semibold tracking-wide transition-all duration-300 px-8 py-4 [box-shadow:0_0_2px_#fff_inset,_0_0_10px_#fff_inset] hover:[box-shadow:0_0_2px_#fff_inset,_0_0_15px_#fff_inset,_0_0_30px_#888] disabled:opacity-50"
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
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}