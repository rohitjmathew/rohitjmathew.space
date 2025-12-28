import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

function sendToAnalytics(metric: any) {
    // You can send to Google Analytics, console, or any analytics service
    console.log(metric);

    // Example: Send to Google Analytics 4 (when gtag is available)
    if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', metric.name, {
            custom_parameter_1: metric.value,
            custom_parameter_2: metric.id,
            custom_parameter_3: metric.delta
        });
    }
}

export function reportWebVitals() {
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics); // FID has been replaced with INP (Interaction to Next Paint)
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
}