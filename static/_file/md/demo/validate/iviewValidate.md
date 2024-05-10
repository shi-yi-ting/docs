```
<template>
    <div style="padding: 40px;">
        <div>
            <Form ref="ruleBox" :model="formBox" :rules="ruleBox" :labelWidth="140">
                <Form-item label="选取标签类别" required>
                    <Form-item prop="tagsort">
                        <Select v-model="formBox.tagsort" placeholder="请选择一级标签" :disabled="algorithm === 'algorithm' ? true : false" @on-change="changeOne">
                            <Option v-for="item in tagList" :key="item.id" :value="item.id">{{ item.label }}</Option>
                        </Select>
                    </Form-item>
                </Form-item>

                <Form-item label="填写标签名称" required>
                    <Form-item prop="tagName">
                        <Input v-model="formBox.tagName" placeholder="请输入英文名称" maxlength="50" />
                    </Form-item>

                    <Form-item prop="tagNameChina">
                        <Input v-model="formBox.tagNameChina" placeholder="请输入中文名称" maxlength="50" />
                    </Form-item>
                </Form-item>

                <Form-item prop="tagLeader" label="领域owner审批人">
                    <Select v-model="formBox.tagLeader" placeholder="请选择审批人">
                        <VirtualList :size="10" :remain="200">
                            <Option v-for="(item) in leaderList" :key="item.approvew3" :value="item.nodeid" :label="item.approvew3">
                                <span>{{ item.approveuser }}</span>
                                <span style="float:right;color:#ccc">{{ item.approvew3 }}</span>
                            </Option>
                        </VirtualList>
                    </Select>
                </Form-item>

                <Form-item prop="tagMsg" label="标签用途描述">
                    <Input v-model="formBox.tagMsg" type="textarea" :autosize="true" placeholder="请简要描述标签的业务逻辑和特征含义" />
                </Form-item>
            </Form>
        </div>

        <div>
            <Button type="primary" style="margin-right:10px" @click="next">保存</Button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请选择直接主管'))
            } else {
                callback()
            }
        }
        const validatePass2 = async (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入标签英文名称'))
            } else {
                let reg = /^[0-9a-zA-Z_]{1,}$/
                if (!reg.test(value)) {
                    callback(new Error('请输入数字、26个英文字母'))
                } else {
                    await this.getCntByNameen()
                    if (this.nameRepFlag) {
                        callback(new Error('标签名称重复'))
                    }
                    callback()
                }
            }
        }
        // const validatePass3 = (rule, value, callback) => {
        //     if (value === '') {
        //         callback(new Error('请输入标签中文名称'))
        //     } else {
        //         // let reg = /^[\u4E00-\u9FA5]/g
        //         let reg = /[A-Za-z]+/
        //         if (reg.test(value)) {
        //             callback(new Error('请输入标签中文名称'))
        //         } else if (value.indexOf('{') > -1 || value.indexOf('}') > -1) {
        //             callback(new Error('中文名称不能输入{、}'))
        //         } else {
        //             callback()
        //         }
        //     }
        // }
        const validatePass3 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入标签中文名称'))
            } else {
                if (value.indexOf('{') > -1 || value.indexOf('}') > -1) {
                    callback(new Error('中文名称不能输入{、}'))
                } else {
                    callback()
                }
            }
        }

        return {
            tagList: [],
            leaderList: [],
            tagLeader: '',
            nameRepFlag: false, // 名称重复的标识

            algorithm: undefined,

            formBox: {
                tagsort: '',
                tagName: '',
                tagNameChina: '',
                tagLeader: '',
                tagMsg: '',
            },
            ruleBox: {
                tagsort: [
                    { required: true, message: '请选择一级标签', trigger: 'change' },
                ],
                tagName: [
                    { required: true, validator: validatePass2, trigger: 'blur' },
                ],
                tagNameChina: [
                    { required: true, validator: validatePass3, trigger: 'blur' },
                ],
                tagLeader: [
                    { required: true, validator: validatePass, trigger: 'change' },
                ],
                tagMsg: [
                    { required: true, message: '请简要描述标签的业务逻辑和特征含义', trigger: 'blur' },
                ],
            },
        }
    },

    methods: {
        changeOne() {
            console.log('改变了下拉框的值')
        },

        next() {
            this.$refs.ruleBox.validate((valid) => {
                if (valid) {
                    // eslint-disable-next-line no-alert
                    alert('验证通过')
                } else {
                    // eslint-disable-next-line no-alert
                    alert('验证未通过')
                }
            })
        },
    },
}
</script>

<style lang="less" scoped>
// 样式未用只是用于参考less如何进行样式穿透
.tooltip-site {
    width: 100%;
    position: absolute;
    left: -30px;
    top: 5px;
}
.level-form {
    /deep/.ivu-form-item {
        flex: 1;
        /deep/.ivu-form-item-content {
            width: 100%;
        }
    }
}
.leader {
    /deep/.ivu-select-dropdown {
        padding: 0 !important;
    }
}
/deep/.ivu-select-dropdown-list {
    > div {
        max-height: 200px !important;
        height: auto !important;
    }
}
.leader {
    height: 0px;
    float: left;
}
/deep/.leader,
.ivu-select {
    .ivu-select-selection {
        top: -30px;
        opacity: 0;
        // display: none;
    }
}
.my-select {
    /deep/ .ivu-select-dropdown {
        display: none;
    }
}
</style>

```
