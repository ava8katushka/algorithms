const withMDX = require('@next/mdx')({ extension: /\.mdx?$/,})
 

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  images: {
    domains: [
      "en.wikipedia.org",
      "upload.wikimedia.org",
      "res.cloudinary.com",
      "asset.cloudinary.com"
    ],
  },
}
 
module.exports = withMDX(nextConfig)