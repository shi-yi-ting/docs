```
<template>
    <div class="chian-map">
        <div v-if="showEchart" ref="myEchart" :style="{ height: '468px', width: '100%' }"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'

// import { getDictApi } from '@/api/request/mktInfo.js'

export default {
    props: {

    },

    data() {
        return {
            chart: null,
            dataList: [],
            showEchart: true,
        }
    },

    methods: {
        randomValue() {
            return Math.round(Math.random() * 1000)
        },

        chinaConfigure(dataList) {
            this.chart = echarts.init(this.$refs.myEchart)
            window.onresize = this.chart.resize

            let option = {
                // tooltip: {
                //     formatter: function (params, ticket, callback) {
                //         if (!params.value) {
                //             params.value = '-'
                //         }

                //         return (params.seriesName + '<br/>' + params.name + ':' + params.value)
                //     },
                // },

                visualMap: {
                    show: false,
                    min: 0,
                    max: 1500,
                    left: 'left',
                    top: 'bottom',
                    text: ['高', '低'],
                    inRange: {
                        color: ['#e0ffff', '#006edd'],
                    },
                },

                geo: {
                    map: 'china',
                    roam: false, // 缩放和平移
                    zoom: 1.23,
                    label: {
                        normal: {
                            show: true,
                            fontSize: '10',
                            color: 'rgba(0, 0, 0, 0.7)',
                        },
                    },

                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(0, 0, 0, 0.2)',
                        },

                        emphasis: {
                            areaColor: '#f3b329',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            shadowBlur: 20,
                            borderWidth: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        },
                    },
                },

                series: [
                    {
                        name: '信息量',
                        type: 'map',
                        geoIndex: 0,
                        data: dataList,
                    },

                    {
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        symbolSize: 14,

                        itemStyle: {
                            normal: {
                                color: 'rgba(0, 0, 0)',
                            },
                        },
                        data: [
                            {
                                // name: '北京',
                                // value: [116.4, 40],
                            },
                        ],
                    },
                ],
            }

            this.chart.on('click', (params) => {
                // eslint-disable-next-line no-alert
                alert('路由跳转')

                // this.$router.push({
                //     name: 'area',
                //     params: {
                //         id: params.data.id,
                //     },
                // })
            })

            this.chart.setOption(option)
        },

        getDict() {
            // const resp = getDictApi({})

            this.dataList = [
                { name: '南海诸岛', id: '00', value: 0 },
                { name: '北京', id: '01', value: this.randomValue() },
                { name: '天津', id: '02', value: this.randomValue() },
                { name: '河北', id: '03', value: this.randomValue() },
                { name: '山西', id: '04', value: this.randomValue() },
                { name: '内蒙古', id: '05', value: this.randomValue() },
                { name: '辽宁', id: '06', value: this.randomValue() },
                { name: '吉林', id: '07', value: this.randomValue() },
                { name: '黑龙江', id: '08', value: this.randomValue() },
                { name: '上海', id: '09', value: this.randomValue() },
                { name: '江苏', id: '10', value: this.randomValue() },
                { name: '浙江', id: '11', value: this.randomValue() },
                { name: '安徽', id: '12', value: this.randomValue() },
                { name: '福建', id: '13', value: this.randomValue() },
                { name: '江西', id: '14', value: this.randomValue() },
                { name: '山东', id: '15', value: this.randomValue() },
                { name: '河南', id: '16', value: this.randomValue() },
                { name: '湖北', id: '17', value: this.randomValue() },
                { name: '湖南', id: '18', value: this.randomValue() },
                { name: '广东', id: '19', value: this.randomValue() },
                { name: '广西', id: '20', value: this.randomValue() },
                { name: '海南', id: '21', value: this.randomValue() },
                { name: '重庆', id: '22', value: this.randomValue() },
                { name: '四川', id: '23', value: this.randomValue() },
                { name: '贵州', id: '24', value: this.randomValue() },
                { name: '云南', id: '25', value: this.randomValue() },
                { name: '西藏', id: '26', value: this.randomValue() },
                { name: '陕西', id: '27', value: this.randomValue() },
                { name: '甘肃', id: '28', value: this.randomValue() },
                { name: '青海', id: '29', value: this.randomValue() },
                { name: '宁夏', id: '30', value: this.randomValue() },
                { name: '新疆', id: '31', value: this.randomValue() },
                { name: '台湾', id: '32', value: this.randomValue() },
                { name: '香港', id: '33', value: this.randomValue() },
                { name: '澳门', id: '34', value: this.randomValue() },
            ]

            this.$nextTick(() => {
                this.chinaConfigure(this.dataList)
            })
        },
    },

    mounted() {
        this.getDict()
    },

    // eslint-disable-next-line consistent-return
    beforeDestroy() {
        if (!this.chart) {
            return false
        }

        this.chart.dispose()
        this.chart = null
    },
}
</script>

<style scoped>
.chian-map {
}
</style>

```
