## webpack

```
const path = require('path') // // 导入 node.js 中专门操作路径的模块
const htmlWebpackPlugin = require('html-webpack-plugin') // 配置 html-webpack-plugin 生成预览页面
module.exports = {
    mode: 'development', // mode 用来指定构建模式
    entry: path.join(__dirname, './src/main.js'), // 打包入口文件的路径
    output: {
        path: path.join(__dirname, './dist'), // 输出文件的存放路径
        filename: 'bundle.js', // 输出文件的名称
    },
    // 内存中生成页面
    plugins: [ // plugins 数组是 webpack 打包期间会用到的一些插件列表
        new htmlWebpackPlugin({ // 创建插件的实例对象
            template: path.join(__dirname, './src/index.html'), // 指定要用到的模板文件
            filename: 'index.html', // 指定生成的文件的名称，该文件存在于内存中，在目录中不显示
        }),
    ],
    module: {
        rules: [
            { test: /.css$/, use: ['style-loader', 'css-loader'] },
            { test: /.scss$/, use: ['style-loader', 'css-loader?modules', 'sass-loader'] },
            { test: /.(png|gif|bmp|jpg)$/, use: 'url-loader?limit=5000' },
            { test: /.jsx?$/, use: 'babel-loader', exclude: /node_modules/ },
        ],
    },
}
```

### 什么是webpack

Webpack是目前流行的前端项目打包工具，它将各个模块组合在一起实现最终的页面效果
打包之后会自动生成一个 dist 文件夹，打包好的文件将会被保存在这里

### Webpack的基本使用

1.webpack打包的出口和入口文件的位置
webpack 的 4.x 版本中默认约定：打包的入口文件为： src 中的 index.js 文件
打包的输出文件为 dist 中的 main.js 文件

2.配置webpack打包的出口和入口文件
配置打包的出口和入口文件是在webpack.config.js文件中进行配置
配置过程中将用到node中的系统模块 path，在webpack.config.js模块中使用
module export向外暴漏一个对象，对象中有两个属性分别为
entry的属性的属性值为入口文件的绝对路径，通过path模块对象中的join方法进行路径拼接
output属性的属性值为对象类型对象当中有path 和filename两个属性
path的属性值为出口文件的绝对路径由path模块中的join方法拼接而成
filename的作用是对输出的文件的文件名进行自定义

```
3.webpack配置自动打包功能
如果不配置，每次修改代码之后，需要运行一样 npm run dev   修改的代码才能生效
配置步骤
    1.运行 npm install webpakc-dev-server -D 命令  安装支持项目自动打包的工具
    2.将 package.json 文件 scripts 中的 dev 值改为  webpack-dev-server   然后执行 npm run
    3.将 src 文件夹 index.html 中 script 脚本的引用路径 修改为  “/bundle.js”
    4.运行 npm run dev 命令重新打包
    5.在浏览器中访问  http://localhost:8080  地址 查看打包的效果  改地址为项目的根目录
    **注意：**
    1.webpack-dev-server 会启动一个实时打包的 http 服务器，用于监听代码的变化，变化之后自动打包
    2.webpack-dev-server 打包生成的输出文件，默认放到了项目的根目录中，而且是虚拟的，看不见的，使用是为： “/bundle.js”
    3.自动打包文件的输出文件默认自动放在了根目录中，并没有按outpit指定到输出目录并且输出的文件我们在物理存储空间是看不到的
配置html-webpack-plugin生成预览页面
原因是不进行配置，进去页面之后我们看到的是路径，而不是页面的效果，需要点击选中 src 才能看到效果
配置步骤：
    1.运行 npm install html-webpack-plugin -D  安装生成预览页面的插件
    2.在webpack.config.js文件中导入安装的html-webpack-plugin插件，导入之后会有一个构造函数的返回值赋值给变量，使用这个构造函数实例化一个对象，构造函数中的梳理画过程中传递一个对象作为实参，对象中有两个属性一个template作用是指定要用到的模板文件一个filename指定生成的文件的名称改文件存储于内存中，目录中是显示的
    3.修改 webpack.config.js  文件中向外暴露的配置对象。对象中有一个plugin属性，该属性的属性值为数组类型，数组存放的为将要暴漏出去的插件内容
    4.重新执行 npm run dev
配置自动打包的相关参数
如果不配置，每次运行代码之后需要手动复制 链接 然后打开浏览器粘贴之后才能查看效果
配置步骤：
找到 package.json 文件 在 scripts 节点中的 dev 的值后面   空格 之后加一个 --open即可
Webapck中配置加载器
使用loader加载器的原因：
在实际开发过程中，webpack 默认只能打包处理以  .js  后缀名结尾的模块
其他非 .js 后缀名结尾的模块， webpack 默认处理不了，需要调用 loader加载器才可以正常打包，否则会报错
loader 加载器可以协助 webpack 打包处理特定的文件模块，比如：less-loader  sass-loade  url-loader
在webpack.config.js的module中的rules属性中添加loader规则，rules的属性为数组类型，数组当中存放的为
loader的正则****
```

### 上线之前的打包

1.在package.json 文件中的scripts节点中配置 webpack 打包命令"build": "webpack -p" 该命令默认加载项目根目录中的 webpack.config.js 配置文件
2.执行 npm run build 指令进行打包发布
3.打包完之后，文件将保存在 dist 文件夹中
