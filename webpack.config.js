const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let target = "web";

let mode = "development";

if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist";
}
module.exports = {
 mode: mode,
 target: target,
 devtool: "source-map",
 module: {
     rules: [
         {
          test:/\.s?css/i,
          use: [MiniCssExtractPlugin.loader, "css-loader","postcss-loader", "sass-loader"],
         },
         {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
              loader: "babel-loader",
          }   
         }
     ]
 },
 plugins: [new MiniCssExtractPlugin()],
 devServer: {
    static: "./dist",
    compress: true,
    port: 9000,
    hot:true,
  }
}