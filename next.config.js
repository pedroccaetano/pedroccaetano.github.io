const isProd = process.env.NODE_ENV === 'production'


module.exports = {
  assetPrefix: isProd ? '/pedroccaetano.github.io/' : '',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.child_process = false;
    }
    return config;
  }
};
