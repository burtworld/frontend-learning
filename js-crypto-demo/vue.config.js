const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  productionSourceMap: process.env.NODE_ENV === "production" ? false : true, //加载源码
  indexPath: "index.html",
  assetsDir: "assets", // 静态资源目录（js，css，img，fonts）
  lintOnSave: false, // 是否开启eslint保存检测，有效值：true || false || ‘error’
});
