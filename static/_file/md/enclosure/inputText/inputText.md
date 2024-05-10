## 使用

```
<template>
    <div class="common_container">
        <div class="mt10">
            <MarkDownBox :url="'static/file/md/demo/antDesign/modal/modal.md'">
                <div>
                    <div>
                        <span class="ft20 fw700 mr8">输入框组件</span>
                        <p class="mt10">
                            自封输入框组件，之所以要封装是因为UI组件库的输入框样式不满足开发要求;
                            组件通过vue.component进行注册之后,可直接使用
                        </p>
                    </div>

                    <div class="mt10">
                        <div>
                            <label class="item-label">SR: </label>

                            <!-- enterPromise,输入参数回车调接口 -->
                            <InputText v-model.trim="search.params" :enterPromise="ajaxData" placeholder="请输入" class="inputText" />
                        </div>
                    </div>
                </div>
            </MarkDownBox>
        </div>
    </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

import InputText from './vue/inputText.vue'

export default defineComponent({
    components: {
        InputText,
    },

    setup() {
        const bol = reactive({
            isExpand01: false,
        })

        const content = reactive({
            list01: [
                {
                    title: 'HTML',
                    code: `
                        <div>
                            <label class="item-label">SR: </label>

                            <!-- enterPromise,输入参数回车调接口 -->
                            <InputText v-model.trim="search.params" :enterPromise="ajaxData" placeholder="请输入" class="inputText" />
                        </div>
                    `,
                },

                {
                    title: 'JS',
                    code: `
                        const ajaxData = () => {
                            // 调接口获取数据
                            console.log('调接口获取数据')
                        }
                    `,
                },

                {
                    title: 'CSS',
                    code: `
                        <style scoped>
                        .inputText {
                            width: 220px;
                            margin-right: 20px;
                        }
                        .item-label {
                            display: inline-block;
                            height: 32px;
                            padding-right: 16px;
                            padding-top: 9px;
                            padding-bottom: 9px;
                            font-size: 14px;
                            line-height: 14px;
                            color: #545454;
                            vertical-align: middle;
                        }
                        .required {
                            position: relative;
                        }
                        .required:before {
                            content: "*";
                            display: inline-block;
                            width: 8px;
                            height: 14px;
                            margin-right: 3px;
                            color: red;
                            text-align: center;
                            font-weight: 700;
                        }
                        </style>
                    `,
                },
            ],
        })

        const search = reactive({
            params: '',
        })


        const ajaxData = () => {
            // 调接口获取数据
            console.log('调接口获取数据')

            // product.list = productLlist || [] // 模拟数据,正式情况是没有的

            // $this.$loading.show()
            // let resp = await axios({
            //     method: 'post',
            //     url: '/commonBaseService/getCommonServiceData',
            //     data: {
            //         worker: 'productServiceImpl',
            //         workerType: 'queryProductList',
            //         json: {
            //             factoryId: q.factoryId,
            //             productName: product.searchKey,
            //         },
            //     },
            // })
            // $this.$loading.hide()
            // if (resp.data.dataFlag) {
            //     product.list = resp.data.rows || []
            // }
        }


        return {
            bol,
            content,
            search,

            ajaxData,
        }
    },
})
</script>

<style scoped>
.inputText {
    width: 220px;
    margin-right: 20px;
}
.item-label {
    display: inline-block;
    height: 32px;
    padding-right: 16px;
    padding-top: 9px;
    padding-bottom: 9px;
    font-size: 14px;
    line-height: 14px;
    color: #545454;
    vertical-align: middle;
}
.required {
    position: relative;
}
.required:before {
    content: "*";
    display: inline-block;
    width: 8px;
    height: 14px;
    margin-right: 3px;
    color: red;
    text-align: center;
    font-weight: 700;
}
</style>

```

## inputText组件封装代码

```
<template>
    <span v-if="!textarea" class="inputWp" :style="{ height: `${heightSync}px` }">
        <input ref="input" :style="inputStyle" :placeholder="placeholderText" :disabled="disabled || forbid" class="input" :class="{ noBorder }" @input="emitValue" @blur="blurInput" @keyup.enter="inputEnter" @paste="pasteEmit">
        <div v-if="search || clear" class="button-wp">
            <el-icon v-if="clear && !['', NaN].includes(value)" type="md-close" :size="heightSync - 10" @click="clearClick" />
            <el-icon v-if="search" type="ios-search" :size="heightSync - 10" @click="inputEnter" />
        </div>
    </span>
    <textarea v-else ref="input" :placeholder="placeholderText" :disabled="disabled || forbid" :style="inputStyle" class="textarea" :class="{ noBorder }" @input="emitValue" @blur="blurInput" @paste="pasteEmit" />
</template>

<script>
export default {
    name: 'InputText',
    props: {
        value: {
            type: [String, Number],
            default: '',
        },
        textarea: {
            type: Boolean,
            default: false,
        },
        noLineBreaks: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        search: {
            type: Boolean,
            default: false,
        },
        clear: {
            type: Boolean,
            default: false,
        },
        enterPromise: {
            type: Function,
            default: undefined,
        },
        number: {
            type: [Boolean, String],
            default: false, // true is '>=0'
            validator: (value) => {
                //                    整数  整数  浮点数  浮点数  整数  任意数
                return [true, false, '>=0', '>0', '>=0.', '>0.', '0', '0.'].includes(value)
            },
        },
        placeholder: {
            type: String,
            default: undefined,
        },
        height: {
            type: Number,
        },
        left: {
            type: Boolean,
            default: false,
        },
        center: {
            type: Boolean,
            default: false,
        },
        right: {
            type: Boolean,
            default: false,
        },
        noBorder: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            forbid: false,
        }
    },
    computed: {
        heightSync() {
            if (this.height !== undefined) { return this.height }
            return this.textarea ? 80 : 32
        },
        inputStyle() {
            let style = {}

            if (this.left) {
                style.textAlign = 'left'
            } else if (this.center) {
                style.textAlign = 'center'
            } else if (this.right) {
                style.textAlign = 'right'
            }

            if (!this.textarea) {
                style.height = `${this.heightSync}px`
                style.lineHeight = `${this.heightSync - 2}px`
                if (this.search || this.clear) {
                    let paddingRight = 4
                    if (this.search) {
                        paddingRight += this.heightSync - 10 - 2
                    }
                    if (this.clear) {
                        paddingRight += this.heightSync - 10 - 2
                    }
                    style.paddingRight = `${paddingRight}px`
                }
            } else {
                style.height = `${this.heightSync}px`
            }

            return style
        },

        placeholderText() {
            if (this.placeholder) {
                return this.placeholder
            }
            if (this.search) {
                return `请输入搜索关键字${this.enterPromise ? '后回车' : ''}`
            }
            return ''
        },

        numberConfig() {
            let config = this.number
            if (this.number === true) {
                config = '>=0'
            }
            return config
        },
    },
    watch: {
        value() {
            if (this.number) {
                let curInputText = this.$refs.input.value

                // 0的等值不修改
                if (this.value === 0 && ['0', '-0', '0.', '-0.'].includes(curInputText)) {
                    return
                }

                // 浮动数带点的等值不修改
                if (this.numberConfig.includes('.')) {
                    if (this.value.toString() + '.' === curInputText) {
                        return
                    }
                }
            }

            this.setValueText()
            this.emitValue()
        },
    },
    methods: {
        getFocus() {
            this.$refs.input.focus()
        },
        execEnterPromise() {
            if (this.enterPromise) {
                this.forbid = true

                this.$nextTick(async () => {
                    let needGetFocus = await this.enterPromise()
                    if (needGetFocus === undefined) {
                        needGetFocus = true
                    }

                    this.forbid = false

                    if (needGetFocus) {
                        this.$nextTick(() => {
                            this.getFocus()
                        })
                    }
                })
            }
        },
        pasteEmit(event) {
            this.$emit('paste', event)
        },

        clearClick() {
            this.$refs.input.value = ''
            this.emitValue()
            this.execEnterPromise()
        },
        inputEnter() {
            this.$emit('inputEnter')
            this.execEnterPromise()
        },

        blurInput() {
            this.setValueText()
            this.$nextTick(() => {
                this.$emit('blur')
            })
        },

        setValueText() {
            let text = this.value
            if (this.noLineBreaks) {
                text = text.replace(/\n/g, '')
            }
            if (this.number) {
                if (Number.isNaN(this.value) || this.value === undefined || this.value === null) {
                    text = ''
                } else {
                    text = String(this.value)
                }
            }

            if (this.$refs.input.value !== text) {
                this.$refs.input.value = text
            }
        },

        emitValue() {
            let curInputText = this.$refs.input.value

            let updateValue = curInputText

            if (this.number) {
                let numberText = this.formatNumberText(curInputText)
                if (curInputText !== numberText) {
                    this.$refs.input.value = numberText
                }

                // 输入一半时, 当前值不变
                if (numberText === '0.' || numberText === '-' || numberText === '-0.') {
                    return
                }

                let numberValue
                if (numberText === '') {
                    numberValue = NaN
                } else {
                    if (this.numberConfig.includes('.')) {
                        numberValue = parseFloat(numberText)
                    } else {
                        numberValue = parseInt(numberText, 10)
                    }

                    // 当类型为大于0的浮点数时, 输入0 认为正在输入小于1的小数, 当前值不变
                    if (numberValue === 0 && this.numberConfig === '>0.') {
                        return
                    }

                    if (this.numberConfig.includes('>=0')) {
                        if (Number.isNaN(numberValue) || numberValue < 0) {
                            numberValue = 0
                        }
                    } else if (this.numberConfig.includes('>0')) {
                        if (Number.isNaN(numberValue) || numberValue <= 0) {
                            numberValue = 1
                        }
                    } else {
                        if (Number.isNaN(numberValue)) {
                            numberValue = 0
                        }
                    }
                }

                updateValue = numberValue
            }

            if (updateValue !== this.value) {
                this.$emit('input', updateValue)
            }
        },
        formatNumberText(text) {
            // 删除 非 (数字 - .)
            text = text.replace(/[^\d\-.]/, '')
            // 删除第二个 小数点 及后面
            let valueSplit = text.split('.')
            if (valueSplit.length > 2) {
                text = valueSplit.slice(0, 2).join('.')
            }
            // 删除第二个 - 及后面
            valueSplit = text.split('-')
            if (valueSplit.length > 2) {
                text = valueSplit.slice(0, 2).join('-')
            }
            // 如果 - 不在第一个字符 删除
            if (text.indexOf('-') > 0) {
                text = text.replace('-', '')
            }

            // 不可为小数 删除 .
            if (!this.numberConfig.includes('.')) {
                text = text.replace('.', '')
            }
            // 不可为负数 删除 -
            if (this.numberConfig.includes('>')) {
                text = text.replace('-', '')
            }

            if (text === '.' || text === '-.') {
                text = ''
            }
            return text
        },
    },
    mounted() {
        this.setValueText()
        this.emitValue()
    },
}
</script>

<style scoped>
.inputWp {
    display: inline-block;
    position: relative;
    width: 100%;
    line-height: 0;
    vertical-align: middle;
}

.input {
    width: 100%;
    padding: 0 8px;
    border: 1px solid #d6d6d6;
    font-size: 14px;
    background-color: white;
    outline: none;
}
.inputWp:hover .input,
.inputWp:focus .input {
    border-color: #0097dd;
}

/* button */
.button-wp {
    position: absolute;
    top: 1px;
    right: 3px;
    color: #cccccc;
}
.button-wp > * {
    margin: 4px -1px;
    cursor: pointer;
}
.button-wp > *:hover {
    color: #0097dd;
}

/* textarea */
.textarea {
    width: 100%;
    padding: 6px 8px;
    border: 1px solid #d6d6d6;
    vertical-align: top;
    outline: none;
    resize: none;
}
.textarea:hover,
.textarea:focus {
    border-color: #0097dd;
}

/* disabled */
.input[disabled],
.textarea[disabled] {
    cursor: text;
    background-color: #f0f0f0;
}

.input[disabled],
.inputWp:hover .input[disabled],
.inputWp:focus .input[disabled],
.textarea[disabled],
.textarea[disabled]:hover,
.textarea[disabled]:focus {
    border-color: #d6d6d6;
}

/* noBorder */
.input.noBorder,
.inputWp:hover .input.noBorder,
.inputWp:focus .input.noBorder,
.textarea.noBorder,
.textarea.noBorder:hover,
.textarea.noBorder:focus {
    border-color: transparent;
}
</style>

```
