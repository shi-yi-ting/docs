## poetess的作用[(参考链接)](https://blog.csdn.net/lingshui147/article/details/96880944)

postcss是帮我们后处理css, css已经编译完成了, 在 stylus - loader编译成css之后, 在通过postcss优化css,
通过一系列组件去优化, 比如以下, 通过autoprefixer添加css前缀

```
module.exports = {
    plugins: {
        'postcss-px-to-viewport': {
            viewportWidth: 375, // 视窗的宽度,对应的是我们设计稿的宽度
            viewportHeight: 667, // 视窗的高度,对应的是我们设计稿的高度(也可以不配置)
            unitPrecision: 5, // 保留几位小数,指定'px'转换为视窗单位值的小数位数(很多时候无法整除)
            viewportUnit: 'vw', // 指定需要转换成的视窗单位,建议使用vw
            selectorBlackList: ['tab-bar', 'tab-bar-item', 'shopping-cart-bottom-bar'], // 指定不需要转换的类
            minPixelValue: 1, // 小于或等于'1px'不转换为视窗单位
            mediaQuery: false // 允许在媒体查询中转换'px'
        },
    },
}
```

照着配, 还有 autoprefixer还要配置支持的浏览器的版本范围.browserslistrc这个文件里面配置要支持的浏览器
PostCss插件, 用于解析CSS并使用 Can I Use中的值将供应商前缀添加到CSS规则中。它是Google推荐的，
并在Twitter和阿里巴巴中使用
Autoprefixer将基于当前浏览器的流行程度和属性支持使用数据为您应用前缀。您可以尝试 Autoprefixer的交互式演示。

```
var autoprefixer = require("autoprefixer")
module.exports = {
    plugins: [
        autoprefixer({
            browsers: ["last 5 version"]
        })
    ]
}
```

[(参考链接)](https://github.com/postcss/autoprefixer)
