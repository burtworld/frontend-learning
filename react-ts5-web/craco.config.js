const CracoAntDesignPlugin = require("craco-antd");
const path = require("path");
const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);
module.exports = {
  devServer: {
    port: 8112,
    proxy: {
      "/interview": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
  webpack: {
    // 设置别名
    alias: {
      "@": pathResolve("src"),
      "@assets": pathResolve("src/asserts"),
      // "@images": pathResolve("src/asserts/images"),
      // "@components": pathResolve("src/components"),
      // "@hooks": pathResolve("src/hooks"),
      // "@pages": pathResolve("src/pages"),
      // "@utils": pathResolve("src/utils"),
    },
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          // "@primary-color": "#5cb0f5",
        },
        javascriptEnabled: true,
      },
    },
  ],
};
