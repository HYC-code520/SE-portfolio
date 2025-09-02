# Portfolio Website

A beautiful, modern portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern, responsive design
- 🎨 Beautiful animations with Framer Motion
- 📱 Mobile-friendly navigation
- 🎯 Type-safe development with TypeScript
- 🔧 Modular component architecture
- ⚡ Fast performance with Next.js
- 🎭 Customizable themes and content

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── layout/           # Layout components
│   └── sections/         # Page sections
├── config/               # Configuration files
│   ├── navigation.ts     # Navigation items
│   ├── social.ts         # Social links
│   └── animations.ts     # Animation variants
├── lib/                  # Utility functions
│   └── utils.ts         # Class name utilities
└── types/               # TypeScript types
    └── index.ts         # Type definitions
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Navigation
Edit `src/config/navigation.ts` to modify navigation items.

### Social Links
Update `src/config/social.ts` to change social media links.

### Hero Content
Modify the hero content in `src/app/page.tsx`.

### Background
Change the background image in `src/components/layout/BackgroundScene.tsx`.

## Expanding the Project

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Import and use in your page components
3. Add configuration in `src/config/` if needed

### Adding New Pages
1. Create new files in `src/app/`
2. Reuse existing components
3. Update navigation configuration

### Adding New Components
1. Create components in appropriate folders under `src/components/`
2. Follow the existing patterns for props and styling
3. Add TypeScript interfaces in `src/types/`

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **Class Variance Authority** - Component variants

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking 