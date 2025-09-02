import { Instagram, Facebook, Twitter, Github } from 'lucide-react';
import { SocialLink } from '@/types';

export const socialLinks: SocialLink[] = [
  {
    platform: 'Instagram',
    url: 'https://instagram.com/your-handle',
    icon: Instagram,
  },
  {
    platform: 'Facebook',
    url: 'https://facebook.com/your-profile',
    icon: Facebook,
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/your-handle',
    icon: Twitter,
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/your-username',
    icon: Github,
  },
]; 