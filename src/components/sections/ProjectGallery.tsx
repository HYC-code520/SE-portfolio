'use client';

import React, { useState, useRef, useEffect } from 'react';
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
  year: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Psykhe Big 5 Personality Test',
    description: 'Professional personality assessment platform built for Psykhe, featuring comprehensive Big 5 personality testing with advanced analytics and user insights',
    image: '/project-psykhe.jpg',
    technologies: ['React', 'TypeScript', 'Next.js'],
    category: 'Professional',
    year: '2024',
    liveUrl: 'https://psykhe.com/big-5-personality-test',
    githubUrl: '#'
  },
  {
    id: '2',
    title: 'Finance Tech',
    description: 'Financial technology application for modern banking solutions',
    image: '/project-1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'FinTech',
    year: '2025',
    liveUrl: '#',
    githubUrl: 'https://github.com/HYC-code520/Finance-Tech'
  },
  {
    id: '3',
    title: 'Climate Tech',
    description: 'Environmental technology platform for climate monitoring and solutions',
    image: '/project-2.jpg',
    technologies: ['React', 'Python', 'APIs'],
    category: 'Climate Tech',
    year: '2025',
    liveUrl: '#',
    githubUrl: 'https://github.com/HYC-code520/ClimateTech'
  },
  {
    id: '4',
    title: 'Fix StitchFix',
    description: 'Fashion recommendation system with personalized styling solutions',
    image: '/project-3.jpg',
    technologies: ['JavaScript', 'CSS', 'HTML'],
    category: 'E-Commerce',
    year: '2025',
    liveUrl: '#',
    githubUrl: 'https://github.com/HYC-code520/Fix-StitchFix'
  },
  {
    id: '5',
    title: 'Inner Child Mobile App',
    description: 'Mobile application for childhood memory preservation and sharing',
    image: '/project-4.jpg',
    technologies: ['React Native', 'Firebase', 'Redux'],
    category: 'Mobile App',
    year: '2025',
    liveUrl: '#',
    githubUrl: 'https://github.com/HYC-code520/Inner-Child-Mobile-App'
  },
  {
    id: '6',
    title: 'Your Next Gift',
    description: 'Gift recommendation platform with personalized suggestions',
    image: '/project-5.jpg',
    technologies: ['React', 'Express', 'PostgreSQL'],
    category: 'E-Commerce',
    year: '2025',
    liveUrl: '#',
    githubUrl: 'https://github.com/HYC-code520/your-next-gift'
  },
  {
    id: '7',
    title: 'Feel Good App',
    description: 'Mental wellness application for mood tracking and self-care',
    image: '/project-6.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'Health & Wellness',
    year: '2025',
    liveUrl: '#',
    githubUrl: 'https://github.com/HYC-code520/p3-feel-good-app'
  },
  {
    id: '8',
    title: 'LoveLog App',
    description: 'Relationship tracking app for couples to log memories and milestones with location mapping',
    image: '/project-7.jpg',
    technologies: ['React Native', 'Flask', 'Python'],
    category: 'Lifestyle',
    year: '2025',
    liveUrl: '#',
    githubUrl: 'https://github.com/HYC-code520/LoveLog-App'
  },
  {
    id: '9',
    title: 'PawHub',
    description: 'Pet care management platform for pet owners and veterinarians',
    image: '/project-8.jpg',
    technologies: ['React', 'Express', 'PostgreSQL'],
    category: 'Pet Care',
    year: '2025',
    liveUrl: '#',
    githubUrl: 'https://github.com/HYC-code520/PawHub'
  }
];

export function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<string>('1');
  const rightContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef<boolean>(false);
  const hasInitialized = useRef<boolean>(false);

  // Initialize after component mounts to prevent viewport detection from overriding default selection
  useEffect(() => {
    const timer = setTimeout(() => {
      hasInitialized.current = true;
    }, 1000); // Wait 1 second before enabling viewport detection
    
    return () => clearTimeout(timer);
  }, []);

  // Function to scroll to a specific project on the right side
  const scrollToProject = (projectId: string) => {
    const element = document.getElementById(`project-${projectId}`);
    const rightContainer = rightContainerRef.current;
    
    if (element && rightContainer) {
      isScrollingRef.current = true; // Disable viewport detection
      setSelectedProject(projectId);
      
      const containerRect = rightContainer.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      const scrollTop = rightContainer.scrollTop + elementRect.top - containerRect.top;
      
      rightContainer.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
      
      // Re-enable viewport detection after scroll completes
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  return (
    <>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
      <div className="relative z-30 flex flex-col items-center justify-center min-h-screen pt-24 px-8 sm:px-12 md:px-16 lg:px-20">
      <div className="max-w-6xl mx-auto flex overflow-hidden">
        {/* Left Sidebar - Fixed Project List - Hidden on mobile */}
        <div className="hidden md:flex md:w-2/5 pr-6 flex-col">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xs font-bold text-white">
            My Projects
          </h1>
        </div>

        {/* Fixed Project List - No Scrolling */}
        <div className="flex-1 space-y-1">
          {projects.map((project, index) => {
            const isSelected = selectedProject === project.id;
            return (
              <motion.div
                key={project.id}
                className={`p-2 md:p-3 lg:p-4 cursor-pointer transition-all duration-300 ${
                  isSelected 
                    ? 'bg-white/20 border-l-4 border-white' 
                    : 'bg-white/5 hover:bg-white/10'
                }`}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: index * 0.03,
                  duration: 0.25,
                  ease: "easeOut"
                }}
                onClick={() => scrollToProject(project.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 flex items-center min-w-0">
                    {/* Project Title - Truncated on overflow */}
                    <div className="flex-1 text-white font-semibold text-sm px-2 truncate">
                      {project.title}
                    </div>
                    {/* Technologies - Hidden on medium screens, shown on large */}
                    <div className="hidden xl:block w-32 lg:w-48 text-white/70 text-xs text-right flex-shrink-0">
                      {project.technologies.slice(0, 2).join(' & ')}
                    </div>
                    {/* Single tech on medium screens */}
                    <div className="hidden lg:block xl:hidden w-20 text-white/70 text-xs text-right flex-shrink-0">
                      {project.technologies[0]}
                    </div>
                  </div>
                  {isSelected && (
                    <ChevronRight className="w-4 h-4 text-white ml-2 flex-shrink-0" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

        {/* Right Side - Scrollable Project Gallery - Full width on mobile */}
        <div className="relative w-full md:w-3/5 max-h-[70vh]">

          
          <div 
            ref={rightContainerRef} 
            className="h-full overflow-y-auto pl-6 pr-4 custom-scrollbar"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)'
            }}
          >
            <div className="space-y-8 pb-16 pt-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              id={`project-${project.id}`}
              className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ${
                selectedProject === project.id ? 'ring-2 ring-white/30' : ''
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.02,
                duration: 0.3,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.1)"
              }}
              onViewportEnter={() => {
                if (!isScrollingRef.current && hasInitialized.current) {
                  setSelectedProject(project.id);
                }
              }}
              onHoverStart={() => setSelectedProject(project.id)}
            >
              {/* Project Image */}
              <div className="aspect-[16/8] bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
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
      </div>
    </div>
    </>
  );
}