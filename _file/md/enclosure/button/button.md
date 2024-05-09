## 自定义botton

```
使用时候添加类样式即可，如 Button White
<template>
    <button class="Button White"><i class="import2_blue" />导入</button>
    <button class="Button"><i class="delete2_white" />删除</button>
</template>

<style>
/* 自定义button样式 */
.Button {
    display: inline-block;
    height: 32px;
    line-height: 30px;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 14px;
    color: white;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    vertical-align: middle;
    outline: none;
    border: 1px solid #418ef8;
    background-color: #418ef8;
}

.Button:hover {
    color: white;
    background-color: #0087dd;
}

.Button.White {
    border-color: #cccccc;
    color: #666666;
    background-color: #ffffff;
}

.Button.White:hover {
    color: #666666;
    background-color: #f0f0f0;
}

.Button.Gray {
    border-color: #bebebe;
    background-color: #bebebe;
    cursor: default;
}

.Button.Orange {
    border-color: #fd9a00;
    background-color: #fd9a00;
}

.Button.Orange:hover {
    background-color: #ed9100;
}

/* 图标 */
i.delete2_white {
    display: inline-block;
    margin: 7px 7px 7px 0;
    width: 16px;
    height: 16px;
    background-image: url(@/assets/images/delete2_white.png);
    vertical-align: top;
}
i.import2_blue {
    display: inline-block;
    margin: 7px 7px 7px 0;
    width: 16px;
    height: 16px;
    background-image: url(@/assets/images/import2_blue.png);
    vertical-align: top;
}
</style>
```
