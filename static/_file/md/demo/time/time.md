```
<template>
    <div>
        <div class="block">
            <div style="height: 40px; padding: 10px 20px;">
                <span>查询条件</span>
            </div>

            <div style="height: 80px; border-top: 1px solid #d8deea; padding: 0 20px;">
                <div class="clearfix" style="margin-top: 26px;">
                    <div class="selectOne">
                        <Select v-model="value" placeholder="请选择" @change="selectOptionOne">
                            <SelectOption
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            >
                            {{ item.label }}
                            </SelectOption>
                        </Select>
                    </div>
                    <div class="selectTwo">
                        <Select v-model="value1" placeholder="请选择" @change="selectOptionTwo">
                            <SelectOption
                                v-for="item in options1"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            >
                            {{ item.label }}
                            </SelectOption>
                        </Select>
                    </div>
                </div>

                <div style="margin-top: 20px;;">
                    <span style="float: left; margin: 7px 20px 0 0; font-weight: 400; font-size: 16px;">时间区间</span>
                    <div class="dateOne">
                        <DatePicker
                            v-model="value2"
                            type="date"
                            placeholder="选择日期"
                            @change="selectDateOne"
                        >
                        </DatePicker>
                    </div>
                    <div style="float: left; font-weight: 400; margin: 13px 10px;"> - </div>
                    <div class="dateTwo">
                        <DatePicker
                            v-model="value3"
                            type="date"
                            placeholder="选择日期"
                            @change="selectDateTwo"
                        >
                        </DatePicker>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import { Select, SelectOption, Input, message, DatePicker } from 'ant-design-vue'

import option from './_js/options.js'

import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import isBetween from 'dayjs/plugin/isBetween'
import zh_cn from 'dayjs/locale/zh-cn'
dayjs.extend(isoWeek) // isoWeek
dayjs.extend(isBetween) // 是否之间
dayjs.locale({
    ...zh_cn,
    // weekStart: 1
})


export default {
    components: {
        Select,
        SelectOption,
        DatePicker,
    },
    data() {
        return {
            value: option.options[0][0].label,
            value1: option.options[1][1].label,
            value2: dayjs().subtract(1, 'day'),
            value3: dayjs(),
            options: option.options[0],
            options1: option.options[1],
            dateType: 'day',
            startTime: dayjs().format('YYYYMMDD'),
            endTime: dayjs().format('YYYYMMDD'),
        }
    },
    methods: {
        selectOptionOne(val) {
            if (val === '1') {
                this.dateType = 'day'
                this.value2 = dayjs()
                this.$emit('setStartTime', this.startTime)
                this.options1 = option.options[1]
                this.value1 = option.options[1][0].label
            } else if (val === '2') {
                this.dateType = 'week'
                this.startTime = dayjs().subtract(8, 'week').format('YYYYMMDD')
                this.value2 = dayjs().subtract(8, 'week')
                this.$emit('setStartTime', this.startTime)
                this.options1 = option.options[2]
                this.value1 = option.options[2][0].label
            } else if (val === '3') {
                this.dateType = 'month'
                this.startTime = dayjs().subtract(1, 'month').format('YYYYMMDD')
                this.value2 = dayjs().subtract(1, 'month')
                this.$emit('setStartTime', this.startTime)
                this.options1 = option.options[3]
                this.value1 = option.options[3][0].label
            } else {
                this.dateType = 'year'
                this.startTime = dayjs().subtract(1, 'year').format('YYYYMMDD')
                this.value2 = dayjs().subtract(1, 'year')
                this.$emit('setStartTime', this.startTime)
                this.options1 = option.options[4]
                this.value1 = option.options[4][0].label
            }
        },
        selectOptionTwo(val) {
            if (this.dateType === 'day') {
                if (val === '1') {
                    this.startTime = dayjs().subtract(val, 'day').format('YYYYMMDD')
                    this.value2 = dayjs().subtract(val, 'day')
                    this.$emit('setStartTime', this.startTime)
                } else {
                    this.startTime = dayjs().subtract(val, 'day').format('YYYYMMDD')
                    this.value2 = dayjs().subtract(val, 'day')
                    this.$emit('setStartTime', this.startTime)
                }
            } else if (this.dateType === 'week') {
                if (val === '8') {
                    this.startTime = dayjs().subtract(val, 'week').format('YYYYMMDD')
                    this.value2 = dayjs().subtract(val, 'week')
                    this.$emit('setStartTime', this.startTime)
                } else {
                    this.startTime = dayjs().subtract(val, 'week').format('YYYYMMDD')
                    this.value2 = dayjs().subtract(val, 'week')
                    this.$emit('setStartTime', this.startTime)
                }
            } else if (this.dateType === 'month') {
                if (val === '1') {
                    this.startTime = dayjs().subtract(2, 'month').format('YYYYMMDD')
                    this.value2 = dayjs().subtract(val, 'month')
                    this.$emit('setStartTime', this.startTime)
                } else if (val === '3') {
                    this.startTime = dayjs().subtract(val, 'month').format('YYYYMMDD')
                    this.value2 = dayjs().subtract(val, 'month')
                    this.$emit('setStartTime', this.startTime)
                } else {
                    this.startTime = dayjs().subtract(val, 'month').format('YYYYMMDD')
                    this.value2 = dayjs().subtract(val, 'month')
                    this.$emit('setStartTime', this.startTime)
                }
            } else if (this.dateType === 'year') {
                if (val === '1') {
                    this.startTime = dayjs().subtract(val, 'year').format('YYYYMMDD')
                    this.value2 = dayjs().subtract(val, 'year')
                    this.$emit('setStartTime', this.startTime)
                } else {
                    this.startTime = dayjs().subtract(val, 'year').format('YYYYMMDD')
                    this.value2 = dayjs().subtract(val, 'year')
                    this.$emit('setStartTime', this.startTime)
                }
            } else {
                this.value2 = ''
            }
        },
        selectDateOne() {
            this.startTime = dayjs(this.value2).format('YYYYMMDD')
            this.$emit('setStartTime', this.startTime)
            this.value1 = '自定义'
        },
        selectDateTwo() {
            this.endTime = dayjs(this.value3).format('YYYYMMDD')
            this.$emit('setEndTime', this.endTime)
            this.value1 = '自定义'
        },
    },
    mounted() {
    },
}
</script>
<style scoped>
.block {
    margin-bottom: 60px;
    padding-bottom: 20px;
    border-top-width: 0;
    background-color: #fff;
}
.selectOne,
.selectTwo {
    float: left;
}
.selectOne >>> .el-input__inner,
.selectTwo >>> .el-input__inner,
.dateOne >>> .el-input__inner,
.dateTwo >>> .el-input__inner {
    border-radius: 0;
}
.selectOne >>> .el-input {
    width: 42%;
}
.selectTwo >>> .el-input {
    left: -126px;
}
.dateOne,
.dateTwo {
    float: left;
}
</style>

```
