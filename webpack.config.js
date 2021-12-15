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
 output: {
    assetModuleFilename: "images/[hash][ext][query]"
 },
 devtool: "source-map",
 module: {
     rules: [
         {
             test: /\.(png|jpe?g|gif|svg)$/i,
             type: "asset",
             parser : {
                 dataUrlCondition: {
                     maxSize: 30* 1024
                 }
             }             
         },
         {
          test:/\.s?css/i,
          use: [
              {
                  loader: MiniCssExtractPlugin.loader,
                  options: 
                  {
                    publicPath: ""
                  },
              }, "css-loader","postcss-loader", "sass-loader"],
         },
         {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
              loader: "babel-loader",
          }   
         }
     ]
 },
 plugins: [new MiniCssExtractPlugin()],
 resolve: {
    extensions: [".js", ".jsx"]
 },
 devServer: {
    static: "./dist",
    compress: true,
    port: 9000,
    hot:true,
  }
}