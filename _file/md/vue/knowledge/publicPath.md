## publicPath[(参考链接)](https://juejin.cn/post/6844904126699044872)[(参考链接)](https://juejin.cn/post/6844903601060446221)

publicPath的作用就是决定img js static 文件夹的位置，
为'/'时这些文件夹在域名的根路径上，
为'./'时这些文件会在index.html文件所在位置的同级目录上
static文件夹中的文件建议最好使用绝对路径

### publicPath: '/'

1. publicPath默认为'/' 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
2. 例如 https://www.my-app.com/ (页面可访问)此时的index.html和打包之后的img js static同在域名的根路径上
3. 例如 https://www.my-app.com/web/路由地址 (页面可访问)此时index.html会放在web文件夹里面，而img js static
   等文件依然放在域名的根路径上，如果此时页面中访问static文件夹中的文件使用相对路径如
   图片将加载不出来，原因是'./'相对路径相对的是index.html所在的文件夹，并且static文件夹中的文件不会经过webpack进行
   打包成为依赖，向那些经过webpack打包成为依赖项的图片则不会出现这种加载不出来的情况，解决办法：是在访问
   static文件夹中的文件时使用绝对路径，'/static'绝对路径直接指向域名的根路径上

### publicPath: '', 和 publicPath: './'

1. 所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径
2. 例如 https://www.my-app.com/ (页面可访问) 此时的index.html和打包之后的img js static同在域名的根路径上
3. 例如 https://www.my-app.com/web/路由地址 (页面不可访问)此时index.html会放在web文件夹里面，而img js static 等文件和它一样在同一个文件夹中,也就是不能有/web

### publicPath: '/web/'

1. 如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。
2. 例如，如果你的应用被部署在 https://www.my-app.com/web/，则设置 publicPath 为 /web/。
3. 此时 img js font等文件将会在web文件夹中
4. https://www.my-app.com/web/123/路由 此时的index.html将被放在123文件夹中
5. 可通过web文件夹中找到static中的文件也可在域名的根路径上找到static中的文件

### vue.config.js

开发者工具中的Sources
Sources面板中的page展示的当前页面的资源列表

解决Vue项目打包后打开index.html页面显示空白以及图片路径错误的问题[(参考链接)](https://blog.csdn.net/weixin_43953710/article/details/102953286?utm_medium=distribute.pc_relevant_download.none-task-blog-baidujs-1.nonecase&depth_1-utm_source=distribute.pc_relevant_download.none-task-blog-baidujs-1.nonecase)Vue项目运行npm run build后会生成一个dist文件夹，我们一般都是把这个文件夹部署到服务
器上。dist文件夹里边有一个static文件和一个index.html页面，这个index就是
最后单页面的最终文件
