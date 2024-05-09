## vue.config

Vue.config.js是一个可选的配置文件，如果项目的根目录存在这个文件，那么它就会被 @vue/cli-service 自动加载。
你也可以使用package.json中的vue字段，但要注意严格遵守JSON的格式来写。这里使用配置vue.config.js的方式进行处理。

```
const webpack = require('webpack')
module.exports = {
    // 部署应用包时的基本 URL
    publicPath: process.env.NODE_ENV === 'production' ? '/online/' : './',
    // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
    outputDir: 'dist',
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    // 使用npm run build 将静态文件放入到assets目录下
    assetsDir: 'assets',
    // eslint-loader 是否在保存的时候检查 安装@vue/cli-plugin-eslint有效
    lintOnSave: true,
    //是否使用包含运行时编译器的 Vue 构建版本。设置true后你就可以在使用template
    runtimeCompiler: true,
    // 生产环境是否生成 sourceMap 文件 sourceMap的详解请看末尾
    productionSourceMap: true,
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        }
    },
    // 3.0的写法，映射路径 @代表src 比如要写一个图片<img src='@/assets/img/1.png'>就会读取src下的assets下的1.png
    chainWebpack: config => {
        config.resolve.alias
        .set('@', resolve('src'))
    },
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    // webpack-dev-server 相关配置
    devServer: { // 设置代理
        hot: true, //热加载
        host: '0.0.0.0', //ip地址
        port: 8085, //端口
        https: false, //false关闭https，true为开启
        open: true, //自动打开浏览器
        proxy: {
            '/api': { //本地
                target: 'xxx',
                // 如果要代理 websockets
                ws: true,
                changeOrigin: true
            },
            '/test': { //测试
                target: 'xxx'
            },
            '/pre': { //预发布
                target: 'xxx'
            },
            '/pro': { //正式
                target: 'xxx'
            }
        }
    },
    pluginOptions: { // 第三方插件配置
        // ...
    }
}
```
