// next.config.mjs

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // i18n: {
//   //   locales: ['en', 'hi'], // all supported languages
//   //   defaultLocale: 'en',   // default language
//   //   localeDetection: true,  // optional, stops auto-detection
//   // },
// };

// export default nextConfig;


const nextConfig = {
  i18n: {
    locales: ['en', 'in'],
    defaultLocale: 'en',
  },

  // Exclude API from i18n routing
  experimental: {
    excludeDefaultLocaleFromAPI: true,
  },
};

export default nextConfig;
