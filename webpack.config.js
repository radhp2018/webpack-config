module.exports = {
 mode: "development",
 devtool: false,
 devServer: {
    static: "./dist",
    compress: true,
    port: 9000
  }
}