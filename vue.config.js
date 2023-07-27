const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        assert: require.resolve("assert/"),
        stream: require.resolve("stream-browserify/"),
        crypto: require.resolve("crypto-browserify/"),
        buffer: require.resolve("buffer/"),
      },
    },
    plugins: [
      // make Buffer globally available
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ],
  },
});
