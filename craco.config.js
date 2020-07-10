module.exports = {
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
