const prefixer = require('postcss-prefix-selector')

module.exports = {
  style: {
    postcss: {
      mode: 'extends' /* (default value) */ || 'file',
      plugins: [
        prefixer({
          prefix: '.my-prefix',
        }),
      ],
    },
  },
  webpack: {
    configure: {
      optimization: {
        runtimeChunk: false,
        splitChunks: {
          chunks(chunk) {
            return false
          },
        },
      },
    },
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
}
