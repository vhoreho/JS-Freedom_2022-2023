//Подключаем модуль path
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackDevServer = require("webpack-dev-server");

//Экпортируем модули
module.exports = {
  //Входной файл
  entry: "./src/index.js",

  // Выходной файл проекта
  output: {
    // Название файла
    filename: "bundle.js",
    //Путь куда созранится (например, <название папки>/dist)
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
  //Подключаются модули
  module: {
    //Объявляются правила
    rules: [
      {
        //Указываются типы файлов для которых прописыватся правила
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
