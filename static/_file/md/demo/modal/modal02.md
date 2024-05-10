```
<template>
    <div>
        <div class="sider-header">
            <div class="operate">
                <Button type="primary" class="mr15 pointer" @click="addModal">新增</Button>
                <Button type="primary" class="mr15 pointer" @click="editModal">编辑</Button>
            </div>
        </div>

        <Modal
            v-model:visible="dialog.visiable"
            :maskClosable="false"
            :title="dialog.title"
            okText="保存"
            cancelText="取消"
            :width="580"
            @ok="save"
        >
            <Form
                ref="formRef"
                :model="inputData"
                :rules="rules"
                :labelCol="{ span: 4 }"
                :wrapperCol="{ span: 20 }"
                autocomplete="off"
            >
                 <FormItem label="工作内容" name="jobContent">
                    <Select v-model:value="q.jobContent" class="width_220">
                        <SelectOption v-for="(item) of options.jobContentList" :key="item.value" :value="item.value">{{ item.label }}</SelectOption>
                    </Select>
                </FormItem>

                <FormItem label="篇名" name="title">
                    <Input v-model:value="inputData.title" />
                </FormItem>
                <FormItem label="章节名" name="chapterName">
                    <Input v-model:value="inputData.chapterName" />
                </FormItem>
            </Form>
        </Modal>
    </div>
</template>

<script lang="ts" setup>
import {
    Modal,
    Form,
    FormItem,
    Input,
    Button,
    Select,
    SelectOption,
    message
} from 'ant-design-vue'
import { ref, reactive, watch, onMounted } from 'vue'

import { showAntConfirm } from './_js/showAntConfig.js'


// TODO
// 添加/编辑弹框
function handleModal() {
    const formRef = ref(null)
    const dialog = reactive({
        visiable: false,
        title: '',
    })

    const inputData = reactive({
        id: '',
        title: '',
        chapterName: '',
    })

    const rules = {
        title: [{ required: true, message: '请填写篇名' }],
        chapterName: [{ required: true, message: '请填写章节名' }],
    }

    // 新增
    const addModal = () => {
        formRef.value?.clearValidate()
        inputData.id = ''
        inputData.title = ''
        inputData.chapterName = ''

        dialog.visiable = true
        dialog.title = '新增'
    }

    // 编辑
    const editModal = (data) => {
        formRef.value?.clearValidate()

        inputData.id = '1'
        inputData.title = '123'
        inputData.chapterName = '武汉'

        dialog.visiable = true
        dialog.title = '编辑'
    }

    // 确定/保存
    const save = async () => {
        try {
            const params = {
                id: inputData.id,
                code: inputData.title,
                proName: inputData.chapterName,
            }

            // 调用接口
            // const resp = await api.updateProjectApi(params)
            // if (resp.success) {
            //     message.success('保存成功')
            //     dialog.visiable = false
            //     // 重新请求数据 (分页与检索条件不变)
            //     // getTableList() // 刷新表格
            //     formRef.value?.clearValidate()
            // }

            dialog.visiable = false
        } catch (error) {
            console.log(error)
            dialog.visiable = false
        }
    }

    return { formRef, dialog, inputData, rules, addModal, editModal, save }
}
const { formRef, dialog, inputData, rules, addModal, editModal, save } = handleModal()

function handleOptions () {
    const options = reactive({
        jobContentList: [],
    })

    const q = reactive({
        jobContent: '',
    })

    const getOptions = async () => {
        try {
            options.jobContentList = [
                {
                    label: '选项01',
                    value: '1'
                },

                {
                    label: '选项02',
                    value: '2'
                },
            ]

            // 调接口
            // const params = {
            //     projectId: publicInfo.projecId,
            //     accessToken: publicInfo.accessToken,
            // }

            // options.jobContentList = []
            // const resp = await getOptionsApi(params)
            // if (resp.success && resp.data && resp.data.length) {
            //     options.jobContentList = resp.data.map((item) => {
            //         return {
            //             label: item.jobContent,
            //             value: item.jobContent
            //         }
            //     })
            // } else {
            //     // message.error('未获取到工作内容下拉选项')
            // }
        } catch(error) {
            console.log('error', error)
        }

    }

    onMounted(() => {
        getOptions()
    })

    return { options, q }
}

const { options, q } = handleOptions()
</script>

<style lang="scss" scoped>
.sider-header {
    display: flex;
    justify-content: space-between;
    padding: 10px 5px;
    color: #000;
    border-bottom: 1px solid #d7d0d0;

    .operate {
        display: flex;
        justify-content: space-between;
    }
}

.mr15 {
    margin-right: 15px;
}
</style>

```
