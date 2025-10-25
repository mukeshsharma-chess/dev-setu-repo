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
  i18n: {
    locales: ['en', 'in'],
    defaultLocale: 'en',
  },

  async rewrites() {
    return [
      {
        source: '/:locale(en|in)/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
};



export default nextConfig;
