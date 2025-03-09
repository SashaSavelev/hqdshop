/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next';

const nextConfig = {
  images: {
    unoptimized: true, 
  },
};

export default withPlaiceholder(nextConfig);
