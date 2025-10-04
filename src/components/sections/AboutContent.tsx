'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import { containerVariants, itemVariants } from '@/config/animations';
import { useDarkMode } from '@/contexts/DarkModeContext';

// Skills moved to SkillsContent.tsx

export function AboutContent() {
    const { isDarkMode } = useDarkMode();
    
    // Dynamic colors based on theme
    const textColor = isDarkMode ? 'text-white/60' : 'text-black/60';
    const textColorPrimary = isDarkMode ? 'text-white/90' : 'text-black/90';
    const textColorBold = isDarkMode ? 'text-white' : 'text-black';
    const textColorSecondary = isDarkMode ? 'text-white/80' : 'text-black/80';
    const textColorTertiary = isDarkMode ? 'text-white/70' : 'text-black/70';
    const textColorQuaternary = isDarkMode ? 'text-white/40' : 'text-black/40';
    const bgColor = isDarkMode ? 'bg-white/10' : 'bg-black/10';
    const starColor = isDarkMode ? 'text-white/60' : 'text-black/60';
    return (
        <motion.div
            className="relative z-30 flex flex-col items-center justify-center min-h-screen pt-8 px-8 sm:px-12 md:px-16 lg:px-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <motion.div
                    className="mb-16"
                    variants={itemVariants}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <span className={`${textColor} text-lg`}>...</span>
                        <span className={`${textColorPrimary} text-xl font-medium`}>/About me</span>
                        <span className={`${textColor} text-lg`}>...</span>
                    </div>
                </motion.div>

                {/* Main Content with Photo */}
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <motion.div
                        className="flex-1 w-full"
                        variants={itemVariants}
                    >
                        <div className={`${textColorSecondary} leading-relaxed space-y-6`}>
                            <p className={`${textColorBold} text-4xl md:text-5xl font-bold leading-relaxed`}>I'm Ariel — a developer, maker, and cat enthusiast.</p>
                            <p className={`${textColorTertiary} text-sm leading-relaxed`}>I used to work in fashion design, and now I use code as my new creative tool. I love building apps that are thoughtful, playful, and easy to use.</p>
                            <p className={`${textColorTertiary} text-sm leading-relaxed`}>When I'm not coding, you can find me doing DIY projects, experimenting with new ideas, or filming my cats' latest adventures. I'm always curious, always creating, and always looking for new ways to mix creativity with tech.</p>
                            
                            <div className="pt-4 space-y-4">
                                <p className={`${textColorBold} text-sm leading-relaxed`}>I believe in creating digital experiences that are both beautiful and functional.</p>
                                <p className={`${textColorTertiary} text-sm leading-relaxed`}>My background in fashion design gives me a unique perspective on user interfaces and experiences.</p>
                                <p className={`${textColorTertiary} text-sm leading-relaxed`}>I'm constantly learning and exploring new technologies to expand my skillset and create better solutions.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Profile Image Section */}
                    <motion.div
                        className="flex justify-center w-full md:w-auto flex-shrink-0"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-3 shadow-xl max-w-xs"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 40px rgba(255, 255, 255, 0.15)"
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="aspect-[3/4] bg-gradient-to-br from-white/20 to-white/5 rounded-xl overflow-hidden">
                                {/* Profile image - your actual image */}
                                <img
                                    src="/Porfolio-profile.JPG"
                                    alt="Ariel Chen - Portfolio Profile"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        // Fallback if image doesn't exist
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        target.nextElementSibling?.classList.remove('hidden');
                                    }}
                                />
                                {/* Fallback content */}
                                <div className={`hidden w-full h-full flex items-center justify-center ${textColorQuaternary} text-center`}>
                                    <div className={`w-24 h-24 ${bgColor} rounded-full mx-auto flex items-center justify-center`}>
                                        <Star className={`w-12 h-12 ${starColor} fill-current`} />
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