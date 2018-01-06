var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: __dirname + "/assets/js/app.js",
  output: {
    path: __dirname + "/priv/static",
    filename: "js/app.js"
  },

  plugins: [
    new CopyWebpackPlugin([{from: __dirname + "/assets/static"}])
  ]
};