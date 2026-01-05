# Portfolio Website

A professional portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design** - Clean, modern design with glassmorphism effects and gradient animations
- **Dark Mode** - Toggle between light and dark themes with persistent preferences
- **Smooth Animations** - Animations powered by Framer Motion
- **Fully Responsive** - Works on all devices (mobile, tablet, desktop)
- **Performance Optimized** - Fast loading and optimized for speed
- **SEO Optimized** - Complete metadata, Open Graph, and Twitter cards
- **Contact Form** - Email integration with EmailJS
- **Scroll to Top** - Smooth scroll-to-top button
- **Section Dividers** - Visual separators between sections
- **Accessible** - WCAG compliant with ARIA labels

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main page with all sections
│   ├── globals.css         # Global styles & animations
│   ├── loading.tsx         # Loading state
│   └── not-found.tsx       # 404 page
├── components/
│   ├── sections/           # All page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   ├── Navbar.tsx          # Navigation with dark mode
│   ├── Footer.tsx          # Footer with social links
│   ├── ThemeProvider.tsx   # Theme context
│   ├── ScrollToTop.tsx     # Scroll to top button
│   └── SectionDivider.tsx   # Section separators
├── lib/
│   └── emailjs.config.ts   # EmailJS configuration
└── public/                  # Static assets
```

## Sections

1. **Hero** - Animated introduction with stats
2. **About** - Professional summary and highlights
3. **Experience** - Complete work history with achievements
4. **Projects** - Personal projects showcase
5. **Skills** - Technical skills by category
6. **Education** - Academic achievements and leadership
7. **Contact** - Working contact form and information

## Deployment

The site can be deployed to Vercel or any other hosting platform that supports Next.js:

1. Push your code to GitHub
2. Import the repository to [Vercel](https://vercel.com)
3. Add environment variables for EmailJS (if using the contact form)
4. Deploy

## Customization

To customize this portfolio for your own use:

- Update personal information in the section components (`components/sections/`)
- Modify colors and theme in `tailwind.config.ts`
- Adjust animations in component files
- Update metadata in `app/layout.tsx`
- Replace images in the `public/` folder

## Technologies Used

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS
- Lucide React Icons

