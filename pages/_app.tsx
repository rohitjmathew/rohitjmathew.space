import '@/styles/global.css';

import { ThemeProvider } from 'next-themes';
import { useAnalytics } from '@/lib/analytics';
import { reportWebVitals } from '@/lib/web-vitals';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useAnalytics();

  useEffect(() => {
    reportWebVitals();
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
