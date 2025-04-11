// const { default: merge } = require("webpack-merge"),
//   base = require("./webpack.base.js");
import { merge } from "webpack-merge";
import base from "./webpack.base.js";
export default merge(base, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    historyApiFallback: true, // history路由
    allowedHosts: "all",
    client: {
      progress: true, //在浏览器中以百分比显示编译进度
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },

    compress: true, // 启用gzip压缩
    hot: true, // 模块热替换
    // liveReload: true, // 启用热更新
    open: {
      app: {
        name: "chrome", // 打开指定浏览器各操作系统值不相同
        arguments: ["--incognito", "--new-window"], // 打开无痕模式
      },
    },
    port: 8082,
    proxy: [
      {
        context: ["/NiceFish-React"],
        target: "http://localhost:8091/",
      },
    ],
  },
});
