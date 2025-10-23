const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Add fallbacks for Node.js modules that might be used by dependencies
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        "fs": false,
        "path": false,
        "os": false,
        "crypto": false,
        "stream": false,
        "util": false,
        "buffer": false,
        "process": false,
        "assert": false,
        "http": false,
        "https": false,
        "url": false,
        "zlib": false,
        "querystring": false,
        "net": false,
        "tls": false,
        "child_process": false,
        "module": false,
        "vm": false,
        "constants": false,
        "timers": false,
        "events": false,
        "domain": false,
        "punycode": false,
        "readline": false,
        "repl": false,
        "cluster": false,
        "worker_threads": false
      };

      // Add plugins to provide polyfills
      webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new webpack.ProvidePlugin({
          process: 'process/browser',
          Buffer: ['buffer', 'Buffer'],
        }),
      ];

      // Ignore specific modules that might cause issues
      webpackConfig.externals = webpackConfig.externals || [];
      webpackConfig.externals.push({
        'fs': 'commonjs fs',
        'path': 'commonjs path',
        'os': 'commonjs os'
      });

      return webpackConfig;
    },
  },
};
