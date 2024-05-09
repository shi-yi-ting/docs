## tsconfig的作用[(参考链接)](https://segmentfault.com/a/1190000021749847)[(参考链接)](https://www.jianshu.com/p/47c29865b3a4)[(参考链接)](https://github.com/pingan8787/leo-JavaScript/blob/master/Cute-ReadingNotes/%E4%BA%86%E4%B8%8D%E8%B5%B7%E7%9A%84%20tsconfig%20json%20%E5%AD%E4%B9%A0%E6%8C%87%E5%8D%97.md)

tsconfig.json文件是编译 typeScript语言时遵循的编译规则配置。

```
{
    "compilerOptions": {
        "target": "esnext", // 目标语言的版本
        "module": "esnext", // 生成代码的模板标准
        "strict": true, // 开启所有严格的类型检查
        "jsx": "preserve", // 指定jsx代码用于的开发环境: 'preserve','react-native' or 'react'
        "importHelpers": true, // 通过tslib引入 helper函数,文件必须是模块
        "moduleResolution": "node", // 模块解析策略,ts默认用node的解析策略,即相对的方式导入
        "esModuleInterop": true, // 允许 export=导出,由import from导入
        "allowSyntheticDefaultImports": true, // allowSyntheticDefaultlmports用来指定允许从没有默认导出的模块中默认导入
        "sourceMap": true, // sourceMap用来指定编译时是否生成map文件
        "baseUrl": ".", // baseUrl用于设置解析非相对模块名称的基本目录,相对模块不会受到baseUrl的影响
        "types": [ // 加载的声明文件包
            "webpack-env"
        ],
        "paths": { // 路径映射,相对于baseUrl
            "@/*": [
                "src/*"
            ],
        },
        "lib": [ // lib用于指定要包含在编译中的库文件
            "esnext",
            "dom",
            "dom.iterable",
            "scripthost"
        ],
    },
    "include": [ // include也可以指定要编译的路径列表
        "src/**/*.ts",
        "src/**/*.tsx",
        "src/**/*.vue",
        "tests/**/*.ts",
        "tests/**/*.tsx"
    ],
    "exclude": [ //  exclude表示要排除的,不编译的文件,它也可以指定一个列表,规则和 include一样,可以是文件可以是文件夹,可以是相对路径或绝对路径,可以使用通配符
        "node_modules"
    ]
}
```
