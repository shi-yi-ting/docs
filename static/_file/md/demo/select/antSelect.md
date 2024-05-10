```
<template>
    <div>
        <Select v-model:value="q.selectValue" style="width: 220px;" @change="handChange">
            <SelectOption v-for="(item) of options.list" :key="item.value" :value="item.value">{{ item.label }}</SelectOption>
        </Select>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { Select, SelectOption, message } from 'ant-design-vue'


// TODO
// 获取下拉框选项
function handleOptions() {
    const options = reactive({
        list: [],
    })

    const q = reactive({
        selectValue: '1',
    })

    const getOptions = async () => {
        try {
            // const params = {
            //     projectId: projectObj?.id,
            // }

            options.list = []

            // const resp = await getFaciLtySelectApi(params)
            // options.list = resp.data.map((item) => {
            //     return {
            //         label: item.value,
            //         value: item.code,
            //     }
            // })


            options.list = [
                {
                    label: '选项01',
                    value: '1',
                },

                {
                    label: '选项02',
                    value: '2',
                },
            ]

            options.list.unshift({
                label: '全部',
                value: 0,
            })
        } catch (err) {
            console.log('err ', err)
        }
    }

    const handleChange = (value) => {
        console.log('value', value)
        // getTableList(value) // 调用接口
    }

    onMounted(() => {
        getOptions()
    })

    return { options, q, handleChange }
}
const { options, q, handleChange } = handleOptions()
</script>

```
