import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    // Base URL - change this to match your GitHub repo name
    base: '/Personal-portfolio/',

    // Build options
    build: {
        // Output directory
        outDir: 'dist',

        // Generate sourcemaps for debugging
        sourcemap: false,

        // Assets directory
        assetsDir: 'assets',

        // Rollup options for multi-page setup
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                library: resolve(__dirname, 'library.html'),
                golf: resolve(__dirname, 'golf.html'),
                projects: resolve(__dirname, 'projects.html'),
                resume: resolve(__dirname, 'resume.html'),
            },
        },

        // Minification
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true, // Remove console.log in production
            },
        },

        // Chunk size warnings
        chunkSizeWarningLimit: 1000,
    },

    // Development server options
    server: {
        port: 3000,
        open: true, // Automatically open browser
        cors: true,
        hmr: {
            overlay: true, // Show errors as overlay
        },
    },

    // Preview server options (for production preview)
    preview: {
        port: 4173,
        open: true,
    },

    // CSS options
    css: {
        devSourcemap: true,
    },

    // Optimizations
    optimizeDeps: {
        include: [
            // Add any npm packages you use here
            // For example: 'd3', 'swiper'
        ],
    },

    // Plugin configurations
    plugins: [
        // Add plugins here as needed
        // For example: imageOptimizer(), PWA(), etc.
    ],
});