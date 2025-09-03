'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack web application with payment integration and modern UI',
    image: '/project-1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Web Development',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '2',
    title: 'Mobile Task Manager',
    description: 'Cross-platform mobile app for productivity and task management',
    image: '/project-2.jpg',
    technologies: ['React Native', 'Firebase', 'Redux'],
    category: 'Mobile App',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '3',
    title: 'AI Chat Bot',
    description: 'Intelligent chatbot with natural language processing capabilities',
    image: '/project-3.jpg',
    technologies: ['Python', 'TensorFlow', 'FastAPI'],
    category: 'AI/ML',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '4',
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for business analytics and data insights',
    image: '/project-4.jpg',
    technologies: ['D3.js', 'Vue.js', 'PostgreSQL'],
    category: 'Data Science',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '5',
    title: 'Blockchain Wallet',
    description: 'Secure cryptocurrency wallet application with multi-chain support',
    image: '/project-5.jpg',
    technologies: ['Solidity', 'Web3.js', 'React'],
    category: 'Blockchain',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '6',
    title: 'Social Media App',
    description: 'Real-time social networking platform with live messaging',
    image: '/project-6.jpg',
    technologies: ['Next.js', 'Socket.io', 'Redis'],
    category: 'Social Platform',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '7',
    title: 'Weather Forecast App',
    description: 'Real-time weather tracking with location services and alerts',
    image: '/project-7.jpg',
    technologies: ['React', 'OpenWeather API', 'Geolocation'],
    category: 'Utility App',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '8',
    title: 'Recipe Management System',
    description: 'Digital cookbook with meal planning and shopping list features',
    image: '/project-8.jpg',
    technologies: ['Vue.js', 'Express.js', 'MySQL'],
    category: 'Lifestyle',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '9',
    title: 'Fitness Tracker',
    description: 'Personal fitness and workout tracking application with analytics',
    image: '/project-9.jpg',
    technologies: ['Flutter', 'Dart', 'Health APIs'],
    category: 'Health & Fitness',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '10',
    title: 'Music Streaming Platform',
    description: 'Audio streaming service with playlist management and discovery',
    image: '/project-10.jpg',
    technologies: ['Angular', 'Node.js', 'Audio APIs'],
    category: 'Entertainment',
    liveUrl: '#',
    githubUrl: '#'
  }
];

export function ProjectGallery() {
  return (
    <div className="relative z-30 h-screen flex overflow-hidden">
      {/* Left Sidebar - Fixed Project List - Hidden on mobile */}
      <div className="hidden md:flex md:w-1/2 p-8 md:p-12 flex-col h-screen">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h1>
          <p className="text-white/70 text-lg">
            A collection of my recent work and experiments
          </p>
        </div>

        {/* Fixed Project List - No Scrolling */}
        <div className="flex-1 space-y-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="p-3 rounded-xl transition-all duration-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-base mb-1">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-xs">
                    {project.category}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-white/60" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Side - Scrollable Project Gallery - Full width on mobile */}
      <div className="w-full md:w-1/2 h-screen overflow-y-auto">
        <div className="p-8 md:p-12 space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.1)"
              }}
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                <div className="text-white/40 text-center">
                  <div className="w-24 h-24 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <ExternalLink className="w-12 h-12 text-white/60" />
                  </div>
                  <p className="text-lg font-medium">{project.title}</p>
                  <p className="text-sm mt-2 text-white/60">
                    Project Screenshot
                  </p>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h2>
                    <p className="text-white/70 text-sm mb-3">
                      {project.category}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        className="p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        className="p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4 text-white" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <p className="text-white/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="bg-white/10 text-white/90 px-3 py-1 rounded-full text-sm border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}