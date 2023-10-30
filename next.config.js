// const path = require('fonts/get_schwifty.ttf');

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
          publicPath: '/_next/fonts/',
        },
      },
    });

    return config;
  },
};