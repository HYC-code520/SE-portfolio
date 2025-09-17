'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  youtubeId?: string;
  loomUrl?: string; // Add this for Loom videos
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
    video: '/videos/Psykhe-AI-test.mp4',
    youtubeId: 'MX2XpuNJvDA', // Psykhe Big 5 Personality Test demo video
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
    youtubeId: 'dskgLA9qq6g', // Inner Child Sanctuary App Demo
    technologies: ['React Native', 'Firebase', 'Redux'],
    category: 'Mobile App',
    year: '2025',
    liveUrl: '',
    githubUrl: 'https://github.com/HYC-code520/Inner-Child-Mobile-App'
  },
  {
    id: '6',
    title: 'Your Next Gift',
    description: 'Gift recommendation platform with personalized suggestions',
    image: '/project-5.jpg',
    youtubeId: 'wKgx_Ml4CR0', // Your Next Gift Web Demo
    technologies: ['React', 'Express', 'PostgreSQL'],
    category: 'E-Commerce',
    year: '2025',
    liveUrl: 'https://your-next-gift-beta.vercel.app/',
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
    liveUrl: '',
    githubUrl: 'https://github.com/HYC-code520/p3-feel-good-app'
  },
  {
    id: '8',
    title: 'LoveLog App',
    description: 'Relationship tracking app for couples to log memories and milestones with location mapping',
    image: '/project-7.jpg',
    youtubeId: 'k2mnnkAwDrg', // LoveLog App Demo
    technologies: ['React Native', 'Flask', 'Python'],
    category: 'Lifestyle',
    year: '2025',
    liveUrl: '',
    githubUrl: 'https://github.com/HYC-code520/LoveLog-App'
  },
  {
    id: '9',
    title: 'PawHub',
    description: 'Pet care management platform for pet owners and veterinarians',
    image: '/project-8.jpg',
    loomUrl: 'https://www.loom.com/share/493ee2ee1e6f46e49aefd86f74839990?sid=647cd8ef-1fe0-48a5-ac74-3d1747ea70c2',
    technologies: ['React', 'Express', 'PostgreSQL'],
    category: 'Pet Care',
    year: '2025',
    githubUrl: 'https://github.com/HYC-code520/PawHub'
  }
];

export function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<string>('1');
  const [isClient, setIsClient] = useState(false);
  const rightContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef<boolean>(false);
  const hasInitialized = useRef<boolean>(false);
  const videoRefs = useRef<{[key: string]: HTMLVideoElement | null}>({});
  const youtubeRefs = useRef<{[key: string]: HTMLIFrameElement | null}>({});
  const userPausedVideos = useRef<{[key: string]: boolean}>({});
  const youtubeApiLoaded = useRef<boolean>(false);

  // Load YouTube API
  const loadYouTubeAPI = () => {
    if (youtubeApiLoaded.current) return;
    
    // Create script element
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    
    // Set up global callback
    (window as any).onYouTubeIframeAPIReady = () => {
      youtubeApiLoaded.current = true;
      setupYouTubeVideos();
    };
  };
  
  // Set up YouTube videos with API
  const setupYouTubeVideos = () => {
    projects.forEach(project => {
      if (project.youtubeId) {
        const iframe = youtubeRefs.current[project.id];
        if (iframe) {
          // Create YouTube player
          const player = new (window as any).YT.Player(iframe, {
            events: {
              'onStateChange': (event: any) => {
                // YT.PlayerState.PAUSED = 2
                if (event.data === 2) {
                  userPausedVideos.current[project.id] = true;
                  console.log(`User paused YouTube video ${project.id}`);
                }
                // YT.PlayerState.PLAYING = 1
                else if (event.data === 1) {
                  userPausedVideos.current[project.id] = false;
                  console.log(`User played YouTube video ${project.id}`);
                }
              }
            }
          });
        }
      }
    });
  };
  
  // Ensure client-side rendering for video
  useEffect(() => {
    setIsClient(true);
    
    // Initialize all videos as not user-paused
    projects.forEach(project => {
      if (project.video || project.youtubeId || project.loomUrl) {
        userPausedVideos.current[project.id] = false;
      }
    });
    
    // Load YouTube API if needed
    if (isClient && projects.some(project => project.youtubeId || project.loomUrl)) {
      loadYouTubeAPI();
    }
  }, [isClient]);

  // Set up intersection observer for videos and YouTube iframes
  useEffect(() => {
    if (!isClient) return;
    
    const options = {
      root: rightContainerRef.current,
      rootMargin: '0px',
      threshold: 0.3 // Media must be 30% visible to be considered in view
    };

    // Create a map to store YouTube player instances
    const ytPlayers: {[key: string]: any} = {};
    
    // Function to get YouTube player for a project
    const getYouTubePlayer = (projectId: string) => {
      // If we already have a player instance, return it
      if (ytPlayers[projectId]) return ytPlayers[projectId];
      
      // If YouTube API is loaded and we have an iframe reference
      if (youtubeApiLoaded.current && youtubeRefs.current[projectId]) {
        try {
          // Create a new player instance
          const player = new (window as any).YT.Player(`youtube-${projectId}`, {
            events: {
              'onStateChange': (event: any) => {
                // YT.PlayerState.PAUSED = 2
                if (event.data === 2) {
                  userPausedVideos.current[projectId] = true;
                  console.log(`User paused YouTube video ${projectId}`);
                }
                // YT.PlayerState.PLAYING = 1
                else if (event.data === 1) {
                  userPausedVideos.current[projectId] = false;
                  console.log(`User played YouTube video ${projectId}`);
                }
              }
            }
          });
          
          ytPlayers[projectId] = player;
          return player;
        } catch (error) {
          console.error('Error creating YouTube player:', error);
          return null;
        }
      }
      
      return null;
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const projectId = entry.target.id.replace('project-', '');
        const videoElement = videoRefs.current[projectId];
        
        // Handle HTML5 videos
        if (videoElement) {
          if (entry.isIntersecting) {
            // Only play video when in view if user hasn't manually paused it
            if (!userPausedVideos.current[projectId]) {
              videoElement.play().catch(e => console.log('Video play prevented:', e));
            } else {
              console.log(`Keeping video ${projectId} paused as user paused it`);
            }
          } else if (!entry.isIntersecting && !videoElement.paused) {
            // Always pause video when out of view
            videoElement.pause();
          }
        }
        
        // Handle YouTube iframes
        if (youtubeRefs.current[projectId]) {
          // Try to get or create a YouTube player
          const player = getYouTubePlayer(projectId);
          
          if (player && player.getPlayerState) {
            if (entry.isIntersecting) {
              // Only play if user hasn't manually paused
              if (!userPausedVideos.current[projectId]) {
                try {
                  // YT.PlayerState.PAUSED = 2
                  if (player.getPlayerState() === 2) {
                    player.playVideo();
                    console.log(`Playing YouTube video ${projectId}`);
                  }
                } catch (e) {
                  console.error('Error playing YouTube video:', e);
                }
              } else {
                console.log(`Keeping YouTube video ${projectId} paused as user paused it`);
              }
            } else {
              // Always pause when out of view
              try {
                // YT.PlayerState.PLAYING = 1
                if (player.getPlayerState() === 1) {
                  player.pauseVideo();
                  console.log(`Pausing YouTube video ${projectId} (out of view)`);
                }
              } catch (e) {
                console.error('Error pausing YouTube video:', e);
              }
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    
    // Observe all project elements
    projects.forEach(project => {
      const element = document.getElementById(`project-${project.id}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [isClient]);

  // Initialize after component mounts to prevent viewport detection from overriding default selection
  useEffect(() => {
    const timer = setTimeout(() => {
      hasInitialized.current = true;
    }, 1000); // Wait 1 second before enabling viewport detection
    
    return () => clearTimeout(timer);
  }, []);

  // Function to scroll to a specific project with snap scrolling
  const scrollToProject = (projectId: string) => {
    const element = document.getElementById(`project-${projectId}`);
    const rightContainer = rightContainerRef.current;
    
    if (element && rightContainer) {
      isScrollingRef.current = true; // Disable viewport detection
      setSelectedProject(projectId);
      
      // With snap scrolling, we can directly scroll to the element
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Re-enable viewport detection after scroll completes
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 500);
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
          <div className="flex items-center gap-4 mb-2">
            <span className="text-white/60 text-lg">...</span>
            <span className="text-white/90 text-xl font-medium">/My Projects</span>
            <span className="text-white/60 text-lg">...</span>
          </div>
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
            className="h-full overflow-y-auto pl-6 pr-4 custom-scrollbar project-snap-container"
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
              {/* Project Image/Video */}
              <div className="aspect-[16/10] bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center overflow-hidden">
                {isClient && project.youtubeId ? (
                  <div className="w-full h-full relative">
                    <iframe
                      className="w-full h-full object-contain"
                      src={`https://www.youtube.com/embed/${project.youtubeId}?enablejsapi=1&autoplay=0&origin=${encodeURIComponent(window.location.origin)}`}
                      title={project.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      ref={(el) => {
                        youtubeRefs.current[project.id] = el;
                      }}
                      id={`youtube-${project.id}`}
                    ></iframe>
                  </div>
                ) : isClient && project.loomUrl ? (
                  <div className="w-full h-full relative">
                    <iframe
                      className="w-full h-full object-contain"
                      src={`https://www.loom.com/embed/${project.loomUrl.split('/').pop()?.split('?')[0]}?sid=${project.loomUrl.split('sid=')[1]}`}
                      title={project.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : isClient && project.video ? (
                  <div className="w-full h-full relative">
                    <video 
                      className="w-full h-full object-contain"
                      controls
                      muted
                      preload="metadata"
                      playsInline
                      ref={(el) => {
                        videoRefs.current[project.id] = el;
                      }}
                      onPlay={() => {
                        userPausedVideos.current[project.id] = false;
                      }}
                      onPause={() => {
                        userPausedVideos.current[project.id] = true;
                      }}
                    >
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div className="text-white/40 text-center">
                    <div className="w-24 h-24 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <ExternalLink className="w-12 h-12 text-white/60" />
                    </div>
                    <p className="text-lg font-medium">{project.title}</p>
                    <p className="text-sm mt-2 text-white/60">
                      {(project.video || project.youtubeId || project.loomUrl) && !isClient ? 'Loading media...' : 'Project Screenshot'}
                    </p>
                  </div>
                )}
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