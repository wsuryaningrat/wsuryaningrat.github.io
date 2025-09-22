# Wahyu Suryaningrat - Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS. This portfolio showcases professional experience, education, projects, and achievements with a clean, minimalist design.

## 🚀 Live Demo

- **Production**: [wsningrat.site](https://wsningrat.site)
- **GitHub Pages**: [wsuryaningrat.github.io](https://wsuryaningrat.github.io)

## ⚡ Quick Start

Want to get this portfolio up and running quickly? Follow these steps:

```bash
# 1. Clone the repository
git clone https://github.com/wsuryaningrat/my-portfolio.git
cd my-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open http://localhost:3000 in your browser
```

**That's it!** Your portfolio is now running locally. To deploy it, see the [Deployment](#-deployment) section below.

## ✨ Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Smooth Animations**: Subtle animations using Framer Motion
- **Interactive Timeline**: Expandable work experience, education, and achievements
- **Contact Integration**: Direct links to LinkedIn, GitHub, and email with copy-to-clipboard
- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Performance Optimized**: Code splitting, lazy loading, and optimized assets

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📋 Prerequisites

- Node.js (version 18 or higher)
- npm (Node Package Manager)
- Git

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/wsuryaningrat/my-portfolio.git
cd my-portfolio
```

**Or using SSH:**
```bash
git clone git@github.com:wsuryaningrat/my-portfolio.git
cd my-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000` (or the next available port).

### 4. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` directory.

### 5. Preview Production Build

```bash
npm run preview
```

This serves the production build locally for testing.

## 📁 Project Structure

```
my-portfolio/
├── public/                 # Static assets
│   ├── logos/             # Company/institution logos
│   ├── thumbnails/        # Project thumbnails
│   ├── profile.jpg        # Profile photo
│   ├── WahyuSuryaningrat_CV.pdf
│   └── CNAME              # Custom domain configuration
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Navbar.tsx
│   │   ├── StickyPanel.tsx
│   │   ├── TimelineRow.tsx
│   │   ├── Toast.tsx
│   │   └── Tooltip.tsx
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Work.tsx
│   │   ├── Education.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Achievements.tsx
│   │   └── Contact.tsx
│   ├── hooks/             # Custom React hooks
│   │   ├── useClipboardToast.ts
│   │   └── useScrollSpy.ts
│   ├── data/              # Data files
│   │   └── profile.json
│   ├── config/            # Configuration
│   │   └── site.ts
│   ├── styles/            # Global styles
│   │   └── globals.css
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Personal Information

Edit `src/data/profile.json` to update:

- Personal details (name, roles, pitch, about)
- Work experience
- Education
- Skills/tools
- Projects
- Achievements
- Contact information

### Styling

- **Global Styles**: `src/styles/globals.css`
- **Tailwind Config**: `tailwind.config.js`
- **Component Styles**: Individual `.tsx` files

### Configuration

- **Site Settings**: `src/config/site.ts`
- **Build Config**: `vite.config.js`

## 🚀 Deployment

### Method 1: GitHub Pages (Recommended)

#### Step 1: Prepare Repository
1. Ensure your repository is public on GitHub
2. Go to your repository → Settings → Pages
3. Set source to "Deploy from a branch"
4. Select `gh-pages` branch
5. Click Save

#### Step 2: Deploy
```bash
# Install gh-pages if not already installed
npm install --save-dev gh-pages

# Deploy to GitHub Pages
npm run deploy
```

#### Step 3: Custom Domain (Optional)
1. Add your domain to `public/CNAME` file:
   ```
   your-domain.com
   ```
2. Configure DNS settings:
   - Add a CNAME record pointing to `wsuryaningrat.github.io`
   - Or add A records pointing to GitHub Pages IPs

### Method 2: Vercel (Fast & Easy)

#### Option A: Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click Deploy

#### Option B: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

### Method 3: Netlify

#### Option A: Drag & Drop
1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to the deploy area

#### Option B: Git Integration
1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. Deploy

### Method 4: Other Platforms

The built files in the `dist` directory can be deployed to any static hosting service:

- **AWS S3 + CloudFront**: Upload `dist` contents to an S3 bucket
- **Firebase Hosting**: Use Firebase CLI
- **GitHub Pages**: Alternative method using Actions
- **Surge.sh**: `npm install -g surge && surge dist/`

### Deployment Checklist

Before deploying, ensure:
- [ ] All personal information is updated in `src/data/profile.json`
- [ ] Site configuration is correct in `src/config/site.ts`
- [ ] Custom domain is configured (if applicable)
- [ ] All assets (images, PDFs) are properly linked
- [ ] Build runs without errors: `npm run build`
- [ ] Preview works correctly: `npm run preview`

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Build and deploy to GitHub Pages

### Code Quality

- **TypeScript**: Type safety and better development experience
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting (if configured)

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance

- **Code Splitting**: Automatic code splitting by Vite
- **Lazy Loading**: Images and components load on demand
- **Optimized Assets**: Compressed images and minified code
- **Modern JavaScript**: ES6+ features with browser compatibility

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Wahyu Suryaningrat**
- LinkedIn: [wsningrat](https://linkedin.com/in/wsningrat)
- GitHub: [wsuryaningrat](https://github.com/wsuryaningrat)
- Email: wahyusuryaningrat@gmail.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library

---

⭐ If you found this project helpful, please give it a star!