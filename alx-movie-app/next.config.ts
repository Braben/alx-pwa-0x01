// import type { NextConfig } from "next";

// // const nextConfig: NextConfig = {
// //   /* config options here */
// //   reactCompiler: true,
// //   reactStrictMode: true,
// // };

// // export default nextConfig;

// import withPWAInit from "@ducanh2912/next-pwa";

// /** @type {import('next').NextConfig} */

// const withPWA = withPWAInit({
//   dest: "public",
// });

// const nextConfig = {
//   reactCompiler: true,
//   reactStrictMode: true,
//   images: {
//     domains: ["m.media-amazon.com"],
//   },
// };

// export default withPWA({
//   ...nextConfig,
// });

import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */
const withPWA = withPWAInit({
  dest: "public",
});

const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["m.media-amazon.com"],
  },

  // ✅ Explicitly disable Turbopack
  turbopack: {},
};

export default withPWA(nextConfig);
