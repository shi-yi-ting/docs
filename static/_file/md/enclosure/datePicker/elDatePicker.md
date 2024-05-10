## 使用

```
<template>
    <div>
        <label class="item-label">时间段: </label>
        <span class="eleDatePicker">
            <EleDatePicker :type="'datetimerange'" :dateRange="dates.dateRange" class="mr20" style="display: inline-block;" @getDateRange="getDateRange" />
        </span>
    </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import EleDatePicker from './vue/datePicker.vue'

export default defineComponent({
    components: {
        EleDatePicker,
    },

    setup() {
        const time = reactive({
            // timeRange: [dayjs().subtract(6, 'month').format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')],
            timeRange: ['2023-10-01', '2023-10-20'],
            timeDimension: 'day',
            statisticType: 'number',
            statisticDimension: 'device_name',
            statisticItem: [],
        })

        const dates = reactive({
            dateRangeObj: {
                oneDateRage: 24 * 3600 * 1000,
                sixDateRange: 6 * 24 * 3600 * 1000,
                monthGapDateRange: 29 * 24 * 3600 * 1000,
                monthDateRange: 30 * 24 * 3600 * 1000,
                threeGapMonthsRange: 89 * 24 * 3600 * 1000,
                threeMonthsRange: 90 * 24 * 3600 * 1000,
                oneYearRange: 364 * 24 * 3600 * 1000,
            },
            dateRange: [],
        })


        const getDateRange = (range) => { // 时间处理
            let dateRange = [].concat(range)
            console.log('dateRange', dateRange)
        }


        return {
            time,
            dates,

            getDateRange,
        }
    },
})
</script>

<style lang="less" scoped>
.eleDatePicker {
    /deep/.el-input__inner {
        display: inline-block;
        height: 32px;
        line-height: 32px;
        padding: 0 10px;
        border-radius: 0;
    }

    /deep/.el-date-editor {
        height: calc(100% - 1px);
        top: 2px;
    }
    /deep/.el-input__inner:hover {
        border-color: #0097dd;
    }
    /deep/.el-range-editor.is-active {
        border-color: #d6d6d6;
    }

    /deep/input::placeholder {
        color: #999999;
    }
    /deep/.el-icon-time:before {
        color: #999999;
    }
}
</style>

```

## EleDatePicker封装组件

```
<template>
    <div id="date_picker">
        <!-- 有特殊的日期选择范围（例如7天，只能选中你当前选中的第一个日期的前后7天） -->
        <el-date-picker
            v-if="hasDatePicker"
            ref="datePickerRef"
            :key="type"
            v-model="dateRangeArr"
            :type="type"
            :rangeSeparator="'至'"
            :startPlaceholder="'开始日期'"
            :endPlaceholder="'结束日期'"
            :pickerOptions="pickerOptions"
            :valueFormat="valueFormat"
            :defaultTime="defaultTime"
            :defaultValue="timeDefaultShow"
            @input="immediUpdate"
        >
        </el-date-picker>
        <!-- 没有日期选择范围限制 -->
        <!-- <el-date-picker v-else ref="datePickerRef" v-model="dateRangeArr" :type="type" :rangeSeparator="$t('datePicker.to')" :startPlaceholder="$t('datePicker.startPlaceholder')" :endPlaceholder="$t('datePicker.endPlaceholder')" :valueFormat="valueFormat" :defaultTime="defaultTime" @change="immediUpdate"></el-date-picker> -->

        <el-date-picker v-else ref="datePickerRef" v-model="dateRangeArr" :type="type" :rangeSeparator="'至'" :startPlaceholder="'开始日期'" :endPlaceholder="'结束日期'" :valueFormat="valueFormat" :defaultTime="defaultTime" @change="immediUpdate"></el-date-picker>
    </div>
</template>

<script>
import { ElDatePicker } from 'element-plus'
import { dateRangeObj } from './js/constant.js'
export default {
    name: 'DatePicker',

    components: {
        ElDatePicker
    },

    props: {
        dateRange: {
            type: Array,
            default: () => [],
        },
        // 可选的时间间隔，默认7天范围(中间隔6天)
        selectDateRange: {
            type: Number,
            default: dateRangeObj.sixDateRange,
        },
        // 总共的时间范围
        totalDateRange: {
            type: Number,
            default: dateRangeObj.monthDateRange,
        },
        type: {
            type: String,
            default: 'daterange',
        },
        hasDatePicker: {
            type: Boolean,
            default: true,
        },
        // 是否限制总的可选择范围
        isLimitDateRange: {
            type: Boolean,
            default: false,
        },
        defaultTime: {
            type: Array,
            default: () => ['00:00:00', '23:59:59'],
        },
        valueFormat: {
            type: String,
            default: 'yyyy-MM-dd HH:mm:ss',
        },
    },
    data() {
        return {
            dateRangeArr: [],
            maxToolTipWidth: '',
            // 默认30天范围
            timeDefaultShow: new Date((new Date()).getTime() - dateRangeObj.monthDateRange),
            minDate: '',
            maxDate: '',
            pickerOptions: {},
        }
    },
    watch: {
        dateRange(val) {
            this.dateRangeArr = JSON.parse(JSON.stringify(val))
        },
        totalDateRange() {
            this.getPickerData()
        },
        isLimitDateRange() {
            this.getPickerData()
        },
    },
    methods: {
        getPickerData() {
            this.timeDefaultShow = new Date((new Date()).getTime() - this.totalDateRange)
            this.pickerOptions = {
                onPick: ({ maxDate, minDate }) => {
                    this.minDate = minDate
                    this.maxDate = maxDate
                },
                disabledDate: (time) => {
                    if (this.$refs.datePickerRef.picker) {
                        this.minDate = this.$refs.datePickerRef.picker.minDate
                        this.maxDate = this.$refs.datePickerRef.picker.maxDate
                    }
                    const todayStamp = this.getStamp()
                    // 大于今天23:59:59
                    const compareWithNow = time.getTime() > todayStamp
                    // 限制了总共可选择的范围
                    const rangeDisabled = time.getTime() < todayStamp - this.totalDateRange
                    if (this.minDate) {
                        const range = this.selectDateRange
                        let compareWithSum = false
                        let compareWithSub = false
                        if (this.type === 'monthrange') {
                            compareWithSum = time.getTime() > this.minDate.getTime() + range
                            compareWithSub = time.getTime() < this.getMonthStamp(this.minDate) - range
                        } else {
                            // 大于(minDate-1)23:59:59 + 时间段
                            compareWithSum = time.getTime() > this.getStamp(this.minDate) + range
                            // 小于minDate 0:00:00 - 时间段
                            compareWithSub = time.getTime() < this.minDate.getTime() - range
                        }
                        const commonCompare = compareWithNow || compareWithSum || compareWithSub
                        return this.isLimitDateRange ? (commonCompare || rangeDisabled) : commonCompare
                    }
                    return this.isLimitDateRange ? (compareWithNow || rangeDisabled) : compareWithNow
                },
            }
        },
        // 清除组件自带清除按钮的可选范围
        immediUpdate(val) {
            if (val === null) {
                this.minDate = ''
                this.maxDate = ''
            }
            this.$emit('getDateRange', val)
        },

        getStamp(date) {
            const newDate = date ? new Date(date) : new Date()
            return newDate.setHours(0, 0, 0, 0) + dateRangeObj.oneDateRage - 1
        },

        getMonthStamp(date) {
            const newDate = date ? new Date(date) : new Date()
            const month = newDate.getMonth()
            return newDate.setMonth(month + 1) - 1
        },
    },
    mounted() {
        this.dateRangeArr = JSON.parse(JSON.stringify(this.dateRange))
        this.getPickerData()
    },
}
</script>

<style lang="less" scoped>
</style>

```
