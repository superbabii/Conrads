import pkg from "./next-i18next.config.js";
const { i18n } = pkg;

import { loadCustomBuildParams } from "./next-utils.config.js";
const { esmExternals = false, tsconfigPath } = loadCustomBuildParams();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals,
  },
  i18n,
  reactStrictMode: true,
  typescript: {
    tsconfigPath,
  },
};

export default nextConfig;
