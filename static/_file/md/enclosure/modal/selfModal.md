## 使用

```
<template>
    <div>
        <SelfModal :buttonTitle="'按钮标题'" :tip="'弹框提示语'" :onOk="onOk" :onCancel="onCancel" />
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue'

import SelfModal from '@/views/enclosure/modal/selfModal.vue'

// TODO
const onOk = () => {
    console.log('传入的onOK')
}

const onCancel = () => {
    console.log('传入的onCancel')
}

</script>
```


## 封装代码

```
<template>
    <div>
        <button class="Button" @click="showModal">
            <i class="delete2_white" />
             <!-- <Icon type="ios-bug" size="18" /> -->
            {{ buttonTitle }}
        </button>

        <div v-show="model" id="model" class="mask" />

        <dir v-show="model" class="model">
            <div class="text">
                <!-- <Icon type="md-bulb" style="color:#418ef8; font-size:28px;" /> -->
                {{ tip }}
            </div>

            <div style="text-align: center;">
                <button class="Button" style="margin-right:10px;" @click="onOk">确定</button>
                <button class="Button White" @click="onCancel">取消</button>
            </div>
        </dir>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// Props
const props = defineProps({
    buttonTitle: {
        type: String,
        default: '进入调试模式'
    },

    tip: {
        type: String,
        default: '确定已完成任务编排后进入任务调试模式?调试模式下只能修改service属性'
    },

    onOk: {
        type: Function
    },

    onCancel: {
        type: Function
    },
})


// TODO
// 添加/编辑弹框
function handleModal() {
    const model = ref(false)

    const showModal = () => {
        model.value = true
    }

    const onOk = () => {
        props.onOk && props.onOk()
        model.value = false
    }

    const onCancel = () => {
        props.onCancel && props.onCancel()
        model.value = false
    }

    return { model, showModal, onOk, onCancel }
}
const { model, showModal, onOk, onCancel } = handleModal()

</script>

<style lang="scss" scoped>
.model {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 750px;
    height: 150px;
    margin: auto;
    border-radius: 5px;
    background: #353f59;
    z-index: 999;
}
.model .text {
    height: 100px;
    line-height: 100px;
    font-size: 16px;
    color: #fff;
    text-align: center;
}

#model .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 99;
}

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
