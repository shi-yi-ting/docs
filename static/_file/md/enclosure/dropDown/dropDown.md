## 使用

### 组件

```
<template>
    <div style="margin-top: 15px;">
        <span>
            <label class="item-label required">选择工厂 :</label>
            <DropDown v-model="q.factoryId" :options="options.factoryOptions" style="width: 160px; margin-right: 20px;" />
        </span>

        <span>共有6个产品</span>
    </div>
</template>

<script>
import { defineComponent, reactive, onMounted } from 'vue'
import factoryOptions from './_js/factoryOptions.js' // 模拟数据

import DropDown from './vue/dropDown.vue'
import DropDownM from './vue/dropDownM.vue'

export default defineComponent({
    components: {
        DropDown,
        DropDownM,
    },

    setup() {
        const options = reactive({
            factoryOptions: [],

            modelList: [
                { label: 'MRX-AL09', value: 'MRX-AL09' },
                { label: 'HEGE-550', value: 'HEGE-550' },
                { label: 'H1EGE-550', value: 'H1EGE-550' },
                { label: 'H7EGE4-550', value: 'H7EGE4-550' },
            ],
        })
        const q = reactive({
            factoryId: '',
            deviceModel: [],
        })
        const getFactoryOptions = () => { // 获取工厂下拉框选项
            options.factoryOptions = factoryOptions.map((item) => { // 模拟数据,正式情况是没有的
                return {
                    value: item.factory_id,
                    label: item.factory_name,
                }
            })


            // 调接口获取下拉框选项数据
            // $this.$loading.show()
            // let resp = await axios({
            //     method: 'post',
            //     url: '/commonBaseService/getCommonServiceData',
            //     data: {
            //         worker: 'factoryServiceImpl',
            //         workerType: 'searchAllFactory',
            //     },
            // })
            // $this.$loading.hide()
            // if (resp.data.dataFlag && resp.data.data) {
            //     options.factoryOptions = resp.data.data.map((item) => {
            //         return {
            //             value: item.factory_id,
            //             label: item.factory_name,
            //         }
            //     })
            // }

            q.factoryId = options.factoryOptions[0].value
        }

        onMounted(() => {
            getFactoryOptions()
        })


        return {
            options,
            q,

            getFactoryOptions,
        }
    },
})
</script>

<style lang="less" scoped>
.dropDownM {
    width: 260px;
    margin-right: 20px;
    /deep/.options {
        padding-bottom: 20px;
    }
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

### factoryOptions模拟数据

```
let factoryOptions = [
    {
        factory_id: '-1',
        factory_name: '全选',
    },
    {
        access_ip: '',
        create_time: '2021-04-01 06:40:58',
        create_user: '84',
        factory_address: '武汉市未来科技城',
        factory_desc: '武汉市',
        factory_id: '44',
        factory_name: '武汉A厂',
        update_time: '2021-04-01 14:40:58',
        update_user: '135',
    },
    {
        access_ip: '',
        create_time: '2021-04-08 15:30:59',
        create_user: '104',
        factory_address: '武汉',
        factory_desc: '012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678911',
        factory_id: '48',
        factory_name: '湖北A厂',
        update_time: '2021-04-08 15:30:59',
        update_user: '180',
    },
    {
        access_ip: '',
        create_time: '2021-04-27 11:43:49',
        create_user: '141',
        factory_address: '广州A厂',
        factory_desc: '广州A厂',
        factory_id: '63',
        factory_name: '广州A厂',
        update_time: '2021-04-27 11:43:49',
        update_user: '141',
    },
    {
        access_ip: '',
        create_time: '2021-05-13 10:20:49',
        create_user: '151',
        factory_address: '武汉',
        factory_desc: '业务测试专用',
        factory_id: '64',
        factory_name: '业务A厂',
        update_time: '2021-05-13 10:20:49',
        update_user: '',
    },
]

export default factoryOptions

```

## dropDown封装组件

```
<template>
    <span ref="dropDown" v-clickOutside="hideOpen" class="dropDown" :style="{ height: `${height}px` }">
        <span :class="['bottom', { disabled, canNotOpen, open: isOpen }]" @click="clickShowText">
            <slot name="default"><span v-tippy="{ placement: 'top', content: showTip ? (showText.length > 300 ? showText.slice(0, 300) + '...' : showText) : '' }" :class="['text', { empty: selectOption.value === '' }]" :style="{ lineHeight: `${height - 2 - 12}px` }">{{ showText }}</span></slot>
        </span>
        <div v-if="isOpen" :style="optionsStyle" class="options">
            <div v-if="search" class="search-wp">
                <inputText v-model="searchKey" search />
            </div>
            <!-- <div v-if="search" v-show="searchData.searchEmpty" class="searchEmpty">{{ $t('无选项匹配') }} "{{ searchKey }}"</div> -->
            <div v-if="search" v-show="searchData.searchEmpty" class="searchEmpty">无选项匹配 "{{ searchKey }}"</div>
            <div ref="optionList" v-tippy="tippyConfig" class="optionList" :class="{ showTippy }">
                <ul style="float: left; min-width: 100%;">
                    <li v-for="(option, index) in allOptionList" v-show="!searchData.hideList[index]" :key="option.value" :class="['option', { selected: option.value === selectOption.value }]" @click="clickOption(option.value)" @mouseover="setTippyConfig($event, index, option.label)">
                        <span>{{ option.label }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </span>
</template>

<script>
import is from 'is_js'
import jQuery  from 'jquery'
import { formatOptions } from './utils'

import inputText from './inputText/inputText.vue'

export default {
    name: 'DropDown',
    components: {
        inputText,
    },
    props: {
        height: {
            type: Number,
            default: 32,
        },
        dropWidth: {
            type: Number,
            default: undefined,
        },
        value: {
            type: [String, Number, Array],
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        notEmpty: {
            type: Boolean,
            default: false,
        },
        dependShow: {
            type: Boolean,
            default: false,
        },
        dependText: {
            type: String,
            default: '',
        },
        loading: {
            type: Boolean,
            default: false,
        },
        zeroOptionAdd: {
            type: Boolean,
            default: false,
        },
        zeroOptionText: {
            type: String,
            // default: $t('请选择'),
            default: '请选择',
        },
        emptyValueText: {
            type: String,
            // default: $t('请选择'),
            default: '请选择',
        },
        options: {
            type: [Array, Object],
            default: () => {
                return []
            },
        },
        optionsEmptyText: {
            type: String,
        },
        search: {
            type: Boolean,
            default: false,
        },
        defaultSearchKey: {
            type: String,
            default: '',
        },
        showTip: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isOpen: false,
            searchKey: this.defaultSearchKey,

            showTippy: false,
            tippyConfig: undefined,
        }
    },
    computed: {
        optionsStyle() {
            const style = {}

            style.top = `${this.height - 1}px`

            if (this.dropWidth) {
                style.width = `${this.dropWidth}px`
                // document.body.scrollWidth 页面总宽度
                // .getBoundingClientRect().right 元素右边到可见区域左边的距离
                // window.pageXOffset 页面水平滚动条滚动距离
                const rightWidth = document.body.scrollWidth - (this.$refs.dropDown.getBoundingClientRect().right + window.pageXOffset)
                if (rightWidth < this.dropWidth) {
                    style.right = '0px'
                } else {
                    style.left = '0px'
                }
            }

            return style
        },

        selectMode() {
            if (this.dependShow || this.loading) {
                return false
            } else {
                return true
            }
        },
        allOptionList() {
            let format = formatOptions(this.options)
            if (format.length === 0 && this.optionsEmptyText) {
                format = []
            } else if (this.zeroOptionAdd) {
                format.unshift({
                    value: '',
                    label: this.zeroOptionText,
                })
            }
            return format
        },
        selectOption() {
            let value,
                label

            let parentVal
            if (is.array(this.value)) {
                parentVal = this.value.length > 0 ? this.value[0] : ''
            } else if (is.string(this.value) || is.number(this.value)) {
                parentVal = this.value
            }
            for (const option of this.allOptionList) {
                if (parentVal === option.value) {
                    value = option.value
                    label = option.label
                    break
                }
            }
            if (value === undefined) {
                if (this.notEmpty && this.allOptionList.length > 0) {
                    value = this.allOptionList[0].value
                    label = this.allOptionList[0].label
                } else {
                    value = ''
                    label = (this.allOptionList.find((option) => (option.value === '')) || { label: this.emptyValueText }).label
                }
            }

            return {
                time: new Date().getTime(),
                value,
                label,
            }
        },
        searchData() {
            let hideList = [],
                searchEmpty = false

            if (this.search && this.searchKey) {
                searchEmpty = true

                for (const option of this.allOptionList) {
                    const searchKeys = this.searchKey.toLowerCase().split(';').filter((key) => (!!key))
                    if (searchKeys.some((key) => (option.label.toLowerCase().includes(key)))) {
                        hideList.push(false)
                        searchEmpty = false
                    } else {
                        hideList.push(true)
                    }
                }
            }

            return {
                hideList,
                searchEmpty,
            }
        },
        showText() {
            if (this.dependShow) {
                return this.dependText
            } else if (this.loading) {
                // return $t('正在加载, 请稍后')
                return '正在加载, 请稍后'
            } else {
                if (this.allOptionList.length === 0 && this.optionsEmptyText) {
                    return this.optionsEmptyText
                }

                return this.selectOption.label || ''
            }
        },
        canNotOpen() {
            return this.disabled || !this.selectMode
        },
    },
    watch: {
        selectMode() {
            if (!this.selectMode) {
                this.emitValue('')
            }
        },
        'selectOption.time': {
            handler: function () {
                const val = this.selectOption.value
                this.emitValue(val)
            },
            immediate: true,
        },

        disabled() {
            this.isOpen = false
        },
        isOpen() {
            this.searchKey = ''
        },
    },
    methods: {
        setTippyConfig(event, index, label) {
            const $taeget = jQuery(event.target),
                $optionList = jQuery(this.$refs.optionList)

            let spanWidth = $taeget.find('span').width()
            if (spanWidth === undefined) {
                spanWidth = $taeget.width()
            }

            this.showTippy = spanWidth > $optionList.width() - 10 - 10

            const offsetX = index * 32 + 2 - $optionList.scrollTop()
            this.tippyConfig = {
                content: label,
                theme: 'light',
                arrow: false,
                animateFill: false,
                placement: 'right-start',
                offset: `${offsetX}, 0`,
                boundary: 'viewport',
                appendTo: this.$refs.optionList,
            }
        },

        clickOption(val) {
            this.isOpen = false
            this.emitValue(val)
        },

        clickShowText() {
            if (!this.canNotOpen) {
                this.isOpen = !this.isOpen
            }
        },
        emitValue(val) {
            if (this.value !== val) {
                this.$emit('input', val)
            }
        },

        hideOpen() {
            this.isOpen = false
        },
    },
    mounted() {
    },
    beforeDestroy() {
    },
}
</script>

<style scoped>
/* dropDown */
.dropDown {
    display: inline-block;
    position: relative;
    width: 180px;
    vertical-align: middle;
    background-color: white;
    text-align: left;
}

/* bottom */
.bottom {
    display: inline-block;
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid #cccccc;
    cursor: pointer;
    user-select: none;
}
.bottom::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 10px;
    margin-top: -2px;
    border-top: 6px dashed #829baf;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
}
.bottom:hover,
.bottom.open {
    border-color: #0097dd;
    z-index: 9;
}
.bottom.disabled {
    color: #777;
    background-color: #f3f3f3;
    cursor: default;
}
.bottom.canNotOpen {
    cursor: default;
}
.bottom.disabled:hover,
.bottom.canNotOpen:hover {
    border-color: #cccccc;
}
.bottom .text {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 6px 24px 6px 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.bottom .text.empty {
    color: #999999;
}

/* options */
.options {
    position: absolute;
    width: 100%;
    border: 1px solid #0097dd;
    background-color: white;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.175);
    z-index: 999;
}
/* search */
.search-wp {
    display: block;
    margin: 5px 10px;
}
/* optionList */
.options .optionList {
    display: block;
    width: 100%;
    max-height: 320px;
    cursor: pointer;
}
.options .optionList {
    overflow: auto;
}
.options .optionList >>> .tippy-popper {
    display: none;
}
.options .optionList.showTippy >>> .tippy-popper {
    display: block;
}
/* option */
.options .searchEmpty,
.options .option {
    display: block;
    height: 32px;
    padding: 6px 10px;
    line-height: 20px;
    white-space: nowrap;
}
.options .option:nth-child(2n) {
    background-color: white;
}
.options .option:nth-child(2n + 1) {
    background-color: #f5f9fc;
}
.options .option:hover,
.options .option.selected {
    color: #0097dd;
    background-color: #0097dd1a;
}

::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: #bde2f4;
}
::-webkit-scrollbar-thumb:hover {
    background-color: #96d6f5;
}
</style>

```

### utils中的formatOptions工具函数

```

import is from 'is_js'

is.objectBase = (value) => {
    return Object.prototype.toString.call(value) === '[object Object]'
}
is.not.objectBase = (value) => {
    return !window.is.objectBase(value)
}

export function formatOptions(options) {
    let optionList = []

    if (is.array(options)) {
        options.forEach((item) => {
            let option
            if (is.objectBase(item)) {
                option = {
                    value: item.value,
                    label: item.label,
                }
            } else if (is.array(item)) {
                option = {
                    value: item[0],
                    label: item[1],
                }
            } else if (is.string(item)) {
                option = {
                    value: item,
                    label: item,
                }
            }

            if (option) {
                optionList.push(option)
            }
        })
    } else if (is.objectBase(options)) {
        for (let value of Object.keys(options)) {
            let label
            if (is.string(options[value])) {
                label = options[value]
            } else if (is.objectBase(options[value])) {
                label = options[value].label
            }
            if (label) {
                let option = {
                    value,
                    label,
                }

                optionList.push(option)
            }
        }
    }

    return optionList
}

```
