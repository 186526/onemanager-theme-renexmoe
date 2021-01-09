/** @type {import("snowpack").SnowpackUserConfig}*/
module.exports = {
  mount: {
    "src/html_dist": "/",
    "src/js": "/renexmoe_assets/js",
    "src/css": "/renexmoe_assets/css",
    //"./package.json":"/renexmoe_assets/package.json",
  },
  plugins: [
    [
      "@snowpack/plugin-optimize",
      {
        minifyJS: true,
        minifyCSS: true,
        minifyHTML: false,
        preloadModules: false,
        preloadCSS: true,
        preloadCSSFileName: "css/app.css",
        //target: ["chrome49"]
      },
    ],
    [
      "@snowpack/plugin-webpack",
      {
        sourceMap: true,
        htmlMinifierOptions: false,
        manifest: true,
        extendConfig: (config) => {
          config.optimization.splitChunks = {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
              vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10
              },
              default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true
              }
            }
          };
          return config;
        },
      },
    ],
  ],
};
