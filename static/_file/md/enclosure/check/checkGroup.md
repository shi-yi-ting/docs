## 使用
```
<div class="options">
    <CheckGroup v-model="check.checkList" style=" min-width: 100%;">
        <CheckBox v-for="(option) in check.options" :key="option.value" :value="option.value" :lineHeight="20" class="option">
            <span>{{ option.label }}</span>
        </CheckBox>
    </CheckGroup>
</div>

<script setup>
import { reactive } from 'vue'
import CheckGroup from '@/views/enclosure/check/checkGroup.vue'
import CheckBox from '@/views/enclosure/check/checkBox.vue'

// TODO
const check = reactive({
    options: [
        {
            label: '选项01',
            value: '1',
        },

        {
            label: '选项02',
            value: '2',
        },

        {
            label: '选项03',
            value: '3',
        },
    ],
    checkList: [],
})

</script>

<style lang="less" scoped>
/* options */
.options {
    border: 1px solid #0097dd;
    background-color: white;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.175);
    z-index: 999;

    .option {
        display: block;
        border-width: 6px 10px 6px 10px;
        border-style: solid;
        white-space: nowrap;
    }

    .option:nth-child(2n) {
        border-color: white;
        background-color: white;
    }

    .option:nth-child(2n + 1) {
        border-color: #f5f9fc;
        background-color: #f5f9fc;
    }
}
</style>
```


## checkGroup
```
<template>
    <span class="checkGroup">
        <check2 v-if="button" v-show="showButtonAll" v-model:value="allCheck" button :height="height" @input="clickAll">{{ 全选 }}</check2>
        <!-- <check2 v-if="button" v-show="showButtonAll" :value="allCheck" button :height="height" @input="clickAll">{{ 全选 }}</check2> -->
        <slot />
    </span>
</template>

<script>
import check2 from './check2.vue'

import util from './_js/util.js'

export default {
    name: 'CheckGroup',
    components: {
        check2,
    },
    props: {
        value: {
            type: Array,
        },
        button: {
            type: Boolean,
            default: false,
        },
        showButtonAll: {
            type: Boolean,
            default: true,
        },
        height: {
            type: Number,
            default: 32,
        },
    },
    data() {
        return {
            checkIndexList: [],
            allCheck: false,
        }
    },
    watch: {
        value: {
            immediate: true,
            handler() {
                this.$nextTick(() => {
                    this.setCheckBoxStatus()
                })
            },
        },
    },
    methods: {
        setCheckBoxStatus() {
            this.checkIndexList = []

            for (let i = 0; i < this.$children.length; i++) {
                let children = this.$children[i]
                if (this.button && i === 0) {
                    this.checkIndexList.push(undefined)
                    continue
                }
                children.index = i
                children.button = this.button
                children.height = this.height

                if (this.value.includes(children.value)) {
                    children.isCheck = true
                    this.checkIndexList.push(children.value)
                } else {
                    children.isCheck = false
                    this.checkIndexList.push(undefined)
                }
            }

            this.checkUpdate()
        },
        someClick(index, isCheck, value) {
            this.checkIndexList.splice(index, 1, isCheck ? value : undefined)

            this.checkUpdate()
        },
        getCheckValueList() {
            let checkValueList = []
            for (let value of this.checkIndexList) {
                if (value !== undefined) {
                    checkValueList.push(value)
                }
            }
            return checkValueList
        },
        checkUpdate() {
            let checkValueList = this.getCheckValueList()

            if (!util.equalArray(this.value, checkValueList)) {
                this.$emit('input', checkValueList)
            }

            if (this.button) {
                if (checkValueList.length === (this.$children.length - 1)) {
                    this.allCheck = true
                } else {
                    this.allCheck = false
                }
            }
        },
        clickAll() {
            this.checkIndexList = []
            if (this.allCheck === false) {
                for (let i = 1; i < this.$children.length; i++) {
                    this.checkIndexList.push(this.$children[i].value)
                }
            }
            this.checkUpdate()
        },
    },
    mounted() {
    },
}
</script>

<style scoped>
.checkGroup {
    display: inline-block;
    vertical-align: middle;
}
</style>

```


## checkBox
```
<template>
    <check2 v-model:value="isCheck" :button="button" :left="left" :right="right" :height="height" :lineHeight="lineHeight">
        <slot />
    </check2>
</template>

<script>
import check2 from './check2.vue'

export default {
    name: 'CheckBox',
    components: {
        check2,
    },
    props: {
        value: {
            type: [String, Number, Boolean],
        },
        left: {
            type: Boolean,
            default: true,
        },
        right: {
            type: Boolean,
            default: false,
        },
        lineHeight: {
            type: Number,
            default: undefined,
        },
    },
    data() {
        return {
            button: false,
            height: 32,

            index: undefined,
            isCheck: false,
        }
    },
    watch: {
        isCheck() {
            this.$parent.someClick(this.index, this.isCheck, this.value)
        },
    },
}
</script>

<style scoped>
</style>

```

## CheckGroup封装中使用到 utils

```
/* elint no-shadow: 'off' */

import is from 'is_js'

let util = {
    equalArray(a, b) {
        if (is.not.array(a) || is.not.array(b)) {
            return false
        }
        if (a.length !== b.length) {
            return false
        }
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false
            }
        }
        return true
    },
}

export default util

```

