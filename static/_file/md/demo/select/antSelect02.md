```
<template>
    <div>
        <!-- 多选时候如果默认不加这个也是可以搜索的前提是options.list中的label和value要一致 -->
        <!-- 加filterOption之后可指定是按value搜索还是label搜搜 -->
        <Select v-model:value="q.quotaTypeName" mode="multiple" :allowClear="true" :filterOption="options.filterOption" placeholder="Select a person" style="width: 220px;" @change="handleChange">
            <SelectOption v-for="(item) of options.list" :key="item.label" :value="item.label">{{ item.label }}</SelectOption>
        </Select>
    </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import { Select, SelectOption, message } from 'ant-design-vue'


// TODO
// 获取下拉框选项
function handleOptions() {
    const options = reactive({
        list: [],

        filterOption: (input: string, option: any) => {
            // return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0 // 根据value进行搜索
            return option.key.toLowerCase().indexOf(input.toLowerCase()) >= 0 // 将key设置为label,则可以根据label进行搜索
        },
    })

    const q = reactive({
        selectValue: '0',
        quotaTypeName: [],
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
                { value: 'Jack', label: 'Jack' },
                { value: 'Lucy', label: 'Lucy' },
                { value: 'Tom', label: 'Tom' },
            ]

            options.list.unshift({
                label: '全部',
                value: '0',
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
