## lefttMenu组件
```vue
<template>
    <Menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" :mode="mode" :theme="theme" @click="onMenu">
        <MenuLink :menuList="menuList" />
    </Menu>
</template>


<script lang="ts" setup>
import { defineComponent, reactive, toRefs } from 'vue'
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue'
import { Menu } from 'ant-design-vue'

import { useRoute, useRouter } from 'vue-router'

import MenuLink from './vue/menuLink.vue'

const props = defineProps({
    menuList: {
        type: Array,
        default: () => {
            return [
                {
                    "id": "1773296269876269056",
                    "pid": null,
                    "perm": null,
                    "path": "/af7c65f50",
                    "name": "项目概况",
                    "porid": "1773286012047331328",
                    "type": "D",
                    "component": "@/iews/projectltem/overview/overviewHome/overviewHome.vue",
                    "meta": {
                        "title": "项目概况",
                        "affix": null,
                        "icon": 'MailOutlined',
                        "orderNo": 0,
                        "isHide": true,
                        "isIframe": false,
                        "isLink": null,
                        "isKeepAlive": false
                    },
                    "redirect": null,
                    "eventName": null,
                    "sort": 0,
                    "children": [
                        {
                            "id": "1773297140789940224",
                            "pid": "1773296269876269056",
                            "perm": null,
                            "path": "overviewHome",
                            "name": "项目总览",
                            "porid": "1773286012047331328",
                            "type": "M",
                            "component": "@/iews/projectltem/overview/overviewHome/overviewHome.vue",
                            "meta": {
                                "title": "项目总览",
                                "affix": null,
                                "icon": null,
                                "orderNo": 0,
                                "isHide": true,
                                "isIframe": false,
                                "isLink": null,
                                "isKeepAlive": false
                            },
                            "redirect": null,
                            "eventName": null,
                            "sort": 0,
                            "children": []
                        },
                        {
                            "id": "1773297250777174016",
                            "pid": "1773296269876269056",
                            "perm": null,
                            "path": "information",
                            "name": "输入资料",
                            "porid": "1773286012047331328",
                            "type": "M",
                            "component": "@/views/projectltem/overview/information/information.vue",
                            "meta": {
                                "title": "输入资料",
                                "affix": null,
                                "icon": null,
                                "orderNo": 1,
                                "isHide": true,
                                "isIframe": false,
                                "isLink": null,
                                "isKeepAlive": false
                            },
                            "redirect": null,
                            "eventName": null,
                            "sort": 1,
                            "children": []
                        }
                    ]
                },

                {
                    "id": "1773297459217305600",
                    "pid": null,
                    "perm": null,
                    "path": "/698a3e46f",
                    "name": "规模计算",
                    "porid": "1773286012047331328",
                    "type": "D",
                    "component": null,
                    "meta": {
                        "title": "规模计算",
                        "affix": null,
                        "icon": 'CalendarOutlined',
                        "orderNo": 0,
                        "isHide": true,
                        "isIframe": false,
                        "isLink": null,
                        "isKeepAlive": false
                    },
                    "redirect": null,
                    "eventName": null,
                    "sort": 0,
                    "children": [
                        {
                            "id": "1773297729192071168",
                            "pid": "1773297459217305600",
                            "perm": null,
                            "path": "b69bd8ca1",
                            "name": "里程计算",
                            "porid": "1773286012047331328",
                            "type": "M",
                            "component": "@/views/projectltem/scaleCalculation/mileage/mileage.vue",
                            "meta": {
                                "title": "里程计算",
                                "affix": null,
                                "icon": null,
                                "orderNo": 0,
                                "isHide": true,
                                "isIframe": false,
                                "isLink": null,
                                "isKeepAlive": false
                            },
                            "redirect": null,
                            "eventName": null,
                            "sort": 0,
                            "children": []
                        },
                        {
                            "id": "1773297872033288192",
                            "pid": "1773297459217305600",
                            "perm": null,
                            "path": "b69bd8ca2",
                            "name": "运用车数计算",
                            "porid": "1773286012047331328",
                            "type": "M",
                            "component": "@/views/projectltem/scaleCalculation/vehicles/vehicles.vue",
                            "meta": {
                                "title": "运用车数计算",
                                "affix": null,
                                "icon": null,
                                "orderNo": 1,
                                "isHide": true,
                                "isIframe": false,
                                "isLink": null,
                                "isKeepAlive": false
                            },
                            "redirect": null,
                            "eventName": null,
                            "sort": 1,
                            "children": []
                        },
                        {
                            "id": "1773298011909132288",
                            "pid": "1773297459217305600",
                            "perm": null,
                            "path": "b69bd8ca3",
                            "name": "检修工作量计算",
                            "porid": "1773286012047331328",
                            "type": "M",
                            "component": "@/views/projectltem/scaleCalculation/overhaul/overhaul.vue",
                            "meta": {
                                "title": "检修工作量计算",
                                "affix": null,
                                "icon": null,
                                "orderNo": 2,
                                "isHide": true,
                                "isIframe": false,
                                "isLink": null,
                                "isKeepAlive": false
                            },
                            "redirect": null,
                            "eventName": null,
                            "sort": 2,
                            "children": []
                        },
                        {
                            "id": "1773298151294242816",
                            "pid": "1773297459217305600",
                            "perm": null,
                            "path": "b69bd8ca4",
                            "name": "定员",
                            "porid": "1773286012047331328",
                            "type": "M",
                            "component": "@/views/projectltem/scaleCalculation/personnel/personnel.vue",
                            "meta": {
                                "title": "定员",
                                "affix": null,
                                "icon": null,
                                "orderNo": 3,
                                "isHide": true,
                                "isIframe": false,
                                "isLink": null,
                                "isKeepAlive": false
                            },
                            "redirect": null,
                            "eventName": null,
                            "sort": 3,
                            "children": []
                        }
                    ]
                },

                {
                    "id": "1773298276229976064",
                    "pid": null,
                    "perm": null,
                    "path": "/698a3e41f",
                    "name": "方案设计",
                    "porid": "1773286012047331328",
                    "type": "D",
                    "component": null,
                    "meta": {
                        "title": "方案设计",
                        "affix": null,
                        "icon": 'AppstoreOutlined',
                        "orderNo": 0,
                        "isHide": true,
                        "isIframe": false,
                        "isLink": null,
                        "isKeepAlive": false
                    },
                    "redirect": null,
                    "eventName": null,
                    "sort": 0,
                    "children": [
                        {
                            "id": "1773298375614009344",
                            "pid": "1773298276229976064",
                            "perm": null,
                            "path": "5bfcdcf3d",
                            "name": "总图方案设计",
                            "porid": "1773286012047331328",
                            "type": "M",
                            "component": "@/views/projectltem/drawing/planLayout/planLayout.vue",
                            "meta": {
                                "title": "总图方案设计",
                                "affix": null,
                                "icon": null,
                                "orderNo": 0,
                                "isHide": true,
                                "isIframe": false,
                                "isLink": null,
                                "isKeepAlive": false
                            },
                            "redirect": null,
                            "eventName": null,
                            "sort": 0,
                            "children": []
                        },
                        {
                            "id": "1777229686514913280",
                            "pid": "1773298276229976064",
                            "perm": null,
                            "path": "simple",
                            "name": "单体设计",
                            "porid": "1773286012047331328",
                            "type": "M",
                            "component": "@/views/projectItem/drawing/simple/simple.vue",
                            "meta": {
                                "title": "单体设计",
                                "affix": null,
                                "icon": null,
                                "orderNo": 1,
                                "isHide": true,
                                "isIframe": false,
                                "isLink": null,
                                "isKeepAlive": false
                            },
                            "redirect": null,
                            "eventName": null,
                            "sort": 1,
                            "children": []
                        }
                    ]
                },

                {
                    "id": "1773298468639477760",
                    "pid": null,
                    "perm": null,
                    "path": "/698a3e23f",
                    "name": "工艺接口设计",
                    "porid": "1773286012047331328",
                    "type": "D",
                    "component": null,
                    "meta": {
                        "title": "工艺接口设计",
                        "affix": null,
                        "icon": 'SettingOutlined',
                        "orderNo": 0,
                        "isHide": true,
                        "isIframe": false,
                        "isLink": null,
                        "isKeepAlive": false
                    },
                    "redirect": null,
                    "eventName": null,
                    "sort": 0,
                    "children": [
                        {
                            "id": "1773298585769611264",
                            "pid": "1773298468639477760",
                            "perm": null,
                            "path": "5bfcdcf21",
                            "name": "数据表",
                            "porid": "1773286012047331328",
                            "type": "M",
                            "component": "@/views/projectltem/technology/general/general.vue",
                            "meta": {
                                "title": "数据表",
                                "affix": null,
                                "icon": null,
                                "orderNo": 0,
                                "isHide": true,
                                "isIframe": false,
                                "isLink": null,
                                "isKeepAlive": false
                            },
                            "redirect": null,
                            "eventName": null,
                            "sort": 0,
                            "children": []
                        },
                        {
                            "id": "1773298682519621632",
                            "pid": "1773298468639477760",
                            "perm": null,
                            "path": "5bfcdcf22",
                            "name": "互提资料",
                            "porid": "1773286012047331328",
                            "type": "M",
                            "component": "@/views/projectltem/technology/material/material.vue",
                            "meta": {
                                "title": "互提资料",
                                "affix": null,
                                "icon": null,
                                "orderNo": 1,
                                "isHide": true,
                                "isIframe": false,
                                "isLink": null,
                                "isKeepAlive": false
                            },
                            "redirect": null,
                            "eventName": null,
                            "sort": 1,
                            "children": []
                        }
                    ]
                },

                {
                    "id": "1777230108348649472",
                    "pid": null,
                    "perm": null,
                    "path": "/achievements",
                    "name": "工艺设计成果",
                    "porid": "1773286012047331328",
                    "type": "D",
                    "component": null,
                    "meta": {
                        "title": "工艺设计成果",
                        "affix": null,
                        "icon": 'MailOutlined',
                        "orderNo": 0,
                        "isHide": true,
                        "isIframe": false,
                        "isLink": null,
                        "isKeepAlive": false
                    },
                    "redirect": null,
                    "eventName": null,
                    "sort": 0,
                    "children": [
                        {
                            "id": "1777555123795398656",
                            "pid": "1777230108348649472",
                            "perm": null,
                            "path": "estimate",
                            "name": "工艺设备数量",
                            "porid": "1773286012047331328",
                            "type": "M",
                            "component": "@/views/projectItem/achievements/estimate/estimate.vue",
                            "meta": {
                                "title": "工艺设备数量",
                                "affix": null,
                                "icon": null,
                                "orderNo": 0,
                                "isHide": true,
                                "isIframe": false,
                                "isLink": null,
                                "isKeepAlive": false
                            },
                            "redirect": null,
                            "eventName": null,
                            "sort": 0,
                            "children": []
                        },
                        {
                            "id": "1777230423588343808",
                            "pid": "1777230108348649472",
                            "perm": null,
                            "path": "instructions",
                            "name": "说明书设计",
                            "porid": "1773286012047331328",
                            "type": "M",
                            "component": "@/views/projectItem/achievements/instructions/instructions.vue",
                            "meta": {
                                "title": "说明书设计",
                                "affix": null,
                                "icon": null,
                                "orderNo": 1,
                                "isHide": true,
                                "isIframe": false,
                                "isLink": null,
                                "isKeepAlive": false
                            },
                            "redirect": null,
                            "eventName": null,
                            "sort": 1,
                            "children": []
                        },
                        {
                            "id": "1777230528349474816",
                            "pid": "1777230108348649472",
                            "perm": null,
                            "path": "drawings",
                            "name": "工艺图纸",
                            "porid": "1773286012047331328",
                            "type": "M",
                            "component": "@/views/projectItem/achievements/drawings/drawings.vue",
                            "meta": {
                                "title": "工艺图纸",
                                "affix": null,
                                "icon": null,
                                "orderNo": 2,
                                "isHide": true,
                                "isIframe": false,
                                "isLink": null,
                                "isKeepAlive": false
                            },
                            "redirect": null,
                            "eventName": null,
                            "sort": 2,
                            "children": []
                        }
                    ]
                }
            ]


            // return [
            //     {
            //         name: 'Navigation One',
            //         path: '/synergy',
            //         meta: {
            //             title: 'Navigation One',
            //             icon: 'MailOutlined',
            //             breadcrumb: true,
            //             hidden: false,
            //         },
            //         children: []
            //     },

            //     {
            //         name: 'Navigation Two',
            //         path: 'Navigation Two',
            //         meta: {
            //             title: 'Navigation Two',
            //             icon: 'CalendarOutlined',
            //             breadcrumb: true,
            //             hidden: false,
            //         },
            //         children: []
            //     },

            //     {
            //         name: 'Navigation Three',
            //         path: 'Navigation Three',
            //         meta: {
            //             title: 'Navigation Three',
            //             icon: 'AppstoreOutlined',
            //             breadcrumb: true,
            //             hidden: false,
            //         },

            //         children: [
            //             {
            //                 path: 'Option 3',
            //                 name: 'Option 3',
            //                 meta: {
            //                     title: 'Option 3',
            //                     icon: '',
            //                     breadcrumb: true,
            //                     hidden: false,
            //                 },
            //                 children: [
            //                     {
            //                         path: 'Option 5',
            //                         name: 'Option 5',
            //                         meta: {
            //                             title: 'Option 5',
            //                             icon: '',
            //                             breadcrumb: true,
            //                             hidden: false,
            //                         },
            //                         children: []
            //                     },
            //                 ]
            //             },
            //         ],
            //     },

            //     {
            //         name: 'Navigation Four',
            //         path: 'Navigation Four',
            //         meta: {
            //             title: 'Navigation Four',
            //             icon: 'SettingOutlined',
            //             breadcrumb: true,
            //             hidden: false,
            //         },

            //         children: [
            //             {
            //                 path: 'Option 7',
            //                 name: 'Option 7',
            //                 meta: {
            //                     title: 'Option 7',
            //                     icon: '',
            //                     breadcrumb: true,
            //                     hidden: false,
            //                 },
            //                 children: []
            //             },

            //             {
            //                 path: 'Option 8',
            //                 name: 'Option 8',
            //                 meta: {
            //                     title: 'Option 8',
            //                     icon: '',
            //                     breadcrumb: true,
            //                     hidden: false,
            //                 },
            //                 children: []
            //             },
            //         ],
            //     },
            // ]
        },
    },

     theme: {
        type: String,
        default: 'light' // light, dark
    },

    mode: {
        type: String,
        default: 'inline'
    },
})

// TODO
const router = useRouter()
const onMenu = (evt: any): void => { // 点击菜单
    console.log('点击菜单', evt)
    router.push(evt.key)
}
</script>


```

## menuLink组件

```vue
<template>
    <template v-for="(item) of menuList" :key="item.path">
        <template v-if="!item.children || item.children.length === 0">
            <MenuItem :key="item.path">
                <template #icon>
                    <component :is="item.meta?.icon" :style="{ fontSize: '16px' }"></component>
                </template>
                <span>{{ item.meta?.title }}</span>
            </MenuItem>
        </template>

        <template v-else>
            <SubMenu :key="item.path" :title="item.meta.title">
                <template #icon>
                    <component :is="item.meta?.icon" :style="{ fontSize: '16px' }"></component>
                </template>

                <!-- <template #title>{{ item.meta?.title }}</template> -->

                <MenuLink :menuList="item.children" />
            </SubMenu>
        </template>
    </template>
</template>


<script lang="ts" setup>
import { defineComponent, reactive, toRefs } from 'vue'
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue'
import { MenuItem, SubMenu } from 'ant-design-vue'
import type { PropType } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

import { useRoute, useRouter } from 'vue-router'

// import MenuItem from './menuItem.vue'

const props = defineProps({
    menuList: {
        type: Array,
        default: () => {
            return []
        },
    },

    data: {
        type: Object as PropType<RouteRecordRaw>,
        required: true,
        default: () => { },
    },
})

// TODO
const router = useRouter()
</script>

```
