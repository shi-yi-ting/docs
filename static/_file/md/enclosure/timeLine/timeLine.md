```
<template>
    <div>
        <div class="artical-box">
            <div>
                <div v-for="(item, index) of list" :key="index" class="artical">
                    <div class="dotts"></div>
                    <div>
                        <span class="date">
                            <span class="trig"></span>
                            <span class="dates fw700">{{ item.time }}</span>
                        </span>

                        <div class="art-container">
                            <div class="line"></div>
                            <div class="art-content pointer" @click="toDetails(item)">
                                <p class="art-title">
                                    <!-- <a href="/detail?id=62e1f11e52e2f10b9b17319b" style="color: #444;">{{ item.title }}</a> -->
                                    <span class="fw700" style="color: #444;">{{ item.title }}</span>
                                </p>
                                <div v-show="item.img" class="art-img">
                                    <img :src="item.img" alt="文章配图" />
                                </div>
                                <div class="art-detail">
                                    <p>{{ item.intro }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        list: {
            type: Array,
            default: () => {
                return [
                    {
                        time: '2022.07.27',
                        title: 'PixiJS动画引擎在H5小游戏中的应用',
                        img: 'https://redspite.com/uploads/1658975121723.png',
                        intro: '四年一度的冬季奥运会再次来到亚洲，而北京也成为全世界第一个举办过夏季奥运会和冬奥会的城市。在北京冬奥会即将开幕之际，我们自主开发的手机小游戏“欢乐滑雪赛”正式在客户端北京冬奥频道上线。',
                    },

                    {
                        time: '2022.07.27',
                        title: 'PixiJS动画引擎在H5小游戏中的应用',
                        img: '',
                        intro: '四年一度的冬季奥运会再次来到亚洲，而北京也成为全世界第一个举办过夏季奥运会和冬奥会的城市。在北京冬奥会即将开幕之际，我们自主开发的手机小游戏“欢乐滑雪赛”正式在客户端北京冬奥频道上线。',
                    },

                    {
                        time: '2022.07.27',
                        title: 'PixiJS动画引擎在H5小游戏中的应用',
                        img: '',
                        intro: '四年一度的冬季奥运会再次来到亚洲，而北京也成为全世界第一个举办过夏季奥运会和冬奥会的城市。在北京冬奥会即将开幕之际，我们自主开发的手机小游戏“欢乐滑雪赛”正式在客户端北京冬奥频道上线。',
                    },
                ]
            },
        },
    },

    setup() {
        const toDetails = (item) => {
            $this.$router.push(item.url)
        }

        return {
            toDetails,
        }
    },
})
</script>

<style scoped>
/* artical */
.artical-box {
    /* padding-left: 15%; */
    padding-left: 5%;
    margin-top: 3em;
}
.artical {
    width: 100%;
    position: relative;
    min-height: 0.3rem;
}
.dotts {
    left: 1.2%;
    width: 1.2em;
    height: 1.2em;
    border: 0.143em solid #e2e0dc;
    position: absolute;
    top: 0;
    line-height: 0;
    border-radius: 50%;
    background: #fff;
    margin-left: -0.6em;
    z-index: 10;
}
.date {
    display: block;
    position: absolute;
    top: -0.5em;
    margin-left: 3.5em;
    height: 2.14em;
    color: #948c76;
    z-index: 10;
    -webkit-transition: 0.3s;
    transition: 0.3s;
}

.trig {
    position: absolute;
    left: -1.14em;
    top: 0;
    border-right: 16px solid #f7f3ee;
    border-top: 15px dashed transparent;
    border-bottom: 15px dashed transparent;
    width: 0;
    height: 0;
    line-height: 0;
}
.dates {
    display: inline-block;
    padding: 0 1em;
    height: 30px;
    background: #f7f3ee;
    font-size: 0.8em;
    vertical-align: top;
    line-height: 2.5em;
}
.art-container {
    width: 100%;
    padding: 0 0 0 1%;
    position: relative;
}
.line {
    width: 0.143em;
    height: 100%;
    background: #f7f3ee;
    position: absolute;
    z-index: 0;
    -webkit-transition: 0.5s;
    transition: 0.5s;
}
.art-content {
    padding: 0 1em 1em 2em;
    overflow: hidden;
}
.art-title {
    margin: 3em 0 2em;
    font-size: 1em;
}
.art-img {
    width: 30%;
}
.art-img img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
}
.art-detail {
    width: 85%;
    line-height: 1.5em;
    margin-top: 2em;
    padding-bottom: 2em;
    font-size: 0.8em;
}
</style>

```
