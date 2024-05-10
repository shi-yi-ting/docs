## 表格竖列展示，表头支持点击事件

[antDesign官方文档](https://antdv.com/docs/vue/getting-started-cn)

### HTML

```
<div>
    <a-spin :spinning="publicInfo.spinning" tip="Loading...">
        <a-table
            :loading="table.loading"
            :data-source="table.list"
            :columns="table.columns"
            :bordered="true"
            size="small"
            rowKey="id"
            style="width: 100%;background:border-box;"
            :scroll="{ y: 500 }"
            :pagination="false"
        >
            <template #headerCell="{ column }">
                <div v-for="(item) of table.columns" :key="item.programmeId" class="pointer" @click="clickTabelHeader(item)">
                    <template v-if="column.key === item.key">
                        <div>{{ item.title }}</div>
                    </template>
                </div>

            </template>

            <template #bodyCell="{ record, text, column, index }">
                <template v-if="column.dataIndex === 'index'">
                    <a-space>
                        {{ Number(index) + 1 }}
                    </a-space>
                </template>
            </template>
        </a-table>
    </a-spin>
</div>
```

### JS

```
<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import { message } from 'ant-design-vue'


// TODO
const publicInfo = reactive({
    spinning: false,
})

// 初始化表参数
function defineTable() {
    // TS
    interface TableColumn {
        title: string;
        key: string;
        dataIndex: string;
        align: string;
        width?: string;
        id?: string;
    }
    interface Table {
        loading: boolean;
        total: number;
        list: any[]; // 这里可以替换为具体的类型
        tempList?: any[]; // 缓存用
        preSubmitList?: any[], // 预提数组
        selectKeys: any[]; // 这里可以替换为具体的类型
        columns: TableColumn[];
    }

    // 序号列
    const indexColumn = {
        id: 'index', // 主键ID
        programmeId: 'index', // /方案id
        programme: '序号', // /方案名称
        layoutCharacteristics: '总图布置形式及布置特点', // 总图布置形式及布置特点
        coverAnArea: '占地面积', // 占地面积
        floorSpace: '建筑面积', // 建筑面积
        tracklayinglength: '铺轨长度', // 铺轨长度
        greenArea: '绿化面积', // 绿化面积
        greeningRate: '绿化率', // 绿化率
        buildingDensity: '建筑密度', // 建筑密度
        isRecommendation: '是否推荐方案', // 是否推荐方案
    }

    // 首列
    const firstColumn = {
        id: 'first', // 主键ID
        programmeId: 'first', // /方案id
        programme: '技术指标名称', // /方案名称
        layoutCharacteristics: '总图布置形式及布置特点', // 总图布置形式及布置特点
        coverAnArea: '占地面积', // 占地面积
        floorSpace: '建筑面积', // 建筑面积
        tracklayinglength: '铺轨长度', // 铺轨长度
        greenArea: '绿化面积', // 绿化面积
        greeningRate: '绿化率', // 绿化率
        buildingDensity: '建筑密度', // 建筑密度
        isRecommendation: '是否推荐方案', // 是否推荐方案
    }

    // 尾列
    const lastColumn = {
        id: 'last', // 主键ID
        programmeId: 'last', // /方案id
        programme: '-', // /方案名称
        layoutCharacteristics: '', // 总图布置形式及布置特点
        coverAnArea: '', // 占地面积
        floorSpace: '', // 建筑面积
        tracklayinglength: '', // 铺轨长度
        greenArea: '', // 绿化面积
        greeningRate: '', // 绿化率
        buildingDensity: '', // 建筑密度
        isRecommendation: '', // 是否推荐方案
    }

    // 尾列
    const addColumn = {
        id: 'add', // 主键ID
        programmeId: 'add', // /方案id
        programme: '+', // /方案名称
        layoutCharacteristics: '', // 总图布置形式及布置特点
        coverAnArea: '', // 占地面积
        floorSpace: '', // 建筑面积
        tracklayinglength: '', // 铺轨长度
        greenArea: '', // 绿化面积
        greeningRate: '', // 绿化率
        buildingDensity: '', // 建筑密度
        isRecommendation: '', // 是否推荐方案
    }

    // 表格
    const table: Table = reactive({
        loading: false,
        total: 0,
        list: [],
        preSubmitList: [],
        selectKeys: [],
        columns: [],
    })

    return { table, firstColumn, indexColumn, lastColumn, addColumn }
}
const { table, firstColumn, indexColumn, lastColumn, addColumn } = defineTable()



// 表格处理
function handleTable() {
    // 获取表格数据
    const getTableList = () => {
        try {
            // const params = {
            //     projId: projectObj?.id,
            //     faciliityId: selectValue,
            // }

            // 初始化
            table.loading = true
            table.list = []
            table.preSubmitList = []
            table.columns = []

            // const resp = await getScaleCalculationPerQuotaModelAllApi(params)
            // if (!resp.data.length) {
            //     message.error('未获取当相关内容')
            //     table.loading = false
            //     return false
            // }
            // table.list = resp.data.map((item) => item)

            // 模拟测试数据
            const testData = [
                {
                    id: 479645901656134, // 主键ID
                    programmeId: 479639508996169, // /方案id
                    programme: '方案一', // /方案名称
                    layoutCharacteristics: '总图布置形式及布置特点01', // 总图布置形式及布置特点
                    coverAnArea: '占地面积01', // 占地面积
                    floorSpace: '建筑面积', // 建筑面积
                    tracklayinglength: '铺轨长度', // 铺轨长度
                    greenArea: '绿化面积', // 绿化面积
                    greeningRate: '绿化率', // 绿化率
                    buildingDensity: '建筑密度', // 建筑密度
                    isRecommendation: '是否推荐方案', // 是否推荐方案
                },

                {
                    id: 479949655281735, // 主键ID
                    programmeId: 479949655281735, // /方案id
                    programme: '方案二', // /方案名称
                    layoutCharacteristics: '总图布置形式及布置特点02', // 总图布置形式及布置特点
                    coverAnArea: '占地面积02', // 占地面积
                    floorSpace: '建筑面积', // 建筑面积
                    tracklayinglength: '铺轨长度', // 铺轨长度
                    greenArea: '绿化面积', // 绿化面积
                    greeningRate: '绿化率', // 绿化率
                    buildingDensity: '建筑密度', // 建筑密度
                    isRecommendation: '是否推荐方案', // 是否推荐方案
                },
            ]

            if (testData.length) {
                table.preSubmitList = testData.map((item) => item)

                table.preSubmitList.unshift(firstColumn)
                table.preSubmitList.unshift(indexColumn)
                table.preSubmitList.push(addColumn)
            } else {
                message.warning('未获取到相关内容')
                table.preSubmitList.unshift(lastColumn)
                table.preSubmitList.unshift(firstColumn)
                table.preSubmitList.unshift(indexColumn)

                table.loading = false
            }


            // 表头处理
            table.columns = table.preSubmitList.map((item) => {
                let width = ''
                if (item.programmeId === 'index') {
                    width = '80px'
                }
                return {
                    id: item.id,
                    title: item.programme,
                    key: item.programmeId,
                    dataIndex: item.programmeId,
                    align: 'center',
                    width,
                }
            })

            // 创建表格数据
            for (let i = 1; i < Object.keys(table.preSubmitList[0]).length; i++) {
                const row = {}
                table.columns.forEach((column, index) => {
                    // 控制某些字段不展示
                    if (!['programmeId', 'programme', 'id'].includes(Object.keys(table.preSubmitList[0])[i])) {
                        row[column.dataIndex] = table.preSubmitList[index][Object.keys(table.preSubmitList[0])[i]]
                    }
                })

                // 避免添加空对象
                if (Object.keys(row).length) {
                    table.list.push(row)
                }
            }

            table.loading = false
        } catch (err) {
            console.log('err ', err)
        }
    }

    let i = 3 // 测试用
    // 点击表头处理
    const clickTabelHeader = (item) => {
        if (item.key === 'first' || item.key === 'last') {
            return false
        }

        if (item.key === 'add') {

            // 初始化
            table.list = []
            table.columns = []

            const addData = {
                id: i, // 主键ID
                programmeId: i, // /方案id
                programme: `方案${i}`, // /方案名称
                layoutCharacteristics: `总图布置形式及布置特点${i}`, // 总图布置形式及布置特点
                coverAnArea: '占地面积02', // 占地面积
                floorSpace: '建筑面积', // 建筑面积
                tracklayinglength: '铺轨长度', // 铺轨长度
                greenArea: '绿化面积', // 绿化面积
                greeningRate: '绿化率', // 绿化率
                buildingDensity: '建筑密度', // 建筑密度
                isRecommendation: '是否推荐方案', // 是否推荐方案
            }

            table.preSubmitList.splice(table.preSubmitList.length - 1, 0, addData) // 插入到倒数第二列

            // 表头处理
            table.columns = table.preSubmitList.map((item) => {
                let width = ''
                if (item.programmeId === 'index') {
                    width = '80px'
                }
                return {
                    id: item.id,
                    title: item.programme,
                    key: item.programmeId,
                    dataIndex: item.programmeId,
                    align: 'center',
                    width,
                }
            })

            // 创建表格数据
            for (let i = 1; i < Object.keys(table.preSubmitList[0]).length; i++) {
                const row = {}
                table.columns.forEach((column, index) => {
                    // 控制某些字段不展示
                    if (!['programmeId', 'programme', 'id'].includes(Object.keys(table.preSubmitList[0])[i])) {
                        row[column.dataIndex] = table.preSubmitList[index][Object.keys(table.preSubmitList[0])[i]]
                    }
                })

                // 避免添加空对象
                if (Object.keys(row).length) {
                    table.list.push(row)
                }
            }

            i++ // 递增
        }

        message.success('点击了表头')
    }

    onMounted(() => {
        getTableList()
    })

    return { clickTabelHeader }
}
const { clickTabelHeader } = handleTable()
</script>
```
