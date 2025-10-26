import { useEffect, useState } from 'react';
import { onCLS, onFID, onLCP, onFCP, onTTFB, Metric } from 'web-vitals';

export type WebVitals = Partial<Record<Metric['name'], number>>;

/**
 * **Hook for showing web-vitals output inside components.**
 * 
 * TTFB (Time To First Byte) – Time until browser receives first byte ≤ 800 ms
 * 
 * FCP (First Contentful Paint) – Time until first visual element appears ≤ 1.8s
 * 
 * LCP (Largest Contentful Paint) – Time until main content finishes rendering ≤ 2.5s
 * 
 * CLS (Cumulative Layout Shift) – How much layout jumps around ≤ 0.1 (unitless score)
 * 
 * FID (First Input Delay) – Time from user interaction to response ≤ 100 ms
 * 
 * In May 2024, the Chrome team officially replaced First Input Delay (FID) with Interaction to Next Paint (INP) as the Core Web Vitals metric for measuring interaction responsiveness
 * @returns Partial<Record<"CLS" | "FCP" | "FID" | "INP" | "LCP" | "TTFB", number>>
 */
export function useWebVitals(): WebVitals {
  const [metrics, setMetrics] = useState<WebVitals>({});

  useEffect(() => {
    const report = (metric: Metric) => {
      setMetrics(prev => ({ ...prev, [metric.name]: metric.value }));
    };

    onTTFB(report); // TTFB (Time To First Byte) – Time until browser receives first byte ≤ 800 ms
    onFCP(report);  // FCP (First Contentful Paint) – Time until first visual element appears ≤ 1.8s
    onLCP(report);  // LCP (Largest Contentful Paint) – Time until main content finishes rendering ≤ 2.5s
    onCLS(report);  // CLS (Cumulative Layout Shift) – How much layout jumps around ≤ 0.1 (unitless score)
    onFID(report);  // FID (First Input Delay) – Time from user interaction to response ≤ 100 ms

    // In May 2024, the Chrome team officially replaced First Input Delay (FID)
    // with Interaction to Next Paint (INP) as the Core Web Vitals metric
    // for measuring interaction responsiveness
  }, []);

  return metrics;
}