/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['github-readme-stats.vercel.app','github-readme-streak-stats.herokuapp.com','github-profile-trophy.vercel.app','user-images.githubusercontent.com','raw.githubusercontent.com']
  },
  env:{
    GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
    
    
  }
}

module.exports = nextConfig
