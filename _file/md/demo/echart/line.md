```
<template>
    <div>
        <div id="echartLine" style="width: 600px; height: 400px;"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';

// let echarts = require('echarts')

export default {
    data() {
        return {
            option: {
                title: {
                    text: 'ECharts入门示例',
                    link: 'http://www.baidu.com',
                    subtext: 'www.stepday.com',
                    sublink: 'http://www.baidu.com',
                    x: 'left',
                    y: 'top',
                },
                legend: {
                    left: 'center',
                    data: ['折线图1', '折线图2'],
                    textstyle: { // 图例文字的样式
                        color: '#000',
                        fontSize: 12,
                        fontWeight: 700,
                        lineHeight: 18,
                    },
                    formatter: function(name) {
                        console.log(name)
                        return 'Legend' + name
                    },
                    // onClick: function(event, legendItem) {
                    //     console.log( event)
                    //     let qualityName = legendItem.text
                    //     console.log(qualityName)
                    // },
                },
                tooltip: { // 提示框
                    trigger: 'item',
                },
                toolbox: { // 工具箱
                    show: true,
                    feature: {
                        mark: {
                            show: true,
                        },
                        dataZoom: {
                            show: true,
                            title: {
                                dataZoom: '区域缩放',
                                dataZoomReset: '区域缩放后退',
                            },
                        },
                        dataView: {
                            show: true,
                            readOnly: true,
                        },
                        magicType: {
                            show: true,
                            type: ['line', 'bar'],
                        },
                        restore: {
                            show: true,
                        },
                        saveAsImage: {
                            show: true,
                        },
                    },
                },

                xAxis: {
                    name: 'x轴',
                    type: 'category',
                    data: ['寸衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
                    nameTextStyle: {
                        color: 'rgba(157, 62, 62, 1)',
                        fontSize: 16,
                    },
                },
                yAxis: {
                    name: '纵轴标题',
                    type: 'value',
                    min: 0, // 坐标轴刻度最小值
                    max: 25, // 坐标轴刻度最大值
                    interval: 5, // 强制设置坐标轴分割间隔
                },

                series: [
                    {
                        name: '折线图1', // 名称要与legend中的data数组中的名称对应
                        type: 'line',
                        data: [5, 20, 36, 10, 10, 20],
                        symbolSize: 10, // 调整波形/折线节点的大小
                        showSymbol: true, // 是否默认展示圆点，节点的于隐藏
                        symbol: 'circle', // 设定为实心点
                        itemStyle: {
                            normal: {
                                color: '#1F824E', // 改变折线点的颜色
                                lineStyle: {
                                    color: '#1F824E', // 改变折线颜色
                                },
                            },
                        },
                    },

                    {
                        name: '折线图2',
                        type: 'line',
                        data: [20, 10, 46, 30, 20, 10],
                        symbolSize: 10, // 调整波形/折线节点的大小
                        smooth: false, // 关键点，为true 是不支持虚线，实线就用 true
                        itemStyle: {
                            normal: {
                                color: 'pink', // 改变折线点的颜色
                                lineStyle: {
                                    type: 'dotted',
                                    color: 'pink', // 改变折线颜色
                                },
                            },
                        },
                        markPoint: { // 显示一定区域内的最大值和最小值
                            data: [
                                { type: 'max', name: '最大值' },
                                { type: 'min', name: '最小值' },
                            ],
                        },
                    },
                ],
            },
        }
    },

    methods: {
        initChart() {
            let myChart = echarts.init(document.getElementById('echartLine'))

            // myChart.on('legendselectchanged', (obj) => {
            //     let selected = obj.selected
            //     let name = obj.name
            //     if (selected !== undefined) {
            //         if (this.isOnlyClickedOneIsUnSelected(name,selected)) {
            //             console.log(1111)
            //             this.onlyEnableCurrentSelectedLegend(name, selected, chart)
            //         }
            //     }
            // })

            myChart.setOption(this.option)
        },

        // isOnlyClickedOneIsUnSelected(name, selected) {
        //     let unSelectedCount = 0
        //     for (item of selected) {
        //         if (!selected.hasOwnProperty(item)) {
        //             continue
        //         }
        //         if (selected[item] === false) {
        //             ++unSelectedCount
        //         }
        //     }
        //     return unSelectedCount === 1 && selected[name] === false
        // },

        // onlyEnableCurrentSelectedLegend(name, selected, echartInstance) {
        //     let legend = []
        //     for (let item of selected) {
        //         if (!selected.hasOwnProperty(item)) {
        //             continue
        //         }
        //         legend.push({'name': item,})
        //         echartInstance.dispatchAction({
        //             type: 'legendToggleSelect',
        //             batch: legend,
        //         })
        //     }
        // },
    },

    mounted() {
        this.initChart()
    },
}
</script>

```
