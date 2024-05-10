## 使用

```
<template>
    <div>
        <SecurityCode @connectRoom="connectRoom" />
    </div>
</template>

<script  setup>
import { ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue'
import SecurityCode from '@/views/enclosure/securityCode/securityCode.vue'

// TODO
const connectRoom = (code) => {
    console.log('输入的连接码', code)
}
</script>
```


## securityCode组件封装代码

```
<template>
    <div class="confirm-warpper">
        <input ref="input" v-model="code" type="number" @blur="lose" />
        <div class="box" @click="focus">
            <div v-for="(item,index) in loopDiv" :key="index" class="item" :class="{ active: current === index }" :style="{ height: `${height}px`, width: `${width}px`, border: `${borderStyle}` }">
                {{ code[index] }}<div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        size: {
            type: [String, Number],
            default: 6,
        },
        height: {
            type: Number,
            default: 120,
        },
        width: {
            type: Number,
            default: 80,
        },
        isEmpty: { // 是否清空
            type: Boolean,
            default: false,
        },
        isCodeError: { // 输入错误时框框展示红色
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            code: '',
            current: 0,
            borderStyle: '',
        }
    },
    computed: {
        maxLength() {
            return typeof this.size === 'number' ? this.size : Number(this.size)
        },
        loopDiv() {
            return new Array(this.maxLength)
        },
    },
    watch: {
        code() {
            this.code = this.code.toString().slice(0, this.maxLength)
            this.current = this.code.length
            this.$emit('input', this.code)

            if (this.code.length === 6) {
                this.$emit('connectRoom', this.code)
            }
        },

        isEmpty() {
            if (this.isEmpty) {
                this.code = ''
            }
        },

        isCodeError: {
            handler(newVal) {
                if (newVal) {
                    this.borderStyle = '1px solid #f56c6c'
                } else {
                    this.borderStyle = '1px solid #d8dfe9'
                }
            },
        },
    },
    methods: {
        focus() {
            this.$refs.input.focus()
            let len = this.code.length
            // 如果已经输满，点击则聚焦在最后一个字符
            if (len === this.maxLength) {
                this.current = this.code.length - 1
            } else {
                this.current = this.code.length
            }
        },
        // input失焦触发，等于-1防止出现size符合偶然情况，失焦后又聚焦某一div
        lose() {
            this.current = -1
        },
    },
    mounted() {
        this.focus()
    },
}
</script>
<style scoped>
.confirm-warpper {
    /* position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); */
    display: flex;
    justify-content: center;
    align-items: center;
}

@keyframes cursor {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

input {
    position: absolute;
    transform: scale(0);
}
.box {
    display: flex;
    justify-content: space-between;
    cursor: text;
    /* 此处可以动态化 */
    width: 600px;
}
.item {
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid hsla(0, 0%, 100%, 0.08); */
    border: 1px solid #d8dfe9;
    /* border-radius: 10px; */
    background: rgba(255, 255, 255, 0.8);
    color: #3e424d;
    font-size: 100px;
    position: relative;
}
.item:hover {
    border: 1px solid #418ef7;
}
.item.active {
    border: 1px solid #418ef7;
    box-shadow: inset 0 2px 12px rgba(65, 142, 247, 0.3);
}
.item.active::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
    height: 40px;
    width: 2px;
    background: #3e424d;
    animation: cursor 1s infinite;
}
</style>

```
