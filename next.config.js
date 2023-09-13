const { withContentlayer } = require('next-contentlayer');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = withContentlayer((phase) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    typescript: {
      ignoreBuildErrors: true,
    },
  };

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return nextConfig;
  }

  return nextConfig;
});
