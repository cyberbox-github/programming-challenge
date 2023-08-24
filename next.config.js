/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  env: {
    SERVER_URL: process.env.SERVER_URL,
    CLIENT_URL: process.env.CLIENT_URL,
    NEXT_APP_TITLE: process.env.NEXT_APP_TITLE,
  },
  pageExtensions: ['tsx', 'ts'],
}

module.exports = nextConfig
