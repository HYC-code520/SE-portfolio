'use client';

import { useRef } from 'react';

interface ProjectStackProps {
  projects: {
    id: string;
    title: string;
    description: string;
    image?: string;
    video?: string;
    color: string;
    technologies: string[];
  }[];
}

export default function ProjectStack({ projects }: ProjectStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Limit to 9 projects to prevent floating effect
  const stackProjects = projects.slice(0, 9);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto h-[980px] translate-y-96"
      style={{ perspective: '1000px' }}
    >
      {stackProjects.map((project, index) => {
        // Create massive gap by moving 1st & 2nd projects even lower
        let yOffset;
        
        if (index === 0) {
          yOffset = 250; // Move 1st project even further down
        } else if (index === 1) {
          yOffset = 190; // Move 2nd project even further down
        } else {
          // Keep 3rd project and beyond at their high position
          yOffset = -350 - (index - 2) * 60;
        }
        
        const scale = 1 - index * 0.08; 
        const xOffset = 0;
        
        // Alternate tab sides like file folders
        const tabSide = index % 2 === 0 ? 'right' : 'left';
        const tabOffset = tabSide === 'right' ? '20px' : '-20px';
        
        return (
          <div
            key={project.id}
            className="absolute w-full rounded-2xl overflow-visible cursor-pointer"
            style={{
              backgroundColor: project.color,
              zIndex: stackProjects.length - index,
              transform: `translate(${xOffset}px, ${yOffset}px) scale(${scale}) rotateX(-25deg)`,
              transformStyle: 'preserve-3d',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
            }}
          >
            {/* File Tab */}
            <div 
              className="absolute top-4 w-32 h-12 rounded-t-lg flex items-center justify-center z-10"
              style={{
                backgroundColor: project.color,
                [tabSide]: tabOffset,
                filter: 'brightness(1.1)',
                boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
              <span className="text-white font-bold text-sm truncate px-2">
                {project.title.substring(0, 12)}
              </span>
            </div>

            <div className="relative h-[816px] p-12 flex flex-col justify-between">
              {/* Project content area */}
              <div className="flex-1 flex items-center justify-center">
                {project.image || project.video ? (
                  <div className="w-full h-full bg-black/10 rounded-lg flex items-center justify-center">
                    {project.image && (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    )}
                    {project.video && (
                      <video 
                        src={project.video}
                        className="w-full h-full object-cover rounded-lg"
                        muted
                        loop
                        autoPlay
                      />
                    )}
                  </div>
                ) : (
                  <div className="w-full h-full bg-white/10 rounded-lg flex items-center justify-center border-2 border-dashed border-white/30">
                    <div className="text-center text-white/70">
                      <div className="text-7xl mb-4">📷</div>
                      <p className="text-xl">Project Screenshot/Video</p>
                      <p className="text-lg mt-2">Coming Soon</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Project info */}
              <div className="mt-8">
                <h3 className="text-white font-bold text-3xl mb-3">{project.title}</h3>
                <p className="text-white/80 text-xl mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 bg-white/20 text-white text-base rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}