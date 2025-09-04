/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['qtrypzzcjebvfcihiynt.supabase.co'],
  },
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  // Uncomment the lines below if deploying to Netlify
  // output: 'export',
  // trailingSlash: true,
  // images: { unoptimized: true }
}

module.exports = nextConfig 