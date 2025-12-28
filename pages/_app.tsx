import '@/styles/global.css';

import { ThemeProvider } from 'next-themes';
import { useAnalytics } from '@/lib/analytics';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  useAnalytics();

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
