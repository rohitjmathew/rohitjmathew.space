import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect, ReactNode } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';

import Footer from '@/components/Footer';

interface Meta {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

interface ContainerProps {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

export default function Container({ children, ...customMeta }: ContainerProps) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevValue) => !prevValue);
  };

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const router = useRouter();
  const meta: Meta = {
    title: 'Rohit Jacob Mathew',
    description: `Software Engineer based in India. SDE at Trellix, Auth0 Ambassador & Ex Turtlemint & HackerRank`,
    image: 'https://rohitjmathew.space/static/images/rohit.webp',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-slate-50 dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://rohitjmathew.space${router.asPath}`} />
        <link rel="canonical" href={`https://rohitjmathew.space${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Rohit Jacob Mathew" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iamrohitjmathew" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <nav className="fixed md:sticky bottom-0 md:top-0 left-0 right-0 flex items-center justify-between w-full max-w-4xl p-3 md:px-6 lg:px-8 md:py-6 lg:py-8 mx-auto text-gray-900 bg-slate-50 dark:bg-gray-800 md:bg-slate-50/80 md:dark:bg-gray-900/80 md:backdrop-blur-md border-t md:border-t-0 border-gray-200 dark:border-gray-600 md:border-none shadow-lg md:shadow-none z-40 dark:text-gray-100">
        <a href="#skip" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 rounded">
          Skip to content
        </a>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="w-4 h-4 text-gray-800 dark:text-gray-200"
            >
              {resolvedTheme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
        <button
          onClick={toggleMenu}
          className="inline-block md:hidden w-10 h-10 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all hover:bg-gray-300 dark:hover:bg-gray-700 relative z-40"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6 text-gray-800 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray-800 dark:text-gray-200"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            </svg>
          )}
        </button>
        <div className={`${menuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-full"} md:opacity-100 md:visible md:translate-y-0 fixed md:static bottom-16 md:bottom-0 left-0 right-0 md:left-auto md:right-auto z-50 flex flex-col md:flex-row md:space-x-6 font-medium w-full md:w-auto bg-slate-50 dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent border-t border-gray-200 dark:border-gray-600 md:border-none shadow-xl md:shadow-none transition-all duration-300 ease-in-out rounded-t-xl md:rounded-none`}>
          <div className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 space-y-2 md:space-y-0">
            <NextLink
              href="/"
              className="py-2 px-3 md:p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-600 md:dark:hover:text-blue-400 rounded-lg md:rounded-none transition-colors border-l-4 border-transparent hover:border-blue-500 md:border-none font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NextLink>
            <NextLink
              href="/about"
              className="py-2 px-3 md:p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-600 md:dark:hover:text-blue-400 rounded-lg md:rounded-none transition-colors border-l-4 border-transparent hover:border-blue-500 md:border-none font-medium"
              onClick={() => setMenuOpen(false)}
            >
              About
            </NextLink>
            <NextLink
              href="https://blog.rohitjmathew.space/"
              className="py-2 px-3 md:p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-600 md:dark:hover:text-blue-400 rounded-lg md:rounded-none transition-colors border-l-4 border-transparent hover:border-blue-500 md:border-none font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </NextLink>
            <NextLink
              href="/bookshelf"
              className="py-2 px-3 md:p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-600 md:dark:hover:text-blue-400 rounded-lg md:rounded-none transition-colors border-l-4 border-transparent hover:border-blue-500 md:border-none font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Bookshelf
            </NextLink>
            <NextLink
              href="/links"
              className="py-2 px-3 md:p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-600 md:dark:hover:text-blue-400 rounded-lg md:rounded-none transition-colors border-l-4 border-transparent hover:border-blue-500 md:border-none font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Links
            </NextLink>
            <NextLink
              href="/uses"
              className="py-2 px-3 md:p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-600 md:dark:hover:text-blue-400 rounded-lg md:rounded-none transition-colors border-l-4 border-transparent hover:border-blue-500 md:border-none font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Uses
            </NextLink>
          </div>
        </div>
      </nav>
      <main
        id="skip"
        className="flex flex-col justify-start items-center px-6 sm:px-6 md:px-8 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16 bg-slate-50 dark:bg-gray-900 pb-20 sm:pb-24 md:pb-24"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
