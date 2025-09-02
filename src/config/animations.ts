import { AnimationVariants } from '@/types';

export const containerVariants: AnimationVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

export const itemVariants: AnimationVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const floatingVariants: AnimationVariants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const navVariants: AnimationVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export const sideContentVariants: AnimationVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 }
}; 