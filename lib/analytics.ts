import { useRouter } from 'next/router';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

// log the pageview with their URL
export const pageview = (url: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    });
  }
};

// log specific events happening.
export const event = ({ action, params }: { action: string; params: Record<string, unknown> }): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, params);
  }
};

export const useAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
};
