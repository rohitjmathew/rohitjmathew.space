const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

  // Manually collect page files
  const pagesDir = path.join(process.cwd(), 'pages');
  const dataDir = path.join(process.cwd(), 'data');

  const getAllFiles = (dirPath, arrayOfFiles = [], excludePatterns = []) => {
    if (!fs.existsSync(dirPath)) return arrayOfFiles;

    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
      const fullPath = path.join(dirPath, file);
      if (fs.statSync(fullPath).isDirectory()) {
        arrayOfFiles = getAllFiles(fullPath, arrayOfFiles, excludePatterns);
      } else {
        const relativePath = path.relative(process.cwd(), fullPath);
        const shouldExclude = excludePatterns.some(pattern => {
          if (typeof pattern === 'string') return relativePath.includes(pattern);
          if (pattern instanceof RegExp) return pattern.test(relativePath);
          return false;
        });

        if (!shouldExclude) {
          arrayOfFiles.push(relativePath);
        }
      }
    });

    return arrayOfFiles;
  };

  const pageFiles = getAllFiles(pagesDir, [], [
    '_app.tsx', '_document.tsx', '404.tsx', '/api/'
  ]).filter(file => file.endsWith('.tsx') || file.endsWith('.ts'));

  const dataFiles = getAllFiles(dataDir, [], [])
    .filter(file => file.endsWith('.mdx') && !file.endsWith('data/links.mdx') && !file.endsWith('data/uses.mdx'));

  const pages = [...pageFiles, ...dataFiles];

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
      .map((page) => {
        const path = page
          .replace('pages', '')
          .replace('data', '')
          .replace('.js', '')
          .replace('.tsx', '')
          .replace('.ts', '')
          .replace('.mdx', '');
        const route = path === '/index' ? '' : path;

        // Define priority and change frequency based on page type
        let priority = '0.6';
        let changefreq = 'monthly';

        if (route === '') {
          priority = '1.0';
          changefreq = 'weekly';
        } else if (route === '/about') {
          priority = '0.8';
          changefreq = 'monthly';
        } else if (route === '/links') {
          changefreq = 'weekly';
        }

        return `
                        <url>
                            <loc>${`https://rohitjmathew.space${route}`}</loc>
                            <changefreq>${changefreq}</changefreq>
                            <priority>${priority}</priority>
                        </url>
                    `;
      })
      .join('')}
        </urlset>
    `;

  const formatted = await prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  });

  // eslint-disable-next-line no-sync
  fs.writeFileSync('public/sitemap.xml', formatted);
})();
