## 使用

```
<template>
    <button class="Button White" @click="startExport"><i class="export2_blue" />导出</button>
</template>

<script>
import { defineComponent } from 'vue'

import doExport from './_js/exportExcel.js'
export default defineComponent({
    props: {
        pageType: {
            required: true,
            type: String,
        },
        fuzzySearch: {
            type: String,
        },
        total: {
            required: true,
            type: Number,
        },
        ids: {
            required: true,
            type: Array,
            default: () => {
                return []
            },
        },
    },
    setup(props) {
        const startExport = () => {
            doExport('/ssdSpecial/dataExportAction/export.do', {
                apiName: '/ssdController/doExport.do',
                taskType: 'ssdCustomerConfigList',
                exportType: 'ssdCustomerConfig',
                exportFileName: `${props.pageType}客户配置`,
                totalRecord: props.ids.length || props.total,
                id: props.ids.length > 0 ? props.ids.join(',') : undefined,
                customerType: props.pageType,
                fuzzySearch: props.fuzzySearch,
            })
        }
        return {
            startExport,
        }
    },

})
</script>

<style scoped>
i.export2_blue {
    display: inline-block;
    margin: 7px 7px 7px 0;
    width: 16px;
    height: 16px;
    background-image: url(@/assets/images/export2_blue.png);
    vertical-align: top;
}

/* 自定义button样式 */
.Button {
    display: inline-block;
    height: 32px;
    line-height: 30px;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 14px;
    color: white;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    vertical-align: middle;
    outline: none;
    border: 1px solid #418ef8;
    background-color: #418ef8;
}

.Button:hover {
    color: white;
    background-color: #0087dd;
}

.Button.White {
    border-color: #cccccc;
    color: #666666;
    background-color: #ffffff;
}

.Button.White:hover {
    color: #666666;
    background-color: #f0f0f0;
}

.Button.Gray {
    border-color: #bebebe;
    background-color: #bebebe;
    cursor: default;
}

.Button.Orange {
    border-color: #fd9a00;
    background-color: #fd9a00;
}

.Button.Orange:hover {
    background-color: #ed9100;
}
</style>


```

## doExport

```

import axios from 'axios'
import { Modal } from 'ant-design-vue';

let getExportStatus = function (taskId) {
    return new Promise((resolve) => {
        axios({
            method: 'post',
            url: '/ssdSpecial/dataExportAction/exportResult.do',
            data: taskId
            // data: qs.stringify({
            //     taskId,
            // }),
        })
            .then((resp) => {
                resolve(resp.data)
            })
    })
}

let doExport = function (url, params) {
    // 测试弹框
    Modal.info({
        title: '导出失败',
        okText: '关闭',
        content: '<p style="text-align: center;">数据导出失败，请刷新页面后重新操作，或者联系管理员处理</p>',
        scrollable: true,
    })


    // $this.$loading.show()
    axios({
        method: 'post',
        url,
        data: params,
        // data: qs.stringify(params),
    })
        .then(async (resp) => {
            if (resp.data.taskId) {
                while (true) {
                    let exportStatus = await getExportStatus(resp.data.taskId)
                    if (exportStatus.fileStatus === 'Success') {
                        // $this.$loading.hide()
                        Modal.info({
                            title: '文件下载',
                            okText: '关闭',
                            content: `<a download="${exportStatus.fileName}" href="${exportStatus.fullPath}" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; color: #337ab7;">${exportStatus.fileName}</a>`,
                            scrollable: true,
                        })
                        break
                    } else if (exportStatus.fileStatus === 'Fail') {
                        // $this.$loading.hide()
                        Modal.info({
                            title: '导出失败',
                            okText: '关闭',
                            content: '<p style="text-align: center;">数据导出失败，请刷新页面后重新操作，或者联系管理员处理</p>',
                            scrollable: true,
                        })
                        break
                    }

                    // await util.sleep(1000)
                }
            }
        })
}

export default doExport


```
