module.exports = {
  webpack: {
    configure: {
      optimization: {
        runtimeChunk: false,
        splitChunks: {
          cacheGroups: {
            default: false,
          },
        },
      },
      output: {
        filename: 'static/js/main.js',
        chunkFilename: 'static/js/[name].chunk.js',
      },
    },
  },
}
