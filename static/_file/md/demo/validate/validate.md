```
<template>
    <div style="padding-bottom: 40px;">
        <div class="container">
            <div class="form">
                <div class="title">集群告警参数配置</div>

                <Form ref="form" :model="formInfo" :rules="formRules" labelWidth="140px" style="width:500px">
                    <FormItem label="选择集群">
                        <Select v-model="cid" placeholder="请选择活动区域" style="width:100%" @change="selectChange($event)">
                            <SelectOption v-for="(item, index) of configList" :key="index" ref="option" :label="item.label" :value="item.value">{{ item.label }}</SelectOption>
                        </Select>
                    </FormItem>

                    <FormItem label="CPU使用率" prop="cpu">
                        <Input v-model="formInfo.cpu" maxlength="3" showWordLimit></Input>
                    </FormItem>

                    <FormItem label="分区(Part)阈值" prop="part">
                        <Input v-model="formInfo.part" maxlength="9" showWordLimit></Input>
                    </FormItem>

                    <FormItem>
                        <Button type="primary" @click="saveInfo">确定</Button>
                    </FormItem>
                </Form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

import { Form, FormItem, Table, Popconfirm, Button, Select, SelectOption, Input, Tree, InputSearch, message } from 'ant-design-vue'

// TODO
const checkInputOne = (rule, value, cb) => {
    const regInputOne = new RegExp('^(\\d|[1-9]\\d|100)$')
    if (regInputOne.test(value)) {
        return cb()
    }
    cb(new Error('请输入0-100之间的整数'))

    return false
}
const checkInputTwo = (rule, value, cb) => {
    if (/^(0|[1-9]\d{0,7}|10{8})$/.test(value.toString().trim())) {
        return cb()
    }
    cb(new Error('请输入0-100000000之间的整数'))

    return false
}

const cid = ref<string>('')
const configList = ref<any>([
    {
        label: '选项01',
        value: '1'
    },

    {
        label: '选项02',
        value: '2'
    }
])

const formInfo = reactive({
    cpu: '',
    part: '',
})

const formRules = reactive({
    cpu: [
        { required: true, message: '', trigger: 'blur' },
        { validator: checkInputOne, trigger: 'blur' },
    ],

    part: [
        { required: true, message: '', trigger: 'blur' },
        { validator: checkInputTwo, trigger: 'blur' },
    ],
})

const selectChange = (event) => {
    console.log('event', event)
}
</script>


<style scoped>
.container {
    background: #fff;
    padding: 20px;
}
.container .title {
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    color: #000;
    font-weight: bold;
    margin-bottom: 20px;
}
</style>

```
