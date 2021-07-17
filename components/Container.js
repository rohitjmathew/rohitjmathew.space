import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';

import Footer from '@/components/Footer';

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Rohit Jacob Mathew',
    description: `Software Engineer based in India. SDE at McAfee, Auth0 Ambassador & Ex Turtlemint & HackerRank`,
    image: 'https://rohitjmathew.space/static/images/rohit.webp',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-white dark:bg-black">
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
      <nav className="flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 text-gray-900 bg-white sticky-nav md:my-8 dark:bg-black bg-opacity-60 dark:text-gray-100">
        <a href="#skip" className="skip-nav">
          Skip to content
        </a>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800"
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
        <button class="inline-block md:hidden w-10 h-10 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-200 p-1">
          <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="w-8 h-5 text-gray-800 dark:text-gray-200"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div className="md:visible absolute md:relative top-20 left-0 md:top-0 z-20 flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-gray-100 dark:bg-gray-800 dark:md:bg-black dark:text-gray-100 shadow-md rounded-md md:rounded-none md:shadow-none md:bg-transparent p-6 pt-3 md:p-0">
          <NextLink href="/">
            <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">Home</a>
          </NextLink>
          <NextLink href="/about">
            <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">About</a>
          </NextLink>
          <NextLink href="https://blog.rohitjmathew.space/">
            <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">Blog</a>
          </NextLink>
          <NextLink href="/bookshelf">
            <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">Bookshelf</a>
          </NextLink>
          <NextLink href="/links">
            <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">Links</a>
          </NextLink>
          <NextLink href="/uses">
            <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">Uses</a>
          </NextLink>
        </div>
      </nav>
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-white dark:bg-black"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
