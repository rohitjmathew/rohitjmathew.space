import { useRouter } from 'next/router';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

// Check if analytics is enabled
export const isAnalyticsEnabled = (): boolean => {
  return (
    typeof window !== 'undefined' && 
    !!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS &&
    !!window.gtag
  );
};

// log the pageview with their URL
export const pageview = (url: string): void => {
  if (isAnalyticsEnabled()) {
    try {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!, {
        page_path: url,
        anonymize_ip: true,
        allow_ad_personalization_signals: false,
        allow_google_signals: false,
        custom_map: {
          custom_parameter_1: 'page_type'
        }
      });
    } catch (error) {
      console.warn('[Analytics] Failed to track pageview:', error);
    }
  }
};

// log specific events happening.
export const event = ({ action, params }: { action: string; params: Record<string, unknown> }): void => {
  if (isAnalyticsEnabled()) {
    try {
      window.gtag('event', action, {
        ...params,
        anonymize_ip: true, // GDPR compliance
      });
    } catch (error) {
      console.warn('[Analytics] Failed to track event:', error);
    }
  }
};

// Track external link clicks
export const trackExternalLink = (url: string, text?: string): void => {
  event({
    action: 'click',
    params: {
      event_category: 'external_link',
      event_label: url,
      link_text: text || 'unknown',
      value: 1
    }
  });
};

// Track downloads
export const trackDownload = (filename: string): void => {
  event({
    action: 'file_download',
    params: {
      event_category: 'download',
      event_label: filename,
      value: 1
    }
  });
};

export const useAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
    }
    
    // Only set up tracking if analytics is enabled
    if (isAnalyticsEnabled()) {
      //When the component is mounted, subscribe to router changes
      //and log those page views
      router.events.on('routeChangeComplete', handleRouteChange)

      // Track initial page view
      pageview(router.asPath);
    }

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events, router.asPath])
};
