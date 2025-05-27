const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: "./src/vue/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "vue.bundle.js",
    library: {
      name: "VueWidget",
      type: "umd",
    },
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".vue"],
  },
  plugins: [new VueLoaderPlugin()],
};
