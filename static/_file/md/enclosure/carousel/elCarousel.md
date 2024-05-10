## 使用

```
<template>
     <div>
        <MyCarousel :list="carousel.list" @switchPage="switchPage" />
        <!-- <Component :is="type.componentName" /> -->
    </div>
</template>

<script>
import { defineComponent, reactive, computed } from 'vue'
import MyCarousel from './vue/carousel.vue'
import { carouselList } from './_js/staticVariable.js'

// import ConfigModal from './page/configModal/configModal.vue'
// import Echart from './page/echart/echart.vue'
// import Encap from './page/encap/encap.vue'
// import Flex from './page/flex/flex.vue'
// import Header from './page/header/header.vue'
// import IframePdf from './page/iframePdf/iframePdf.vue'
// import Language from './page/language/language.vue'
// import Passthrough from './page/passthrough/passthrough.vue'
// import Modal from './page/modal/modal.vue'
// import Router from './page/router/router.vue'
// import Time from './page/time/time.vue'
// import Tip from './page/tip/tip.vue'
// import Tree from './page/tree/tree.vue'
// import Validate from './page/validate/validate.vue'
// import Video from './page/video/video.vue'

export default defineComponent({
    components: {
        MyCarousel,

        // ConfigModal,
        // Echart,
        // Encap,
        // Flex,
        // Header,
        // IframePdf,
        // Language,
        // Passthrough,
        // Modal,
        // Router,
        // Time,
        // Tip,
        // Tree,
        // Validate,
        // Video,
    },

    setup() {
        const carousel = reactive({
            isActive: 'table',
            list: carouselList,
        })

        const switchPage = (item) => {
            carousel.isActive = item.pageType
        }

        const type = computed(() => {
            return {
                table: {
                    componentName: 'Table',
                },

                modal: {
                    componentName: 'Modal',
                },

                header: {
                    componentName: 'Header',
                },

                tip: {
                    componentName: 'Tip',
                },

                language: {
                    componentName: 'Language',
                },

                time: {
                    componentName: 'Time',
                },

                configModal: {
                    componentName: 'ConfigModal',
                },

                validate: {
                    componentName: 'Validate',
                },

                router: {
                    componentName: 'Router',
                },

                tree: {
                    componentName: 'Tree',
                },

                iframePdf: {
                    componentName: 'IframePdf',
                },

                encap: {
                    componentName: 'Encap',
                },

                flex: {
                    componentName: 'Flex',
                },

                echart: {
                    componentName: 'Echart',
                },

                staticPage: {
                    componentName: 'StaticPage',
                },

                test: {
                    componentName: 'Test',
                },

                passthrough: {
                    componentName: 'passthrough',
                },
                video: {
                    componentName: 'Video',
                },
            }[carousel.isActive]
        })


        return {
            carousel,
            type,

            switchPage,
        }
    },
})
</script>

<style scoped>
</style>

```

## MyCarousel组件封装

```
<template>
    <div>
        <div class="carousel-wrap">
            <el-carousel arrow="always" :autoplay="false">
                <el-carousel-item v-for="item in list" :key="item.id">
                    <div class="carousel">
                        <!-- <div v-for="(itemTwo, index) of item.childrenList" :key="index" class="item" :style="{ backgroundImage: 'url(' + require(`@/assets/images/${itemTwo.id}.png`) + ')' }">{{ itemTwo.name }}</div> -->

                        <!-- <div v-for="(itemTwo, index) of item.childrenList" :key="index" class="item" :style="{ backgroundImage: 'url(' + require(`@/assets/logo.png`) + ')' }" @click="switchPage(itemTwo)">{{ itemTwo.name }}</div> -->

                        <div v-for="(itemTwo, index) of item.childrenList" :key="index" class="item" @click="switchPage(itemTwo)">{{ itemTwo.name }}</div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>

        <!-- <Component :is="type.componentName" /> -->
    </div>
</template>

<script>
import { defineComponent, reactive, computed } from 'vue'

import { ElCarousel, ElCarouselItem } from 'element-plus'

export default defineComponent({
    components: {
        ElCarousel,
        ElCarouselItem,
    },

    props: {
        list: {
            type: Array,
            default: () => {
                return []
            },
        },
    },

    setup(props, { emit }) {
        // const carousel = reactive({
        //     isActive: 'flex',
        //     list: props.list,
        // })

        const switchPage = (item) => {
            // carousel.isActive = item.pageType

            emit('switchPage', item)

            // $this.$router.push({
            //     name: 'home',
            //     params: {
            //         type: item.id,
            //         name: item.name,
            //     },
            // })
        }

        // const type = computed(() => {
        //     return {
        //         echart: {
        //             componentName: 'Echart',
        //         },
        //         flex: {
        //             componentName: 'Flex',
        //         },
        //         widget: {
        //             componentName: 'Widget',
        //         },
        //     }[carousel.isActive]
        // })

        return {
            // carousel,
            // type,

            switchPage,
        }
    },
})
</script>

<style scoped>
.carousel-wrap {
    /* padding-bottom: 64px; */
}
.carousel {
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    margin-right: 64px;
}

.carousel .item {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: #ccc;
    height: 90px;
}

.carousel .item:hover {
    background: green;
    cursor: pointer;
}

.carousel-wrap >>> .el-carousel__indicators {
    display: none;
}
.carousel-wrap >>> .el-carousel--horizontal {
    padding: 0 60px;
}

.carousel-wrap >>> .el-carousel__arrow--left {
    left: -50px;
}

.carousel-wrap >>> .el-carousel__arrow--right {
    right: -50px;
}
</style>

<style>
.carousel-wrap .el-carousel__container {
    height: 200px;
}
</style>

```
