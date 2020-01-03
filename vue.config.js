const path = require("path");

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("components", path.join(__dirname, "./src/components"))
      .set("assets", path.join(__dirname, "./src/assets"))
      .set("@", path.join(__dirname, "./src"))
      .set("views", path.join(__dirname, "./src/views"))
      .set("routers", path.join(__dirname, "./src/routers"));
  },
  devServer: {
    proxy: {
      "/mybatis-plus-0.0.1-SNAPSHOT": {
        target: "http://139.129.228.232:84",
        changeOrigin: true, 
        //   http://139.129.228.232:84/mybatis-plus-0.0.1-SNAPSHOT/
      }
    }
  }

};
