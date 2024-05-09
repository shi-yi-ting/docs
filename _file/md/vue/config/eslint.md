## ESLint配置, 实现错误代码标识以及自动修复[(参考链接)](https://cn.eslint.org/docs/user-guide/integrations)

一、安装 eslint 插件 vscode软件中安装

二、vscode 扩展设置

依次点击 文件 > 首选项 > 设置 打开 VSCode 配置文件，添加如下配置：

```
"eslint.options": {
    "extensions": [".js", ".vue"]
},
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue-html",
    {
        "language": "vue",
        "autoFix": true
    },
    {
        "language": "html",
        "autoFix": true
    }
],
"eslint.run": "onSave",
"eslint.autoFixOnSave": true,
```

如此，每次保存文件的时候就可以根据 .eslintrc.js 配置规则来检查代码和做一些简单的修复

### 1. ESlint支持几种格式的配置文件

JavaScript-使用 .eslintrc.js然后输出一个配置对象
YAML-使用 .eslintrc.yaml或, .eslintrc.yml定义配置的结构
JSON-使用 .eslintrc.json去定义配置的结构, ESLint的JSON文件允许 JavaScript风格的注释。
(弃用)使用 .eslintrc,可以使JSON也可以是YAML。
package.json-在 package.json里创建一eslintConfigl属性,在那里定义你的配置

### 2.如果同一个目录下有多个配置文件ESlint只会使用一个。优先级顺序如下:

.eslintrc.js
.eslintrc.yaml
.eslintrc.yml
.eslintrc.json
.eslintrc
package.json

### 3.veturi格式化代码和默认格式化代码发生冲突时可在 settings.json中关闭默认格式化如下 设置为 false表示关闭:

#### 配置如下：

```
/*语言指定配置*/
"[html]": {
    "editor.formatOnSave": true
},
"[css]": {
    "editor.formatOnSave": true
},
"[javescript]": {
    "editor.formatOnSave": false
},
"[typescript]": {
    "editor.formatOnSave": true
},
"[vue]": {
    "editor.formatOnSave": true
},
```

#### 简易版eslint配置

```
module.exports = {
    root: true,
    env: {
        node: true,
        es2020: true,
    },
    extends: [
        'plugin:vue/essential',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        parser: 'babel-eslint',
    },
    plugins: ['vue'],
    globals: {
        $this: false,
        $t: false,
        $tc: false,
        qs: false,
        axios: false,
        axiosCache: false,
        async: false,
        cookie: false,
        dayjs: false,
        debounce: false,
        debounceAsync: false,
        Decimal: false,
        is: false,
        jQuery: false,
        lodash: false,
        util: false,
        storage: false,
    },
    rules: {
        'vur/component-definition-name-casing': ['error', 'PascalCase'],
        'vue/require-prop-types': 'error',
        'vue/no-unused-components': 0,
        'vue/html-indent': ['error', 4],
        /* recommended change */
        'no-debugger': ['warn'], // 禁用 debugger
        'no-unused-vars': ['Warn', { // 禁止出现未使用过的变量
            args: 'after-used',
        }],
        /* Possible Errors */
        'no-console': ['off', { // 禁用 console
            allow: ['info', ' warn', 'error'],
        }],
        /* Best Practices */
        'no-multi-spaces': ['error'], // 禁止使用多个空格
        'require-await': ['error'], // 禁止使用不带 await 表达式的 async 函数
        curly: ['error', 'all'], // 强制所有控制语句使用一致的括号风格
        eqeqeq: ['error', 'always'], // 要求使用 === 和 !==
        'no-eval': ['error'], // 禁用 eval()
        /* Stylistic Issues */
        indent: ['error', 4, { SwitchCase: 1 }], // 强制使用一致的缩进
        'no-trailing-spaces': ['error'], // 禁用行尾空格
        'key-spacing': ['error', { // 强制在对象字面量的属性中键和值之间使用一致的间距
            beforeColon: false,
            afterColon: true,
            mode: 'strict',
        }],
        'no-multiple-empty-lines': ['error', { // 禁止出现多行空行
            max: 3,
            maxEOF: 1,
            maxBOF: 1,
        }],
        'eol-last': ['error', 'always'], // 要求或禁止文件末尾存在空行
    }
}
```
#### 模板

```
// eslint-disable @typescript-eslint/no-var-requires
const base = require('./eslint/eslint.base.js')
// const typescript = require('./eslint/eslint.typescript.js')
const vue = require('./eslint/eslint.vue.js')
module.exports = {
    // 使用配置文件的第一种方式是通.eslintrc.*和 package.json文件。ESlint将自动在要检测的文件目录里寻找它们,紧接着是父级目录, 一直到文件系统的根目录(除非指定root:true)
    // 当你想对一个项目的不同部分的使用不同配置,或当你希望别人能够直接使用 ESlint,而无需记住要在配置文件中传递什么,这种方式就很有用
    root: true, // ESlint一旦发现配置文件中有root: true,它就会停止在父级目录中寻
    env: { // 要在配置文件里指定环境,使用env关键字指定你想启用的环境,并设置它们为true
        node: true, // node环境
        es2020: true,
    },
    // 值为" eslint: recommended"的 extends属性启用一系列核心规则,这些规则报告一些常见问题,在规则页面中被标记为
    // 这个推荐的子集只能在 ESlint主要版本进行更新
    // 如果你的配置集成了推荐的规则:在你升级到ESlint新的主版本之后，在你使用命令行的 --fix选项之前，检查一下报告问题，这样你就知道一个新的可修复的推荐的规则将更改代码
    extends: [
        // 'eslint: recommended',
        // '@vue/typescript/recommended',
        // 'plugin: vue/recommended',
        ...base.extents,
        // ...typescript.extends,
        ...vue.extends,
    ],
    // 指定你想要支持的 JavaScript语言选项。默认情况下, ESLint支持 ECMAScript5语法。你可以覆盖该设置,以启用对ECMAScript其他版本和JSX的支持
    parserOptions: {
        ecmaVersion: 2020, // 默认设置为3,5(默认),你可以使用6、7、8、9或10来指定你想要使用的 ECMAScript版本。你也可以用使用年份命名的版本号指定2015(同6),2016(同7)2017(同8)或2018(同9)或2019(same as 10)
        sourceType: 'module', // 设置" script"(默认)或" module"如果你的代码是在 ECMAScript中的模块
        ecmaFeatures: { // 这是个对象,表示你想使用的额外的语言特性
            globalReturn: true, // 允许在全局作用域下使用 return语句
            impliedStrict: true, // 启用全局 strict mode(如果 ecmaversion是5或更高)
            jsx: true, // 启用Jsx
        },
        // ESlint默认使用Espree作为其解析器,你可以在配置文件中指不同的解析器,只要该解析器符合下列要求，设置解析器选项能帮助ESlint确定什么是解析错误，所有语言选项默认都是false
        // parser: 'babel-eslint',
    },
    // 插件可以提供处理器。处理器可以从另一种文件中提取 JavaScript代码,然后让 ESLin检测 JavaScript代码。或者处理器可以在预处理中转换 JavaScript代码。
    // ESlint支持使用第三方插件。在使用插件之前,你必须使用npm安装它。在配置文件里配置插件时,可以使用 plugins关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin-前缀。
    plugins: [
        // '@typescript-eslint',
        ...base.plugins,
        // ...typescript.plugins,
        ...vue.plugins,
    ],
    // 当访问当前源文件内未定义的变量时,no-undef规则将发出警告。如果你想在一个源文件里使用全局变量,推荐你在 ESlint中定义这些全局变量,这样 ESlint 就不会发出警告
    // 你可以使用注释或在配置文件中定义全局量。布尔值false和字符串值"readable"等价于"readonly"。类似地,布尔值true和字符串值 "writeable"等价于 "writable"。但是,不建议使用旧值
    globals: {
        // $this: false,
        // $t: false,
        // $tc: false,
        // qs: false,
        // axios: false,
        // axiosCache: false,
        // async: false,
        // cookie: false,
        // dayjs: false,
        // debounce: false,
        // debounceAsync: false,
        // Decimal: false,
        // is: false,
        // jQuery: false,
        // lodash: false,
        // util: false,
        // storage: false,
    },
    // ELInt附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则。要改变一个规则设置,你必须将规则D设置为下列值之一：
    // "off"或0-关闭规则
    // "warn"或1-开启规则,使用警告级别的错误:warn(不会导致程序退出)
    // "eror"或2-开启规则,使用错误级别的错误:eror(当被触发的时候,程序会退出)
    rules: {
        // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
        ...base.rules,
        // ...typescript.rules,
        ...vue.rules,
    }
}
```
