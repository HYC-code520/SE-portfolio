'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import { containerVariants, itemVariants } from '@/config/animations';

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            "JavaScript", "TypeScript", "React", "React Native", "HTML", "CSS", 
            "Vite", "Axios", "Expo", "Cross-Platform Mobile Development"
        ]
    },
    {
        title: "Backend",
        skills: [
            "Python", "Flask", "SQL", "SQLite", "PostgreSQL", "MySQL", "JWT", "RESTful APIs"
        ]
    },
    {
        title: "Tools & DevOps",
        skills: [
            "Git", "GitHub", "Postman", "Cloudinary", "GitHub Actions", "CI/CD", "Jest", "Pytest"
        ]
    },
    {
        title: "Other Skills",
        skills: [
            "API Integration", "Responsive Design", "Agile Workflows", "Unit Testing", "Relational Databases"
        ]
    }
];

export function SkillsContent() {
    return (
        <motion.div
            className="relative z-30 flex flex-col items-center justify-center min-h-screen pt-24 px-8 sm:px-12 md:px-16 lg:px-20"
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
                        <span className="text-white/60 text-lg">...</span>
                        <span className="text-white/90 text-xl font-medium">/Skills</span>
                        <span className="text-white/60 text-lg">...</span>
                    </div>

                    <div className="text-white/80 text-lg md:text-xl leading-relaxed">
                        <span className="text-white">My technical toolkit</span>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 items-start">
                    {/* Skills Section */}
                    <motion.div
                        className="space-y-6"
                        variants={itemVariants}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {skillCategories.map((category, index) => (
                                <motion.div
                                    key={category.title}
                                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl"
                                    variants={itemVariants}
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 0 30px rgba(255, 255, 255, 0.1)"
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-white font-semibold text-lg mb-4">
                                        {category.title}
                                    </h3>
                                    <div className="text-white/70 text-sm leading-relaxed">
                                        {category.skills.join(" / ")}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom Note */}
                        <motion.div
                            className="text-white/60 text-sm italic mt-8"
                            variants={itemVariants}
                        >
                            Some of my <span className="text-white/80 font-medium">favorite technologies</span>,
                            <br />
                            <span className="text-white/80 font-medium">topics</span>, or <span className="text-white/80 font-medium">tools</span> that I worked with
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}