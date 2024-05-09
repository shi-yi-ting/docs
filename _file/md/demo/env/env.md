## vue3中环境变量的使用
### 在项目根目录下新建 .env.development（开发环境） 内容如下

```
# 开发环境变量的标识，这个ENV是拿不到的，这个ENV只是个标识
ENV = 'development'

# 自定义变量
VITE_TYPE = '我是环境变量 development'
VITE_API_ONLYOFFICE = "development-http://192.168.175.131:8080"

# 注意: 变量前面需要加 VITE 否则读取不到
# 有可能单引号不能识别
```
### 在项目根目录下新建 .env.production（生产环境） 内容如下

```
# 生产环境变量的标识，这个ENV是拿不到的，这个ENV只是个标识
ENV = 'production'

# 自定义变量
VITE_TYPE = '我是环境变量 production'
VITE_API_ONLYOFFICE = "production-http://192.168.175.131:5147"

# 注意: 变量前面需要加 VITE 否则读取不到
# 有可能单引号不能识别
```
### 使用

```
<template>
    <div>
        <div>
            <!-- 使用环境变量 -->
            {{ environment.type }}
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'


export default {
    setup() {
        const environment = reactive({
            url: import.meta.env.VITE_API_ONLYOFFICE, // 获取环境变量
            type: import.meta.env.VITE_TYPE, // 获取环境变量
        })

        return {
            environment,
        }
    },
}
</script>

```

## 环境变量

环境变量[参考链接](https://blog.csdn.net/qq_38249409/article/details/129760403)就是在不同的环境中使用不同的变量值。可以用.env文件来定义环境变量，再通过import.meta.env来使用定义的环境变量。

### 环境变量文件(.env)
.env指的是文件名而不是后缀名，它是一种放置在Vue根目录下的文件，它的特殊之处在于文件名的约定，我们在启动服务、构建项目时会根据文件的名称来进行匹配，常用的有两种形式： .env 和 .env.[mode]

这里的[mode]是模式的意思，我们可以使用一些自定义的命名方式来命名定义模式，例如有4种不同的环境需要定义，分别是开发、测试、预发、生产，我们就可以定义4中模式

.env.development
.env.test
.env.stage
.env.production

其中 development 和 production 是Vite中的两种默认的模式，当我们通过vite指令在本地启动服务时，会默认加载.env.development中的变量，而通过vite build进行打包时，会默认加载.env.produciton文件中的变量。

当前，也可以通过在指令后面加上--mode 模式名的方式来明确的指定一个环境变量文件进行加载，例如构建测试环境可以通过vite build --mode test来处理。

除此之外，我们在各个环境中的通用配置，可以直接写到以.env命名的文件中，.env文件中的变量在任何模式下都可以加载，但需要注意的是，.env文件下的变量优先级是低于.env.[mode]文件的，也就是说，如果有相同的变量，.env文件中的变量会被覆盖掉。

### 环境变量变量定义与使用

字段是直接写在.env文件中的，字段名VITE_xxx进行定义，只有以VITE为前缀的字段会暴露给客户端直接使用，例如在4个不同的文件中通过一个字段来定义当前的环境。

VITE_ENV=development
VITE_ENV=test
VITE_ENV=stage
VITE_ENV=production

定义好后，可以在服务中的任意一个.js文件中通过import.meta.env.变量名来使用，例如我在App.vue的js中输入了下面的代码。

```
<script setup>
	console.log(import.meta.env.VITE_ENV)
</script>

```
通过不同的模式进行打包后，进入首页就会在控制台中输出不同的字段值了。

注：环境变量经常会使用在axios上，在不同的环境中请求不同的服务端的路径。


## 打包部署

我们是通过 node+vite 进行的构建打包，所以需要在package.json中的scripts属性上编辑打包的指令，这里同样也是4个环境：


```
"scripts": {
    "dev": "vite",
    "test": "vite build --mode test",
    "stage": "vite build --mode stage",
    "build": "vite build",
},
```
上面我们已经提过了，vite指令与vite build指定是对应了默认值devolepment和production，所以此处只需要指定测试与预发环境的模式。
