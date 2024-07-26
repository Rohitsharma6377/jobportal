/** @type {import('next').NextConfig} */
// next.config.mjs
import dotenv from 'dotenv';

dotenv.config();

const nextConfig = {
  env: {
    MONGO_URI: process.env.MONGO_URI,
    Secret_key: process.env.Secret_key,
  },
};

export default nextConfig;
