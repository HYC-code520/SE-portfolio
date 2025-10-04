'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Send, CheckCircle, Github, Linkedin, ArrowRight } from 'lucide-react';
import { containerVariants, itemVariants } from '@/config/animations';
import { useDarkMode } from '@/contexts/DarkModeContext';

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isDarkMode } = useDarkMode();
  
  // Dynamic colors based on theme
  const textColor = isDarkMode ? 'text-white/60' : 'text-black/60';
  const textColorPrimary = isDarkMode ? 'text-white/90' : 'text-black/90';
  const textColorBold = isDarkMode ? 'text-white' : 'text-black';
  const textColorSecondary = isDarkMode ? 'text-white/80' : 'text-black/80';
  const textColorTertiary = isDarkMode ? 'text-white/70' : 'text-black/70';
  const iconColor = isDarkMode ? 'text-white' : 'text-black';
  const bgColor = isDarkMode ? 'bg-white/10' : 'bg-black/10';
  const bgColorLight = isDarkMode ? 'bg-white/5' : 'bg-black/5';
  const borderColor = isDarkMode ? 'border-white/20' : 'border-black/20';
  const borderColorFocus = isDarkMode ? 'focus:border-white/40' : 'focus:border-black/40';
  const placeholderColor = isDarkMode ? 'placeholder-white/50' : 'placeholder-black/50';
  const buttonBg = isDarkMode ? 'from-white/20 to-white/0' : 'from-black/20 to-black/0';
  const buttonBorder = isDarkMode ? 'border-white/30' : 'border-black/30';
  const buttonShadow = isDarkMode ? 'shadow-black/20' : 'shadow-white/20';
  const buttonBoxShadow = isDarkMode 
    ? '[box-shadow:0_0_2px_#fff_inset,_0_0_10px_#fff_inset] hover:[box-shadow:0_0_2px_#fff_inset,_0_0_15px_#fff_inset,_0_0_30px_#888]'
    : '[box-shadow:0_0_2px_#000_inset,_0_0_10px_#000_inset] hover:[box-shadow:0_0_2px_#000_inset,_0_0_15px_#000_inset,_0_0_30px_#888]';
  const webkitTextFillColor = isDarkMode ? 'white' : 'black';
  const webkitBgColor = isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
  const arrowColorHover = isDarkMode ? 'group-hover:text-white' : 'group-hover:text-black';
  const arrowColor = isDarkMode ? 'text-white/50' : 'text-black/50';
  const bgColorHover = isDarkMode ? 'group-hover:bg-white/20' : 'group-hover:bg-black/20';

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
      className="relative z-30 flex flex-col items-center justify-center min-h-screen pt-8 px-8 sm:px-12 md:px-16 lg:px-20"
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


          <div className={`${textColorSecondary} text-lg md:text-xl leading-relaxed`}>
            <span className={`${textColorBold} text-4xl md:text-5xl font-bold block mb-3`}>Let's create something amazing</span>
            <span className={textColorTertiary}>Ready to bring your ideas to life? I'm just a message away.</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left Side - Contact Info */}
          <motion.div
            className="space-y-8"
            variants={itemVariants}
          >
            {/* Quick Contact */}
            <div className={`${bgColor} backdrop-blur-lg border ${borderColor} rounded-2xl p-4 shadow-xl`}>
              <h3 className={`${textColorBold} font-semibold text-2xl mb-4`}>Get In Touch</h3>
              
              <div className="space-y-6">
                <motion.a
                  href="mailto:houyu_chen@fitnyc.edu"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center ${bgColorHover} transition-colors`}>
                    <Mail className={`w-6 h-6 ${iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <p className={`${textColorTertiary} text-sm`}>Email me</p>
                    <p className={`${textColorBold} font-medium`}>houyu_chen@fitnyc.edu</p>
                  </div>
                  <ArrowRight className={`w-5 h-5 ${arrowColor} ${arrowColorHover} transition-colors`} />
                </motion.a>
                
                <div className={`flex items-center gap-4 p-4 ${bgColorLight} rounded-xl`}>
                  <div className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center`}>
                    <MapPin className={`w-6 h-6 ${iconColor}`} />
                  </div>
                  <div>
                    <p className={`${textColorTertiary} text-sm`}>Based in</p>
                    <p className={`${textColorBold} font-medium`}>New York, USA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={`${bgColor} backdrop-blur-lg border ${borderColor} rounded-2xl p-4 shadow-xl`}>
              <h3 className={`${textColorBold} font-semibold text-xl mb-4`}>Connect</h3>
              <div className="flex gap-4">
                <motion.a 
                  href="https://www.linkedin.com/in/ariel-chen-se/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 p-4 bg-white/5 hover:bg-white/10 rounded-xl flex items-center gap-3 transition-colors group"
                  whileHover={{ y: -2 }}
                >
                  <Linkedin className={`w-5 h-5 ${iconColor}`} />
                  <span className={`${textColorBold} font-medium`}>LinkedIn</span>
                </motion.a>
                <motion.a 
                  href="https://github.com/HYC-code520" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 bg-white/5 hover:bg-white/10 rounded-xl flex items-center gap-3 transition-colors group"
                  whileHover={{ y: -2 }}
                >
                  <Github className={`w-5 h-5 ${iconColor}`} />
                  <span className={`${textColorBold} font-medium`}>GitHub</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-xl"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className={`text-2xl font-semibold ${textColorBold} mb-2`}>Message Sent!</h3>
                  <p className={textColorTertiary}>Thanks for reaching out. I'll get back to you soon!</p>
                </motion.div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className={`block ${textColorSecondary} text-sm font-medium mb-2`}>Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        className={`w-full ${bgColorLight} border ${borderColor} rounded-xl px-4 py-3 ${textColorBold} ${placeholderColor} focus:outline-none ${borderColorFocus} transition-colors`}
                        style={{
                          WebkitBoxShadow: '0 0 0 1000px transparent inset',
                          WebkitTextFillColor: webkitTextFillColor,
                          backgroundColor: `${webkitBgColor} !important`
                        }}
                      />
                    </div>
                    <div>
                      <label className={`block ${textColorSecondary} text-sm font-medium mb-2`}>Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        required
                        className={`w-full ${bgColorLight} border ${borderColor} rounded-xl px-4 py-3 ${textColorBold} ${placeholderColor} focus:outline-none ${borderColorFocus} transition-colors`}
                        style={{
                          WebkitBoxShadow: '0 0 0 1000px transparent inset',
                          WebkitTextFillColor: webkitTextFillColor,
                          backgroundColor: `${webkitBgColor} !important`
                        }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className={`block ${textColorSecondary} text-sm font-medium mb-2`}>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="What's this about?"
                      required
                      className={`w-full ${bgColorLight} border ${borderColor} rounded-xl px-4 py-3 ${textColorBold} ${placeholderColor} focus:outline-none ${borderColorFocus} transition-colors`}
                      style={{
                        WebkitBoxShadow: '0 0 0 1000px transparent inset',
                        WebkitTextFillColor: webkitTextFillColor,
                        backgroundColor: `${webkitBgColor} !important`
                      }}
                    />
                  </div>
                  
                  <div>
                    <label className={`block ${textColorSecondary} text-sm font-medium mb-2`}>Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell me about your project or idea..."
                      required
                      className={`w-full ${bgColorLight} border ${borderColor} rounded-xl px-4 py-3 ${textColorBold} ${placeholderColor} focus:outline-none ${borderColorFocus} transition-colors resize-none`}
                      style={{
                        WebkitBoxShadow: '0 0 0 1000px transparent inset',
                        WebkitTextFillColor: webkitTextFillColor,
                        backgroundColor: `${webkitBgColor} !important`
                      }}
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-b ${buttonBg} ${textColorBold} backdrop-blur-lg border ${buttonBorder} shadow-xl ${buttonShadow} rounded-xl text-lg font-semibold tracking-wide transition-all duration-300 px-8 py-4 ${buttonBoxShadow} disabled:opacity-50`}
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