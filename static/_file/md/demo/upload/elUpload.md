```
<template>
    <div>
        <div class="content">
            <div style="font-size: 30px; text-align: center; color: #ffff">终端大数据音频检测服务平台</div>
            <div style="margin-top: 20px; margin-bottom: 30px; text-align: center;">
                <el-button slot="trigger" size="large" type="primary" @click="dialogVisible = true">选取文件</el-button>
                <el-button style="margin-left: 10px;" size="large" type="success" @click="downTxt">检测结果下载</el-button>
            </div>

            <div v-for="(files, index1) of defaultFileList" :key="index1">
                <div style="margin-bottom: 40px;">
                    <div style="margin-bottom: 10px; font-size: 16px; color: #fff">name: {{ files.name }}</div>
                    <div>
                        <el-table
                            :data="files.tableData"
                            style="width: 100%; background-color: #2c3447;"
                        >
                            <template v-for="(column, index2) of Object.keys(files.tableData[0])"  :key="index2">
                                <el-table-column
                                    :prop="column"
                                    :label="column"
                                >
                                </el-table-column>
                            </template>
                        </el-table>
                    </div>
                </div>
            </div>

            <el-dialog title="上传文件" v-model="dialogVisible" width="30%">
                <template #default>
                    <div>
                        <label style="display: inline-block; width: 100px; margin-top: 15px; padding-right: 0;">
                            <span>文件</span>
                            <span style="font-size: 12px;">(最大50M)</span>
                        </label>

                        <el-upload ref="uploadFileRef" v-bind="uploaSettings">
                            <p style="height: 32px; line-height: 32px;">点击或拖拽上传文件 (最大50M)</p>
                        </el-upload>
                    </div>
                </template>
                <template #footer>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary"  @click="dialogVisible = false">确 定</el-button>
                    </span>

                    <a ref="downFileRef" target="_blank" rel="noopener noreferrer" style="display: none;" />
                </template>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, reactive, computed, onMounted } from 'vue'
import { ElButton, ElTable, ElTableColumn, ElDialog, ElUpload } from 'element-plus'
import detectionService from './_js/detectionService.js'

export default defineComponent({
    components: {
        ElButton,
        ElTable,
        ElTableColumn,
        ElDialog,
        ElUpload,
    },

    setup() {
        const dialogVisible = ref(false)
        const uploadFileRef = ref(null)
        const downFileRef = ref(null)

        const list = reactive({
            arr: JSON.parse(window.localStorage.getItem('data')),
        })

        const defaultFileList = computed({
            get() {
                console.log('get', JSON.parse(window.localStorage.getItem('data')))

                return detectionService // 模拟数据
                // return JSON.parse(window.localStorage.getItem('data'))
            },
            set(newVal) {
                console.log('set', newVal)
                window.localStorage.setItem('data', JSON.stringify(newVal))
                console.log('保存好了')
            },
        })

        const uploaSettings = reactive({
            action: '/audio_detect/request',
            class: 'uploadDemo',
            multiple: true,
            autoUpload: true,
            showFileList: true,
            fileList: JSON.parse(window.localStorage.getItem('data')) || [],
            drag: true,
            beforeUpload: (file) => {
                console.log('上传之前', file)
                const isJPG = file.type === 'audio/wav'
                const isLt2m = file.size / 1024 / 1024 < 50
                if (!isJPG) {
                    $this.$Message.error('请上传音频 wav 格式文件!')
                    return false
                }
                if (!isLt2m) {
                    $this.$Message.error('上传图片大小不能超过 50MB!')
                    return false
                }
                return {
                    isJPG,
                    isLt2m,
                }

                // for (let item of lodash.cloneDeep(defaultFileList.value)) {
                //     if (item.name === file.name) {
                //         return false
                //     }
                // }
            },

            onSuccess: (response, file) => {
                if (file.status === 'success') {
                    let content = file.response.result.split(',')[1].split('#')
                    content.splice(content.findIndex((item) => (item === 'score:0.0')), 1)
                    content.splice(content.findIndex((item) => (item === 'score:-0.0')), 1)
                    console.log('content', content)

                    let obj = {}
                    let tableData = []
                    for (let item of content) {
                        obj[item.split(':')[0]] = item.split(':')[1]
                    }

                    tableData.push(obj)

                    defaultFileList.value.push({
                        name: file.name,
                        tableData,
                    })
                    console.log('defaultFileList2', defaultFileList.value)
                    window.localStorage.setItem('data', JSON.stringify(defaultFileList.value))
                }
            },
            onRemove: (file) => {
                let index = defaultFileList.value.findIndex((item) => {
                    return item.name === file.name
                })
                defaultFileList.value.splice(index, 1)
                window.localStorage.setItem('data', JSON.stringify(defaultFileList.value))
            },
        })

        const downTxt = () => {
            let blob = new Blob([window.localStorage.getItem('data')], { type: 'text/plain' })
            let aLink = document.createElement('a')
            aLink.href = URL.createObjectURL(blob)
            aLink.setAttribute('download', '检测结果.txt')
            aLink.innerHTML = '下载'
            aLink.click()
            // document.body.appendChild(aLink)
        }

        return {
            dialogVisible,
            uploadFileRef,
            list,
            defaultFileList,
            uploaSettings,
            downFileRef,

            downTxt,
        }
    },
})
</script>

<style scoped>
.content {
    height: 50vh;
    margin-top: 15px;
    padding: 30px 10px 10px 10px;
    background-color: #2c3447;
    overflow: auto;
}
.uploadDemo {
    /* width: calc(100% - 100px); */
}
.content >>> .el-dialog__body {
    border-top: 1px solid #e8eaec;
    border-bottom: 1px solid #e8eaec;
}
.content >>> .el-upload-dragger {
    /* height: 36px; */
}
.loading {
    position: fixed;
    left: 53%;
    right: 0;
    top: 299px;
    bottom: 0;
    z-index: 9999999;
}
.content >>> .el-table th,
.content >>> .el-table tr {
    background-color: #343e58;
}

.content >>> .el-table td,
.content >>> .el-table th.is-leaf {
    border-bottom: 1px solid #67779e;
}

.content >>> .el-table--border::after,
.content >>> .el-table--group::after,
.content >>> .el-table::before {
    background-color: #67779e;
}
.content >>> .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: #343e58;
}
.content >>> .el-table th > .cell,
.content >>> .el-table .cell {
    color: #e2e7ed;
}
</style>

```
