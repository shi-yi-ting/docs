## 使用

```
<template>
    <div>
        <div style="padding-bottom: 40px;">
            <label for="">时间处理只需要时分秒</label>
            <div class="mt15">
                <Button @click="getcurrentTime">获取当前时间的时分秒：</Button>
                <span style="margin-left: 15px;">{{ time.currentTime }}</span>
            </div>

            <div class="mt15">
                <Button @click="getcurrentTime02">获取当前时间的年月日：</Button>
                <span style="margin-left: 15px;">{{ time.currentTime02 }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Spin, Space, Table, Popconfirm, Button, Select, SelectOption, Input, message } from 'ant-design-vue'
import { reactive } from 'vue'

import { formateTime, formateTime02 } from './_js/utils.js'

const time = reactive({
    currentTime: '',
    currentTime02: '',
})

const getcurrentTime = () => {
    time.currentTime = formateTime()
}

const getcurrentTime02 = () => {
    time.currentTime02 = formateTime02()
}
</script>

<style scoped>
.mt15 {
    margin-top: 15px;
}
</style>


```

## formateTime代码

```
// 格式化时间 18:16:16 只要时分秒
export function formateTime(time = +new Date()) {
    const date = new Date(time + 8 * 3600 * 1000) // 增加8小时
    return date.toJSON().substr(0, 19).replace('T', ' ').substr(10, 19)
}

// 格式化时间 年月日
export function formateTime02() {
    const date = new Date()

    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    const formattedDate = `${year}-${month}-${day}`

    return formattedDate
}

// ???
export function dateFormat(fmt, date) {
    let ret
    const opt = {
        'Y+': date.getFullYear().toString(), // 年
        'm+': (date.getMonth() + 1).toString(), // 月
        'd+': date.getDate().toString(), // 日
        'H+': date.getHours().toString(), // 时
        'M+': date.getMinutes().toString(), // 分
        'S+': date.getSeconds().toString(), // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    }
    for (let k in opt) {
        ret = new RegExp('(' + k + ')').exec(fmt)
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')))
        }
    }
    return fmt
}


```
