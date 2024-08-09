/**
 * The routes that are public and do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of routes that are user for authentication
 * These routes will redirect logged in users to /dashboard
 * @type {string[]}
 */
export const authRoutes = ["/login"];

/**
 * The prefix for the api auth routes
 * Routes that starts with this prefix are for authentication
 * @type {string}
 */
export const apiAuthPrefix = "/api";
