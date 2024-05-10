## 使用

```
<template>
    <div style="margin-top: 15px;">
        <label class="item-label">型号: </label>
        <DropDownM v-model="q.deviceModel" :options="options.modelList" search action class="dropDownM" />
    </div>
</template>

<script>
import { defineComponent, reactive, onMounted } from 'vue'
import DropDownM from './vue/dropDownM.vue'

export default defineComponent({
    components: {
        DropDownM,
    },

    setup() {
        const options = reactive({
            modelList: [
                { label: 'MRX-AL09', value: 'MRX-AL09' },
                { label: 'HEGE-550', value: 'HEGE-550' },
                { label: 'H1EGE-550', value: 'H1EGE-550' },
                { label: 'H7EGE4-550', value: 'H7EGE4-550' },
            ],
        })
        const q = reactive({
            deviceModel: [],
        })
        const getOptions = () => { // 获取下拉框选项
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

            // q.factoryId = options.factoryOptions[0].value // 设置默认值
        }

        onMounted(() => {
            // getOptions()
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

## dropDownM封装组件

使用的 utils 和 dropDown的封装中使用的一样

```
<template>
    <span ref="dropDown" v-clickOutside="hideOpen" class="dropDown" :style="{ height: `${height}px` }">
        <span :class="['bottom', { disabled, canNotOpen, open: isOpen }]" @click="clickShowText">
            <slot name="default"><span v-tippy="{ placement: 'top', content: showTip ? (showText.length > 300 ? showText.slice(0, 300) + '...' : showText) : '' }" :class="['text', { empty: selectOptions.values.length === 0 }]" :style="{ lineHeight: `${height - 2 - 12}px` }">{{ showText }}</span></slot>
        </span>
        <div v-if="isOpen" :style="optionsStyle" class="options">
            <div v-if="search" class="search-wp">
                <inputText v-model="searchKey" search />
            </div>
            <div v-if="action" class="action-wp">
                <div class="button-wp">
                    <!-- <button class="Button White" @click="clickAll">{{ $t('全选') }}</button> -->
                    <button class="Button White" @click="clickAll">全选</button>
                </div>
                <div class="button-wp">
                    <!-- <button class="Button White" @click="clickCancel">{{ $t('取消') }}</button> -->
                    <button class="Button White" @click="clickCancel">取消</button>
                </div>
            </div>
            <!-- <div v-if="search" v-show="searchData.searchEmpty" class="searchEmpty">{{ $t('无选项匹配') }} "{{ searchKey }}"</div> -->
            <div v-if="search" v-show="searchData.searchEmpty" class="searchEmpty">无选项匹配 "{{ searchKey }}"</div>
            <div ref="optionList" v-tippy="tippyConfig" class="optionList" :class="{ showTippy }">
                <checkGroup v-model="checkGroupOptions" style="float: left; min-width: 100%;">
                    <checkBox v-for="(option, index) in allOptionList" v-show="!searchData.hideList[index]" :key="option.value" :value="option.value" :lineHeight="20" class="option" @mouseover.native="setTippyConfig($event, index, option.label)"><span>{{ option.label }}</span></checkBox>
                </checkGroup>
            </div>
        </div>
    </span>
</template>

<script>
import is from 'is_js'
import jQuery  from 'jquery'
import { formatOptions } from './utils'

import inputText from './inputText/inputText.vue'
import checkGroup from './check/checkGroup.vue'
import checkBox from './check/checkBox.vue'

const equalArray = (a, b) => {
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
}

export default {
    name: 'DropDownM',
    components: {
        inputText,
        checkGroup,
        checkBox,
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
            type: [Array, String],
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
        action: {
            type: Boolean,
            default: false,
        },
        showTip: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isOpen: false,
            checkGroupOptions: [],
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
            return formatOptions(this.options)
        },
        selectOptions() {
            let values = [],
                labels = []

            let parentVal
            if (is.string(this.value)) {
                parentVal = [this.value]
            } else if (is.array(this.value)) {
                parentVal = this.value
            } else {
                parentVal = []
            }
            this.allOptionList.forEach((option) => {
                if (parentVal.includes(option.value)) {
                    values.push(option.value)
                    labels.push(option.label)
                }
            })
            if (values.length === 0) {
                if (this.notEmpty && this.allOptionList.length > 0) {
                    values = [this.allOptionList[0].value]
                    labels = [this.allOptionList[0].label]
                }
            }

            return {
                time: new Date().getTime(),
                values,
                labels,
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

                if (this.selectOptions.labels.length === 0) {
                    return this.emptyValueText
                } else if (this.selectOptions.labels.length === this.allOptionList.length) {
                    // return $t('全选')
                    return '全选'
                } else {
                    return this.selectOptions.labels.join(', ')
                }
            }
        },
        canNotOpen() {
            return this.disabled || !this.selectMode
        },
    },
    watch: {
        selectMode() {
            if (!this.selectMode) {
                this.emitValue([])
            }
        },
        'selectOptions.time': {
            immediate: true,
            handler: function () {
                const val = this.selectOptions.values
                this.checkGroupOptions = val
                this.emitValue(val)
            },
        },
        checkGroupOptions(val, oldVal) {
            if (this.notEmpty) {
                if (val.length === 0) {
                    if (oldVal.length > 0) {
                        this.checkGroupOptions = oldVal
                    }
                    return
                }
            }
            this.emitValue(val)
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

            this.showTippy = spanWidth > ($optionList.width() - 10 - 20 - 6 - 10)

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

        clickAll() {
            const newVal = []
            for (let index = 0; index < this.allOptionList.length; index++) {
                const option = this.allOptionList[index]
                if (this.value.includes(option.value) || !this.searchData.hideList[index]) {
                    newVal.push(option.value)
                }
            }
            this.emitValue(newVal)
        },
        clickCancel() {
            const newVal = lodash.cloneDeep(this.value)
            for (let optionIndex = 0; optionIndex < this.allOptionList.length; optionIndex++) {
                if (this.searchData.hideList[optionIndex]) {
                    continue
                }
                const option = this.allOptionList[optionIndex]
                const valueIndex = newVal.indexOf(option.value)
                if (valueIndex > -1) {
                    newVal.splice(valueIndex, 1)
                }
            }
            this.emitValue(newVal)
        },

        clickShowText() {
            if (!this.canNotOpen) {
                this.isOpen = !this.isOpen
            }
        },
        emitValue(newVal) {
            if (!equalArray(this.value, newVal)) {
                this.$emit('input', newVal)
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
.searchEmpty {
    display: block;
    height: 32px;
    padding: 6px 10px;
    line-height: 20px;
    white-space: nowrap;
}
/* action */
.action-wp {
    text-align: center;
    margin: 5px 10px 0 10px;
    padding-bottom: 4px;
    border-bottom: 1px solid #cccccc;
}
.action-wp .button-wp {
    display: inline-block;
    width: 50%;
}
.action-wp .Button {
    height: 22px;
    margin: auto;
    padding-left: 6px;
    padding-right: 6px;
    line-height: 20px;
    vertical-align: top;
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
.options .option {
    display: block;
    border-style: solid;
    border-width: 6px 10px 6px 10px;
    white-space: nowrap;
}
.options .option:nth-child(2n) {
    background-color: white;
    border-color: white;
}
.options .option:nth-child(2n + 1) {
    background-color: #f5f9fc;
    border-color: #f5f9fc;
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
