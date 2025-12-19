/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, 
  },
  // Se for usar Netlify, comente a linha abaixo. 
  // Se for usar GitHub Pages, mantenha ela.
  // basePath: '/portfolio-landing-page', 
};

export default nextConfig;