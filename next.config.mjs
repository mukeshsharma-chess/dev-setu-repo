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

/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      // ✅ Remove locale prefixes (en/in) from API routes
      {
        source: '/:locale(en|in)/api/:path*',
        destination: '/api/:path*',
        permanent: true,
      },

      {
        source: '/:locale(en|in)/:path*',
        destination: '/:path*',
        permanent: true,
      },

    ];
  },

  reactStrictMode: true,
};



export default nextConfig; 

