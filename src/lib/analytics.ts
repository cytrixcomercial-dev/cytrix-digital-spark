import { getGaMeasurementId } from "./analytics.functions";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let initialized = false;

export async function initAnalytics() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  const measurementId = await getGaMeasurementId();
  if (!measurementId) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId);
}

// SPA route changes are not auto-tracked by gtag; call on each navigation.
export function trackPageView(path: string) {
  window.gtag?.("event", "page_view", { page_path: path });
}

// Custom events: CTA clicks, form submits, WhatsApp clicks.
export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  window.gtag?.("event", eventName, params);
}
