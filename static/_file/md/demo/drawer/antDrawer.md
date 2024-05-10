```
<template>
    <div>
        <Button @click="drawerShow = true"><i class="add3_white" />新增</Button>
        <Drawer v-model:visible="drawerShow" v-bind="drawerBind" class="drawer_info">
            <div class="card_content">
                <!-- <span class="close_bottom" @click="onCancel">
                    <Icon type="ios-arrow-forward" size="25" class="absolute_center" style="color: #418ef8;" />
                </span> -->
                <div class="card_body">
                    <div class="control_wrap">
                        <label class="item_label required label_width">厂家名称 :</label>
                        <Input v-model="inputInfo.factory_name" style="width: 80%;" placeholder="请输入厂家全名..." />
                    </div>
                    <div class="control_wrap">
                        <label class="item_label required label_width">厂家描述 :</label>
                        <Input v-model="inputInfo.factory_desc" textarea style="width: 80%; height: 202px;" placeholder="输入简介..." />
                    </div>
                    <div class="control_wrap">
                        <label class="item_label required label_width">工厂地址 :</label>
                        <Input v-model="inputInfo.factory_address" style="width: 80%;" placeholder="请输入..." />
                    </div>
                    <div class="control_wrap">
                        <label class="item_label required label_width ">管理员姓名 :</label>
                        <Input v-model="inputInfo.user_name" style="width: 80%;" placeholder="请输入姓名..." />
                    </div>
                    <div class="control_wrap">
                        <label class="item_label required label_width ">管理员工号 :</label>
                        <Input v-model="inputInfo.account" style="width: 80%;" placeholder="请输入工号..." />
                    </div>
                    <div class="control_wrap">
                        <label class="item_label required label_width ">管理员邮箱 :</label>
                        <Input v-model="inputInfo.email" style="width: 80%;" placeholder="请管理员企业邮箱..." />
                    </div>
                    <div class="control_wrap">
                        <label class="item_label required label_width ">管理员电话 :</label>
                        <Input v-model="inputInfo.phone_number" style="width: 80%;" placeholder="请输入管理员手机号..." />
                    </div>
                    <div class="button_group">
                        <Button style="margin-right: 20px;" @click="onCancel">取消</Button>
                        <Button type="primary" @click="onOk">提交</Button>
                    </div>
                </div>
            </div>
        </Drawer>
    </div>
</template>

<script lang="ts" setup>
import {
    Button,
    Drawer,
    message,
} from 'ant-design-vue'
import { ref, reactive, watch, onMounted } from 'vue'
import type { ColumnType } from 'ant-design-vue/lib/table';

import { checkInput } from './_js/utils.js'

// TODO
const drawerShow = ref(false)
const drawerBind = reactive({
    width: 600,
    mask: false,
})

const initData = (setData) => {
    let newData = {
        factory_name: '',
        factory_desc: '',
        factory_address: '',
        user_name: '',
        account: '',
        email: '',
        phone_number: '',
    }
    if (setData) {
        // lodash.mergeX(setData, newData)
        return undefined
    } else {
        return reactive(newData)
    }
}

const inputInfo = initData(false)

watch(() => drawerShow.value, (newVal) => {
    if (!newVal) {
        initData(inputInfo)
    }
})

// 暂未用到
const ajaxAddfactoryInfo = async () => {
    drawerShow.value = false

    $this.$loading.show()
    let resp = await axios({
        method: 'post',
        url: '/commonBaseService/getCommonServiceData',
        data: {
            worker: 'factoryServiceImpl',
            workerType: 'insertFactorySingle',
            json: {
                name: inputInfo.factory_name,
                desc: inputInfo.factory_desc,
                address: inputInfo.factory_address,
                managerName: inputInfo.user_name,
                manageraccount: inputInfo.account,
                email: inputInfo.email,
                phone: inputInfo.phone_number,
                // user: computed(() => $this.$store.state.UserInfo.uuid),
            },
        },
    })

    $this.$loading.hide()
    if (resp.status === 200 && resp.data && resp.data.dataFlag && resp.data.data) {
        $this.$Message.success('添加成功!')

        emit('refreshed')

    } else {
        $this.$Modal.error({
            title: '错误',
            content: (resp.data.errorMsgJsonArray || []).join(''),
        })
    }
}

// 暂未用到
const detectionUserInfo = async () => { // 检测用户信息
    $this.$loading.show()
    let resp = await axios({
        method: 'post',
        url: '/commonBaseService/getCommonServiceData',
        data: {
            worker: 'userServiceImpl',
            workerType: 'findUSerByEmailOrPhone',
            json: {
                email: inputInfo.email,
                phone: inputInfo.phone_number,
            },
        },
    })
    $this.$loading.hide()
    if (resp.status === 200 && resp.data && resp.data.dataFlag && resp.data.data) {

        let roleType = { // 自定义角色号对应的角色
            '1': 'OS管理员',
            '2': '产品线管理员',
            '3': '厂家管理员',
            '4': '产品管理员',
            '5': '特性管理员',
            '6': '普通用户',
        }
        let promptInfo = ''
        let promptList = []
        let roleTypeList = resp.data.data.role_type.split(',') // 将角色信息(字符串类型)转换为数字数组(如：['3', '4'])

        for (let item of roleTypeList) {
            promptList.push(roleType[item]) // 循环角色数字数组(数字数组)转换为具体角色描述(如：['厂家管理员', '产品管理员'])
        }
        promptInfo = promptList.join('、') // 将角色描述数组转换为字符串(如：'厂家管理员、产品管理员')以顿号隔开

        // if (resp.data.data.role_name === 'osManager') {
        //     promptInfo = '当前用户已是OS管理员，确认是否更改?'
        // } else if (resp.data.data.role_name === 'factoryManager') {
        //     promptInfo = '当前用户已是工厂管理员，确认是否更改?'
        // } else if (resp.data.data.role_name === 'productManager') {
        //     promptInfo = '当前用户已是产品管理员，确认是否更改?'
        // } else if (resp.data.data.role_name === 'featureManager') {
        //     promptInfo = '当前用户已是特性管理员，确认是否更改?'
        // } else if (resp.data.data.role_name === 'productLineManager') {
        //     promptInfo = '当前用户已是产品线管理员，确认是否更改?'
        // } else if (resp.data.data.role_name === 'general') {
        //     promptInfo = '当前用户为普通用户，确认是否更改?'
        // }

        $this.$Modal.confirm({
            title: '提示',
            // content: '确认删除该条数据?',
            content: `用户已是${promptInfo},确认是否更改?`,
            onOk: () => {
                ajaxAddfactoryInfo()
            },
        })
    } else {
        $this.$Message.error('你要配置的人未注册!')
    }
}

const onCancel = () => {
    drawerShow.value = false
}

const onOk = () => {
    let warn = checkInput(inputInfo, {
        factory_name: '请填写厂家名称',
        factory_desc: '请填写厂家描述',
        factory_address: '请填写工仓地址',
        user_name: '请填写管理员姓名',
        account: '请填写工号',
        email: '请输入邮箱',
        phone_number: '请输入联系电话',
    })

    if (warn) {
        message.warning(warn)
        return
    }

    // 正则验证
    if (!(/^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/.test(inputInfo.phone_number))) {
        message.error('手机号输入错误!')
        return
    }
    // detectionUserInfo()
    // ajaxAddfactoryInfo()
}
</script>

<style scoped>
.close_bottom {
    position: fixed;
    width: 25px;
    height: 75px;
    margin-left: -25px;
    top: 50%;
    transform: translate(0, -50%);
    border-radius: 5px 0 0 5px;
    background-color: #ffffff;
    box-shadow: 10px 0 #ffffff, -10px -10px 10px rgba(0, 0, 0, 0.2),
        -10px 10px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
}
.close_bottom::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: -7px;
    left: 0;
    border-style: solid;
    border-width: 0 0 8px 25px;
    border-color: transparent transparent #ffffff transparent;
}
.close_bottom::after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: -7px;
    left: 0;
    border-style: solid;
    border-width: 8px 0 0 25px;
    border-color: #ffffff transparent transparent transparent;
}
i.add3_white {
    display: inline-block;
    margin: 7px 7px 7px 0;
    width: 16px;
    height: 16px;
    background-image: url(@/assets/images/add3_white.png);
    vertical-align: top;
}
.card_content {
    height: calc(100% - 100px);
}
.control_wrap {
    padding: 10px;
}
.label_width {
    text-align: right;
    width: 20%;
}
.button_group {
    margin-top: 20px;
    text-align: center;
}

/* 新增在global.css中 */
.absolute_center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.card_title {
    position: relative;
    width: 100%;
    height: 51px;
    padding-left: 20px;
    padding-right: 20px;
    color: #333;
    line-height: 50px;
    font-weight: normal;
    border-bottom: 1px solid #dddddd;
    vertical-align: middle;
    background-color: white;
}
.card_title_text {
    display: inline-block;
    font-size: 16px;
    vertical-align: top;
}
.card_body {
    position: relative;
    width: 100%;
    background-color: white;
}
.item_label {
    display: inline-block;
    height: 32px;
    padding-right: 16px;
    padding-top: 9px;
    padding-bottom: 9px;
    font-size: 14px;
    line-height: 14px;
    color: #545454;
    vertical-align: middle;
}
.item_label.required {
    position: relative;
}
.item_label.required:before {
    content: "*";
    display: inline-block;
    width: 8px;
    height: 14px;
    margin-right: 3px;
    color: red;
    text-align: center;
    font-weight: 700;
}
</style>

```
