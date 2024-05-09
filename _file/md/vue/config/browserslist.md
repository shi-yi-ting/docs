## browserslist的作用[(参考链接)](https://www.jianshu.com/p/d45a31c50711)

browserslist配置能够分享目标浏览器和nodejs版本在不同的前端工具。这些工具能根据目标浏览器自动来进行配置, 单独是没用的。

browserslist 的数据都是来自Can I Use。想知道配置语句的查询结果可以使用[[online demo]](https://browserl.ist/), 可以看到最新的各个浏览器版本Browserslist

补充: 在vue官方脚手架中，browserslist字段会被 @babel/preset-env 和 Autoprefixer 用来确定需要转译的 JavaScript 特性和需要添加的 CSS 浏览器前缀([参考链接](https://github.com/browserslist/browserslist-example))

### 使用方式1

```
(1) 配置放在package.json中
{
    "browserslist": [
        "last 1 version",
        "> 1%",
        "maintained node versions",
        "not dead"
    ]
}
```

### 使用方式2

```
(2) 配置放入到单独文件 .browserslistrc 中
> 1%  // 代表着全球超过1%人使用的浏览器
last 2 // versions  表示所有浏览器兼容到最后两个版本
not ie <=8 // 表示IE浏览器版本大于8（实则用npx browserslist 跑出来不包含IE9
safari >=7 // 表示safari浏览器版本大于等于7
not dead
```
