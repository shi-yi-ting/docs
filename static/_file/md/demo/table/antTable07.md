```
<template>
    <div class="itemize-container">
        <div class="itemize-body">
            <div>
                <Button type="primary" class="mr15" @click="add">新增</Button>
                <Popconfirm title="确定删除?" okText="删除" cancelText="取消" @confirm="deleteItem">
                    <Button danger @click.stop>批量删除</Button>
                </Popconfirm>
            </div>
            <div>
                <div class="table-wrap">
                    <Spin :spinning="publicInfo.spinning" tip="Loading...">
                        <Table
                            :loading="table.loading"
                            :data-source="table.list"
                            :columns="table.columns"
                            :bordered="true"
                            size="small"
                            rowKey="id"
                            style="width: 100%; background: border-box;"
                            :rowSelection="{ onChange: onSelectChange }"
                            :pagination="{
                                current: page.pageIndex,
                                pageSize: page.pageSize,
                                total: table.total,
                            }"
                            @change="pageChange"
                        >
                            <template #bodyCell="{ record, text, column, index }">
                                <template v-if="column.dataIndex === 'index'">
                                    <Space>
                                        {{ Number(index) + 1  }}
                                    </Space>
                                </template>

                                <template v-if="column.dataIndex === 'opts'">
                                    <Space>
                                        <span v-if="activeEditIndex === index" style="display: flex; justify-content: space-between;">
                                            <Button size="small" class="mr5" @click.stop="activeEditIndex=undefined">取消</Button>
                                            <Button size="small" @click="addOREditData">保存</Button>
                                        </span>

                                        <!-- <Opinion /> -->
                                        <Button size="small" class="mr5" @click.stop="customRow(record, index)">编辑</Button>
                                        <Popconfirm title="确定删除?" okText="删除" cancelText="取消" @confirm="deleteItem(record)">
                                                <Button size="small" danger @click.stop>删除</Button>
                                            </Popconfirm>
                                    </Space>
                                </template>

                                <template v-else>
                                    <div v-if="activeEditIndex === index">
                                        <!-- 会签专业 -->
                                        <template v-if="column.dataIndex == 'faciliityName'">
                                            <Input v-model:value="record.faciliityName" :allowClear="true" />
                                        </template>

                                        <!-- 会签段 -->
                                        <template v-if="column.dataIndex == 'quotaTypeName'">
                                            <Input v-model:value="record.quotaTypeName" :allowClear="true" />
                                        </template>

                                        <!-- 提供人 -->
                                        <template v-if="column.dataIndex == 'recentNumber'">
                                            <Input v-model:value="record.recentNumber" :allowClear="true" />
                                        </template>

                                        <!-- 提供单位 -->
                                        <template v-if="column.dataIndex == 'forwardNumber'">
                                            <Input v-model:value="record.forwardNumber" :allowClear="true" />
                                        </template>

                                        <!-- 联系方式 -->
                                        <template v-if="column.dataIndex == 'forwardNumber02'">
                                            <Input v-model:value="record.forwardNumber" :allowClear="true" />
                                        </template>

                                        <!-- 会签轮次 -->
                                        <template v-if="column.dataIndex == 'forwardNumber03'">
                                            <Input v-model:value="record.forwardNumber" :allowClear="true" />
                                        </template>

                                        <!-- 会签状态 -->
                                        <template v-if="column.dataIndex == 'forwardNumber04'">
                                            <Input v-model:value="record.forwardNumber" :allowClear="true" />
                                        </template>
                                    </div>

                                    <div v-else class="editable-cell-text-wrapper">
                                        {{ text }}
                                    </div>
                                </template>

                            </template>
                        </Table>
                    </Spin>
                </div>
            </div>
        </div>
    </div>
  </template>

  <script lang="ts" setup>
  import {
      Layout,
      LayoutSider,
      LayoutHeader,
      LayoutContent,
      Button,
      Spin,
      Space,
      Popconfirm,
      Table,
      Input,
      message,
  } from 'ant-design-vue'
  import { ref, reactive, watch, onMounted } from 'vue'

  import type { CSSProperties } from 'vue';

  import { CarryOutOutlined, SmileTwoTone } from '@ant-design/icons-vue';

//   import TreeTabs from './vue/treeTabs.vue'
//   import Opinion from './vue/opinion.vue'


  // TODO
  const publicInfo = reactive({
    spinning: false,
  })

  const isAddSuccess = ref(false)

  // 表格
  function handleTable() {
    // 分页
    const page = reactive({
        pageIndex: 1,
        pageSize: 10,
    })

    const editableRow = ref(null)
    const activeEditIndex = ref(undefined)

    // 表格
    const table = reactive({
        loading: false,
        total: 0,
        list: [],
        selectKeys: [],
        columns: [
            { title: '序号', key: 'index', dataIndex: 'index', align: 'center', width: '10%' },
            { title: '会签专业', key: 'faciliityName', dataIndex: 'faciliityName', align: 'center', width: '10%' },
            // { title: '会签段', key: 'quotaTypeName', dataIndex: 'quotaTypeName', align: 'center', width: '10%' },
            // { title: '提供人', key: 'recentNumber', dataIndex: 'recentNumber', align: 'center', width: '10%' },
            // { title: '提供单位', key: 'forwardNumber', dataIndex: 'forwardNumber', align: 'center', width: '10%' },
            { title: '联系方式', key: 'forwardNumber02', dataIndex: 'forwardNumber02', align: 'center', width: '15%' },
            { title: '会签轮次', key: 'forwardNumber03', dataIndex: 'forwardNumber03', align: 'center', width: '15%' },
            { title: '会签状态', key: 'forwardNumber04', dataIndex: 'forwardNumber04', align: 'center', width: '15%' },
            { title: '操作', dataIndex: 'opts', align: 'center', key: 'opts', width: '15%' },
        ],
    })


    // 获取表格数据
    const getTableList = () => {
        try {
            // const params = {
            //     PageIndex: page.pageIndex,
            //     PageSize: page.pageSize,
            //     // xxx
            // }

            table.loading = true
            table.total = 0
            table.list = []

            // const resp = await getTableListApi(params)
            // console.log(resp.data)
            // table.total = resp.data?.total
            // table.list = resp.data.map((item) => {
            //     return {
            //         id: item.id,
            //         stationName: item.stationName,
            //     }
            // })

            table.list = [
                {
                    id: '1',
                    maxOnDuty: 'maxOnDuty',
                    projectId: 'projectId',
                    dataId: '123, 345',
                    faciliityId: 'faciliityId',
                    faciliityName: 'faciliityName',
                    quotaType: 'quotaType',
                    quotaTypeName: 'quotaTypeName',
                    recentNumber: 'recentNumber',
                    forwardNumber: 'forwardNumber',
                },

                {
                    id: '2',
                    maxOnDuty: 'maxOnDuty02',
                    projectId: 'projectId02',
                    dataId: '123, 345',
                    faciliityId: 'faciliityId',
                    faciliityName: 'faciliityName',
                    quotaType: 'quotaType',
                    quotaTypeName: 'quotaTypeName',
                    recentNumber: 'recentNumber',
                    forwardNumber: 'forwardNumber',
                },
            ]

            table.loading = false
        } catch (err) {
            console.error(err)
        }
    }

    const onSelectChange = (selectKeys) => {
        table.selectKeys = selectKeys
    }

    const pageChange = (data) => {
        page.pageIndex = data.current
        page.pageSize = data.pageSize
        getTableList()
    }

    const resetData = () => {
          isAddSuccess.value = false
   }

    const deleteItem = (record) => {
      console.log('record', record)
      try {
          const params = {
              id: record.id
          }

          if (!params.id) {
              table.list.pop()
              resetData()
              return false
          }

          // const resp = await deleteFaciLtysetupByIdApi(params)
          // if (resp.success) {
          //     message.success('删除成功')
          //     // 重新请求数据 (分页与检索条件不变)
          //     getTableList()
          // } else {
          //     message.error(resp.msg)
          // }
          table.list.pop()
          resetData()
      } catch(err) {
          console.log("err ", err);
          resetData()
      }

        // try {
        //     const resp = await deleteItemApi(id)
        //     if (resp.success) {
        //         message.success('删除成功')
        //         getTableList() // 重新请求数据 (分页与检索条件不变)
        //     } else {
        //         message.error(resp.msg)
        //     }
        // } catch (err) {
        //     console.log(err)
        // }
    }

      const customRow = (record, index) => {
          editableRow.value = null
          activeEditIndex.value = index

          editableRow.value = record

          editableRow.value.id = record.id
          editableRow.value.affiliatedhub = record.affiliatedhub // 枢纽/地区
          editableRow.value.faciliityName = record.faciliityName // 设施名称
    }

    const addData = () => {//新增定员
          const newData = {
              affiliatedhub: '', // 枢纽/地区
              station: '',
              faciliityName: '', // 设施名称
              facilityTypeName: '', // 设施类型
              recentLineNumber: '', // 检查库线近期规模
              forwardLineNumber: '', // 检查库线远期规模
              parkingRecentLineNumber: '', // 存车线近期规模
              parkingForwardLineNumber: '', // 存车线远期规模
              railwayBureauName: '', // 路局
              facilityConstructionStatusName: '', // 设施建设状态
              constructionAttributesName: '', // 建设属性
          }

          table.list.push(newData)
    }

    const addOREditData = async () => {
          alert('准备保存')

          // try {
          //     const params = {
          //         "id": editableRow.value.id,
          //         "projectId": projectObj?.id, // 项目id
          //         "affiliatedhub": editableRow.value.affiliatedhub, // 枢纽/地区
          //         "faciliityName": editableRow.value.faciliityName, // 设施名称
          //         "facilityType": Number(editableRow.value.facilityType), // 设施类型
          //         "recentAssigned": 0,
          //         "recentApply": 0,
          //         "forwardAssigned": 0,
          //         "forwardApply": 0,
          //         "city": 0,
          //         "railwayBureau": Number(editableRow.value.railwayBureau), // 路局
          //         "facilityConstructionStatus": Number(editableRow.value.facilityConstructionStatus), // 设施建设状态
          //         "constructionAttributes": Number(editableRow.value.constructionAttributes), // 建设属性
          //         "yearBuilt": 0,
          //         "connectingStation": "",
          //         // "lineName": Number(editableRow.lineName),
          //         // "lineNameStr": "string",
          //         "recentLineNumber": Number(editableRow.value.recentLineNumber) || 0, // 检查库线近期规模
          //         "forwardLineNumber": Number(editableRow.value.forwardLineNumber) || 0, // 检查库线远期规模
          //         "numberOfCColumns": 0,
          //         "constructionPeriod": 0,

          //         // "parkingLineName": 0, // 存车线库线名称(id)
          //         // "parkingLineNameStr": "string", // 存车线库线名称
          //         "parkingRecentLineNumber": Number(editableRow.value.parkingRecentLineNumber) || 0, // 存车线近期线路数里
          //         "parkingForwardLineNumber": Number(editableRow.value.parkingForwardLineNumber) || 0, // 存车线远期线路数里
          //         "parkingNumberOfCColumns": 0, // 存车线列《台)位数
          //         "parkingConstructionPeriod": 0, // 存车线建设时期
          //         "station": editableRow.value.station // 车站
          //     }


          //     if (!params.affiliatedhub || !params.station || !params.faciliityName || !params.facilityType || !params.railwayBureau || !params.constructionAttributes) {
          //         message.warning('你有编辑内容未填写')
          //         return false
          //     }

          //     // if (!params.affiliatedhub || !params.station || !params.faciliityName || !params.facilityType || !params.railwayBureau || !params.facilityConstructionStatus || !params.constructionAttributes) {
          //     //     message.warning('你有编辑内容未填写')
          //     //     return false
          //     // }

          //     const resp = await addOREditFaciLtysetupApi(params)

          //     if (resp.data) {
          //         message.success('保存成功')
          //         activeEditIndex.value = undefined
          //         getTableList()
          //     } else {
          //         message.success('保存失败')
          //     }

          //     resetData()

          // } catch(err) {
          //     console.log("err ", err);
          //     resetData()
          // }
    }

    onMounted(() => {
        getTableList()
    })

    return { page, table, activeEditIndex, editableRow, onSelectChange, pageChange, deleteItem, customRow, addData, addOREditData }
  }
  const { page, table, activeEditIndex, editableRow, onSelectChange, pageChange, deleteItem, customRow, addData, addOREditData } = handleTable()


  const add = () => {
      activeEditIndex.value = table.list.length
      isAddSuccess.value = true
  }

  watch(() => isAddSuccess.value, () => {
      if (isAddSuccess.value) {
          addData()
      }
  })

  // function handleAddRow() {
  //     const add = () => {
  //         activeEditIndex.value = table.list.length
  //         isAddSuccess.value = true
  //     }

  //     watch(() => isAddSuccess.value, () => {
  //         if (isAddSuccess.value) {
  //             addData()
  //         }
  //     })

  //     return { add }
  // }
  // const { add } = handleAddRow()
  </script>

  <style lang="scss" scoped>
  .itemize-container {
    margin-top: 15px;
    height: 100%;
    width: 100%;

    .itemize-body {
        height: 100%;
        background-color: #fff;
        // padding: 15px;
        min-height: calc(100vh - 94px);
        overflow-y: scroll;

        .layout-wrap {
            height: 100%;

            .sider-wrap {
                border-right: 1px solid #d7d0d0;
            }

            .table-wrap {
                padding: 0 20px;
            }
        }
    }
  }
  </style>


```
