// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // TypeScript strict mode
  typescript: {
    strict: true,
    typeCheck: true,
  },

  // Modules configuration
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@nuxt/icon", "@nuxt/image"],

  // Image configuration
  image: {
    quality: 80,
    domains: ["images.unsplash.com"],
  },

  // SEO configuration (commented out due to module issues)
  // site: {
  //   url: 'https://your-domain.com',
  //   name: 'Nuxt 4 Starter Kit',
  //   description: 'A production-grade Nuxt 4 starter kit with TypeScript, Tailwind CSS, and modern tooling',
  //   defaultLocale: 'en'
  // },

  // SEO defaults
  // seo: {
  //   redirectToCanonicalSiteUrl: true
  // },

  // Sitemap configuration
  // sitemap: {
  //   enabled: true
  // },

  // Robots configuration
  // robots: {
  //   enabled: true
  // },

  // Security configuration - Conservative defaults (commented out due to module issues)
  // security: {
  //   // Enable HSTS
  //   hsts: {
  //     maxAge: 31536000,
  //     includeSubDomains: true,
  //     preload: true
  //   },
  //
  //   // Content Security Policy - Relaxed for dev, strict for production
  //   csp: {
  //     directives: {
  //       'default-src': ["'self'"],
  //       'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"], // Relaxed for dev
  //       'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
  //       'img-src': ["'self'", "data:", "https:", "blob:"],
  //       'font-src': ["'self'", "https://fonts.gstatic.com"],
  //       'connect-src': ["'self'", "https:", "wss:"],
  //       'object-src': ["'none'"],
  //       'base-uri': ["'self'"],
  //       'form-action': ["'self'"],
  //       'frame-ancestors': ["'none'"]
  //     }
  //   },
  //
  //   // Referrer Policy
  //   referrerPolicy: 'strict-origin-when-cross-origin',
  //
  //   // Permissions Policy
  //   permissionsPolicy: {
  //     camera: '()',
  //     microphone: '()',
  //     geolocation: '()',
  //     interestCohort: '()'
  //   },
  //
  //   // Additional security headers
  //   headers: {
  //     'X-Content-Type-Options': 'nosniff',
  //     'X-Frame-Options': 'DENY',
  //     'X-XSS-Protection': '1; mode=block'
  //   },
  //
  //   // Security.txt route
  //   securityTxt: {
  //     enabled: true,
  //     contact: 'security@your-domain.com',
  //     expires: '2025-12-31T23:59:59.000Z' // 1 year from now
  //   }
  // },

  // Runtime config for environment variables
  runtimeConfig: {
    // Private keys (only available on server-side)
    apiSecret: "",

    // Public keys (exposed to client-side)
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://your-domain.com",
    },
  },
});
