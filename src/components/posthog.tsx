import posthog from "posthog-js";
posthog.init("phc_rJeWBYHRnqdd66pXTrkRLNYf3IaNXue0MFICXekLztW", { api_host: "https://eu.posthog.com" });
posthog.capture("Main Site", { property: "value" });
export function PostHog({ }) {
}