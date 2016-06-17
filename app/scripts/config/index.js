// App Configuration

// In our Webpack build, we insert a global `CONTEXT` object into built script
// to provide contextual information about the build to the app.
const context = (typeof CONTEXT !== "undefined") ? CONTEXT : {};

// Platform (aka Execution Environment)
// Either "server" or "browser" (default)
export const inBrowser = (typeof window !== "undefined");
export const inServer = !inBrowser;
export const platform = inBrowser ? "browser" : "server";

// Environment (aka Deployment Environment)
// Either "production", "staging", or "development" (default)
export const env = context.env || "development";

// Version (number and git commit)
export const version = context.version || "unknown version";
export const commit = context.commit || "unknown commit";

// App Name
export const appName = "Bitmatica Web App Boilerplate";

// Backend Server URL
const backendURLs = {
  development: "https://development.api.example.org/v1",
  staging:     "https://staging.api.example.org/v1",
  production:  "https://production.api.example.org/v1",
};
export const backendURL = backendURLs[env];
