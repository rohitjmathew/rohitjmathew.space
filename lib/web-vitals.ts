import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
import { event } from './analytics';

function sendToAnalytics(metric: any) {
    // Log for debugging in development
    if (process.env.NODE_ENV === 'development') {
        console.log(`[Web Vitals] ${metric.name}:`, {
            value: metric.value,
            id: metric.id,
            delta: metric.delta,
            rating: metric.rating
        });
    }

    // Send to Google Analytics 4 with proper error handling
    try {
        event({
            action: metric.name,
            params: {
                metric_id: metric.id,
                metric_value: metric.value,
                metric_delta: metric.delta,
                metric_rating: metric.rating,
                custom_map: {
                    metric_1: 'metric_value'
                }
            }
        });
    } catch (error) {
        console.warn('[Analytics] Failed to send web vitals:', error);
    }
}

export function reportWebVitals() {
    // Only track web vitals if analytics is configured
    if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
        onCLS(sendToAnalytics);
        onINP(sendToAnalytics); // Interaction to Next Paint (replaces FID)
        onFCP(sendToAnalytics);
        onLCP(sendToAnalytics);
        onTTFB(sendToAnalytics);
    }
}