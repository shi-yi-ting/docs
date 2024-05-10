```
<template>
    <span>
        <Upload v-bind="uploadConfig" style="display: inline-block;">
            <button class="Button White"><i class="import2_blue" />导入</button>
        </Upload>
        <loadingText :show="showWaitResolveFile" text="文件解析中, 请稍候..." />
    </span>
</template>

<script>
import { defineComponent, reactive, ref } from '@vue/composition-api'

export default defineComponent({
    props: {
        pageType: {
            required: true,
            type: String,
        },
    },
    setup(props, { emit }) {
        const showWaitResolveFile = ref(false)

        const uploadConfig = reactive({
            type: 'select',
            action: '',
            showUploadList: false,
            format: ['xlsx'],
            onFormatError: () => {
                $this.$Message.warning('请选择xlsx文件')
                $this.$loading.hide()
            },

            beforeUpload: () => {
                $this.$loading.show()
            },
            onSuccess: (response) => {
                $this.$loading.hide()
                $this.$Modal.info({
                    title: '导入完成',
                    content: `导入数据总数：${response.data.totalCount}, 成功:${response.data.successCount}条，失败：${response.data.totalCount - response.data.successCount}条。${response.data.failRowNo ? `<br />失败行: ${response.data.failRowNo}。` : ''}`,
                    scrollable: true,
                })
                emit('refreshed')
            },
        })
        return {
            showWaitResolveFile,
            uploadConfig,
        }
    },

})
</script>

<style scoped>
i.import2_blue {
    display: inline-block;
    margin: 7px 7px 7px 0;
    width: 16px;
    height: 16px;
    background-image: url(~@/assets/images/import2_blue.png);
    vertical-align: top;
}
</style>

```
