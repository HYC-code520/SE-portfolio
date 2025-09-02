'use client';

import ProjectStack from '@/components/ProjectStack';
import { BackgroundScene } from '@/components/layout/BackgroundScene';
import { Navigation } from '@/components/layout/Navigation';

// Sample project data - you can replace this with your actual projects
const sampleProjects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack web application with payment integration',
    color: '#DC2626', // Red
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    id: '2',
    title: 'Mobile Task Manager',
    description: 'Cross-platform mobile app for productivity',
    color: '#3B82F6', // Blue
    technologies: ['React Native', 'Firebase', 'Redux'],
  },
  {
    id: '3',
    title: 'AI Chat Bot',
    description: 'Intelligent chatbot with natural language processing',
    color: '#059669', // Green
    technologies: ['Python', 'TensorFlow', 'FastAPI'],
  },
  {
    id: '4',
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for business analytics',
    color: '#7C3AED', // Purple
    technologies: ['D3.js', 'Vue.js', 'PostgreSQL'],
  },
  {
    id: '5',
    title: 'Blockchain Wallet',
    description: 'Secure cryptocurrency wallet application',
    color: '#F59E0B', // Yellow
    technologies: ['Solidity', 'Web3.js', 'React'],
  },
  {
    id: '6',
    title: 'Social Media App',
    description: 'Real-time social networking platform',
    color: '#06B6D4', // Cyan
    technologies: ['Next.js', 'Socket.io', 'Redis'],
  },
  {
    id: '7',
    title: 'Weather Forecast App',
    description: 'Real-time weather tracking with location services',
    color: '#8B5CF6', // Violet
    technologies: ['React', 'OpenWeather API', 'Geolocation'],
  },
  {
    id: '8',
    title: 'Recipe Management System',
    description: 'Digital cookbook with meal planning features',
    color: '#EF4444', // Rose
    technologies: ['Vue.js', 'Express.js', 'MySQL'],
  },
  {
    id: '9',
    title: 'Fitness Tracker',
    description: 'Personal fitness and workout tracking application',
    color: '#10B981', // Emerald
    technologies: ['Flutter', 'Dart', 'Health APIs'],
  },
  {
    id: '10',
    title: 'Music Streaming Platform',
    description: 'Audio streaming service with playlist management',
    color: '#F97316', // Orange
    technologies: ['Angular', 'Node.js', 'Audio APIs'],
  },
  {
    id: '11',
    title: 'Online Learning Platform',
    description: 'Educational platform with video courses and quizzes',
    color: '#84CC16', // Lime
    technologies: ['React', 'Video.js', 'MongoDB'],
  },
];

export default function ProjectsPage() {
  return (
    <div className="h-screen overflow-hidden relative">
      <BackgroundScene textGifUrl="" />
      <Navigation />
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <ProjectStack projects={sampleProjects} />
      </div>
    </div>
  );
}