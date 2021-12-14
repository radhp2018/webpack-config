const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let mode = "development";

if (process.env.NODE_ENV === "production") {
    mode = "production";
}
module.exports = {
 mode: mode,
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