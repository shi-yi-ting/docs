

**HTML**

问题：不知道为啥在vitepress中使用vue组件时会出现样式乱掉的问题，在vue3项目中正常
```
<template>
    <div class="leftMenu" style="width: 220px">
        <!-- <a-menu :selectedKeys="menu.selectedKeys" :openKeys="menu.openKeys" :theme="theme" :mode="mode" @click="handleMenuClick" @openChange="handleOpenChange"> -->
        <a-menu :selectedKeys="menu.selectedKeys" :openKeys="menu.openKeys" :theme="theme" :mode="mode" @click="handleMenuClick">
            <MenuLink :menuList="menuList" :fun="fun" :subMenuFun="subMenuFun" />

            <!-- <a-sub-menu v-for="menuGroup in menuList" :key="menuGroup.name" :title="menuGroup.meta.title">
                <template v-if="menuGroup.children && menuGroup.children.length">
                    <MenuLink :menuList="menuGroup.children" :fun="fun" />
                </template>
            </a-sub-menu> -->
        </a-menu>
    </div>

</template>
```

**JS**


```
<script>
import { reactive, onMounted} from 'vue'

import MenuLink from './vue/menuLink.vue'

export default {
    components: {
        MenuLink
    },

    props: {
        menuList: {
            type: Array,
            default: () => {
                return [
                    // 输入资料
                    {
                        name: 'b69bd8ca0',
                        path: 'b69bd8ca0',
                        fatherCode: null,
                        meta: {
                            title: '输入资料',
                            icon: 'AppstoreOutlined',
                            breadcrumb: true,
                            hidden: false,
                        },

                        children: [
                            {
                                path: 'b69bd8cd1',
                                name: 'b69bd8cd1',
                                fatherCode: 'b69bd8ca0',
                                meta: {
                                    title: '站场',
                                    breadcrumb: true,
                                    hidden: false,
                                },
                                // component: () => import('@/views/projectItem/information/station/station.vue'),

                                // children: [
                                //     {
                                //         path: 'b69bd8cd3',
                                //         name: 'b69bd8cd3',
                                //         fatherCode: 'b69bd8cd1',
                                //         meta: {
                                //             title: '经调',
                                //             breadcrumb: true,
                                //             hidden: false,
                                //         },
                                //         // component: () => import('@/views/projectItem/information/warpMove/warpMove.vue'),
                                //     },
                                // ]
                            },
                            {
                                path: 'b69bd8cd2',
                                name: 'b69bd8cd2',
                                fatherCode: 'b69bd8ca0',
                                meta: {
                                    title: '经调',
                                    breadcrumb: true,
                                    hidden: false,
                                },
                                // component: () => import('@/views/projectItem/information/warpMove/warpMove.vue'),
                            },
                        ],
                    },
                ]
            },
        },

        subMenuFun: {
            type: Function,
        },

        fun: {
            type: Function,
        },

        theme: {
            type: String,
            default: 'light ' // light, dark
        },

        mode: {
            type: String,
            default: 'inline'
        },
    },

    setup(props) {
        const menu = reactive({
            // selectedKeys: ['b69bd8cd1'],
            selectedKeys: [],
            openKeys: [],
        })

        // 处理菜单项点击事件
        const handleMenuClick = ({ key }) => {
            console.log('key', key)
            menu.selectedKeys = [key]
        }

        const handleOpenChange = (openKeys, info) => {
            console.log('info', info)
            props.subMenuFun && props.subMenuFun(openKeys)
        }

        onMounted(() => {
            if (props.menuList && props.menuList.length > 0 && props.menuList[0].children && props.menuList[0].children.length) {
                menu.selectedKeys = [props.menuList[0].children[0].name];
                menu.openKeys = [props.menuList[0].name];
            } else {
                menu.selectedKeys = []
                menu.selectedKeys =[props.menuList[0].name]
                menu.openKeys = []
            }
        })

        return {
            menu,

            handleMenuClick,
            handleOpenChange,
        }
    },
};
</script>
```

**style**


```
<style lang="less" scoped>
.leftMenu {
    max-height: 100%;
    overflow: auto;
}
</style>
```
