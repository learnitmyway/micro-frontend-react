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
    },
  },
}
