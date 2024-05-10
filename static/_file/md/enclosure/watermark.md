## 使用

```
<template>
    <div>
        <Watermark />
    </div>
</template>

<script  setup>
import { ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue'
import Watermark from '@/views/enclosure/watermark/watermark.vue'

// TODO

</script>
```

## watermark组件封装代码

```
<template>
    <div class="watermark">
        <div v-for="index in 300" :key="index" :style="contentStyle">
            <!-- <img src="http://yuqing.huawei.com/assets/watermark/yuqingLogo.png" class="logo"> -->
            <div class="user">
                <span>{{ userName }}</span>
                <span>{{ userId }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Watermark',
    props: {
        settings: {
            type: Object,
            default: () => {
                return {}
            },
        },
    },
    data() {
        return {
        }
    },
    computed: {
        userName() {
            // return this.$store.state.UserInfo.givenName
            // return this.$store.state.userInfo.givenName || 'shuiyin' // 模拟数据
            return '拾忆' // 模拟数据
        },
        userId() {
            // return this.$store.state.UserInfo.uid
            // return this.$store.state.userInfo.uid || '123456'
            return '1032731503'
        },

        config() {
            return {
                // rows: this.settings.rows || 6, // 水印行数
                // cols: this.settings.cols || 5, // 水印列数
                color: this.settings.color || '#888888', // 水印字体颜色
                fontSize: this.settings.fontSize || '15px', // 水印字体大小
                fontFamily: this.settings.fontFamily || '微软雅黑', // 水印字体
                opacity: this.settings.opacity || 0.12, // 水印透明度
                angle: this.settings.angle || 15, // 水印倾斜度数
            }
        },
        contentStyle() {
            let cof = this.config

            let style = {
                display: 'inline-block',
                width: '320px',
                height: '140px',
                padding: '40px 0',
                color: `${cof.color}`,
                fontSize: `${cof.fontSize}`,
                fontFamily: `${cof.fontFamily}`,
                opacity: `${cof.opacity}`,
                transform: `rotate(-${cof.angle}deg)`,
            }

            return style
        },
    },
    methods: {
    },
}
</script>

<style scoped>
.watermark {
    position: fixed;
    width: inherit;
    height: inherit;
    text-align: center;
    pointer-events: none;
    overflow: hidden;
    z-index: 999999999;
}

.logo {
    display: inline-block;
    width: 45px;
    height: 31px;
    margin: 4px 15px 5px 0;
    vertical-align: middle;
}
.user {
    display: inline-block;
    height: 40px;
    vertical-align: middle;
}
.user > span {
    display: block;
    height: 20px;
    line-height: 20px;
}
</style>

```
