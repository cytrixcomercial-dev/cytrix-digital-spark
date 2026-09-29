import { createServerFn } from "@tanstack/react-start";

// Exposes the GA4 measurement ID to the browser. The ID is public by nature
// (it ships in the gtag.js snippet on every page), so no auth is required.
export const getGaMeasurementId = createServerFn({ method: "GET" }).handler(async () => {
  return process.env["GOOGLE_ANALYTICS_MEASUREMENT_ID"] ?? null;
});
