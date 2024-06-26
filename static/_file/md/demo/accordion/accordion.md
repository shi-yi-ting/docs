### 封装代码
```vue
使用前需导入组件
<template>
    <div>
        <ul class="accordion-container">
            <li v-for="(item,index) in items" :key="index" class="accordion-item" :style="{'backgroundImage':`url(${item.src})`,width:100/item.length+'%'}">
                <p class="accordion-title">{{item.title}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "accordion",
    data() {
        return {
            items: [
                {
                    title: '背景1',
                    src: "https://www.zpzpup.com/assets/image/example/bg7.jpeg"
                },
                {
                    title: '背景2',
                    src: "https://www.zpzpup.com/assets/image/example/bg10.jpeg"
                },
                {
                    title: '背景3',
                    src: "https://www.zpzpup.com/assets/image/example/bg9.jpeg"
                },
                {
                    title: '背景4',
                    src: "https://www.zpzpup.com/assets/image/example/bg7.jpeg"
                },
                {
                    title: '背景5',
                    src: "https://www.zpzpup.com/assets/image/example/bg10.jpeg"
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.accordion-container {
    padding: 0;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .accordion-item {
        list-style: none;
        height: 500px;
        transition: width 0.5s;
        background-repeat: no-repeat;
        background-size: 500px;
        background-position: center center;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        &:not(:hover) {
            width: 20%;
        }
        &:hover {
            width: 500px;
            &::after {
                opacity: 1;
            }
        }
        &::after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background-color: rgba(0, 0, 0, 0.4);
            z-index: 1;
            opacity: 0;
            transition: opacity 0.5s;
        }
        .accordion-title {
            color: #fff;
            font-size: 18px;
            z-index: 2;
            text-align: center;
        }
    }
}
</style>
```
