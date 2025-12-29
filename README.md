# rohitjmathew.space

[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.19-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

My personal website and digital portfolio showcasing my work focusing on SecOps, DevOps, and Cybersecurity. Also features some personal stuff I enjoy.

## ✨ Features

- **Modern Stack**: Next.js 16 with Turbopack, TypeScript, Tailwind CSS
- **Privacy-First**: AI training opt-out, minimal analytics, Creative Commons licensing  
- **Performance Optimized**: Web Vitals monitoring, image optimization, SEO best practices
- **Content Management**: MDX-powered pages for dynamic content
- **Spotify Integration**: Real-time "now playing" display
- **Responsive Design**: Mobile-first approach with dark mode support

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/rohitjmathew/rohitjmathew.space.git
cd rohitjmathew.space

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with Turbopack
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/) for rich content pages
- **Deployment**: [Vercel](https://vercel.com/)
- **Analytics**: Google Analytics with Web Vitals
- **Music**: Spotify API integration

## 📄 Content License

Content on this site is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/):
- ✅ **Share & Adapt**: With attribution
- ❌ **No Commercial Use**: Personal/educational only
- 📝 **Share-Alike**: Derivatives must use same license
- 🤖 **No AI Training**: Explicitly excluded from LLM datasets

## 🔒 Privacy & Security

- **AI Training Opt-out**: Technical and legal barriers against LLM crawling
- **Privacy-Conscious Analytics**: Minimal data collection
- **Security Headers**: CSP, HSTS, and other protective measures
- **Bot Protection**: Selective crawling permissions

## 📁 Project Structure

```
├── components/          # Reusable React components
├── data/               # MDX content files
├── layouts/            # Page layout templates  
├── lib/                # Utility functions and API clients
├── pages/              # Next.js pages and API routes
├── public/             # Static assets and files
├── scripts/            # Build and utility scripts
└── styles/             # Global CSS and Tailwind config
```

## 🧪 Testing

**Docker-only testing** for 100% OS-independent results across all browsers and devices.

### Quick Commands
```bash
# Run all 200 tests (40 test cases × 5 browsers) in parallel
npm test

# Run visual regression tests only (Chrome)
npm run test:visual

# Update visual test screenshots  
npm run test:visual:update

# View detailed HTML test report
npm run test:report
```

### Test Coverage
- **200 Total Executions**: 40 test cases across 5 browsers (Chrome, Firefox, Safari, Mobile Chrome, Mobile Safari)
- **Parallel Execution**: 4 workers for faster results (~2.6 minutes total)
- **OS Independent**: Docker ensures consistent rendering on macOS, Windows, Linux
- **CI/CD Ready**: Automated testing in GitHub Actions

### Test Categories

#### Functional Tests (30 tests)
- **Homepage**: Core functionality, navigation, external links
- **About Page**: Content structure, responsive design, card layouts
- **Resource Pages**: MDX content rendering, consistent styling  
- **Navigation**: Internal/external links, 404 handling
- **Performance**: Core Web Vitals, accessibility, SEO
- **API Integration**: Spotify API handling, graceful failures

#### Visual Tests (10 tests)  
- **Cross-page Screenshots**: All main pages
- **Responsive Design**: Mobile viewports and layouts
- **Dark Mode**: Theme switching consistency
- **404 Page**: Error page styling

### Docker Architecture
- **Why Docker-only?** Zero OS dependencies, consistent font rendering, no "works on my machine" issues
- **How it works:** Builds Next.js app in Ubuntu container → starts server → runs 200 tests in parallel → generates reports
- **File Structure:**
  ```
  ├── Dockerfile                    # Test environment setup
  ├── playwright.docker.config.ts   # Test configuration  
  ├── scripts/test-docker.sh        # Test runner script
  └── tests/                        # Test suites (40 test cases)
  ```

### Troubleshooting
- **Tests fail with timeout:** Increase timeout in `playwright.docker.config.ts`
- **Visual tests fail:** Run `npm run test:visual:update` to regenerate screenshots  
- **CI/CD issues:** Check GitHub Actions logs for Docker build errors

## 🙏 Acknowledgments

Special thanks to [Lee Robinson](https://leerob.io/) whose open-source website provided inspiration and foundational patterns for this project.

## 📞 Connect

- **Website**: [rohitjmathew.space](https://rohitjmathew.space)
- **Twitter**: [@iamrohitjmathew](https://twitter.com/iamrohitjmathew)
- **LinkedIn**: [rohitjmathew](https://linkedin.com/in/rohitjmathew)
- **GitHub**: [rohitjmathew](https://github.com/rohitjmathew)

---

*Building in public • Sharing knowledge • Connecting with the tech community*
