const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: __dirname + "/assets/js/app.js",
  output: {
    path: __dirname + "/priv/static",
    filename: "js/app.js"
  },

  plugins: [
    new CopyWebpackPlugin([{from: __dirname + "/assets/static"}])
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        enforce: "pre",
        options: {
          configPath: __dirname + "/.eslintrc.js"
        }
      }
    ]
  }
};