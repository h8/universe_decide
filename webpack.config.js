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
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              sourceMap: true,
            }
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[path]___[name]__[local]___[hash:base64:5]"
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: "file-loader",
        options: {
          outputPath: "/images/",
        }
      }
    ]
  },

  "devtool": (process.env.NODE_ENV === "production") ? false : "inline-source-map"
};