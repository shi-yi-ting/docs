## 音频

### 简易使用

```
<template>
    <div @click="autoPlay">
        <div>
            <!-- <audio src="media/snow.mp3" controls="controls" controls：控件></audio> -->
            <!-- <audio src="./media/snow.mp3" autoplay loop hidden></audio> hidden: 隐藏 -->
            <!-- <audio src="./media/snow.mp3" autoplay loop hidden muted></audio> muted：静音 -->
            <audio id="audio" ref="audioRef" controls="controls" loop>
                <source src="./media/snow.mp3" type="audio/mpeg" />
                <!-- <source src="media/snow.ogg" type="audio/ogg" /> -->
                您的浏览器不支持播放声音
            </audio>
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted, nextTick, ref } from 'vue'

export default defineComponent({
    setup() {
        function handleMusic() {
            const audioRef = ref(null)
            const autoPlay = () => {
                let music = document.getElementById('audio')
                music.play()
                // if (music.paused) { // 判断是否播放
                //     music.paused = false
                //     music.play()
                // }

                // audioRef.value.play()
            }

            // setTimeout(() => {
            //     autoPlay
            // }, 500)

            onMounted(() => {
                nextTick(() => {
                    // let box = document.getElementById('box')
                    // box.click()
                    // autoPlay()
                    // // let music = document.getElementById('audio')
                    // // music.click()

                    setTimeout(() => {
                        autoPlay
                    }, 500)
                })
            })

            return { audioRef, autoPlay }
        }

        return {
            ...handleMusic()
        }
    },
})
</script>

```

### 音频-隐藏控件图标旋转

```
<template>
    <div id="box" @click="autoPlay">
        <div>
            <div>
                <div v-show="isMusicIcon" class="img-box">
                    <img ref="imgRef" :class="{ rotate: playStatus }" src="https://storage.beta.custouch.com/res/8080/music.png" @click.stop="controlMusic" />
                </div>

                <audio id="audio" ref="audioRef" controls="controls" loop autoplay hidden>
                    <source src="./media/snow.mp3" type="audio/mpeg" />
                    您的浏览器不支持 audio 标签。
                </audio>

                <!-- <audio id="audio" ref="audioRef" src="./media/snow.mp3" loop autoplay>
                    您的浏览器不支持 audio 标签。
                </audio> -->
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted, nextTick, ref } from 'vue'

export default defineComponent({
    setup() {
        function useMusic() {
            // 音乐播放
            const isMusicIcon = ref(false)
            const audioRef = ref(null)
            const imgRef = ref(null)
            let playStatus = ref(false)

            const musicImg = ref({
                play: 'https://storage.beta.custouch.com/res/8080/music.png',
                pause: 'https://storage.beta.custouch.com/res/8082/stopMusic.png',
            })

            const controlMusic = () => {
                if (audioRef.value && imgRef.value) {
                    if (playStatus.value) {
                        audioRef.value.pause()
                        imgRef.value.src = musicImg.value.pause
                    } else {
                        audioRef.value.play()
                        imgRef.value.src = musicImg.value.play
                    }
                }
                playStatus.value = !playStatus.value
            }

            // 用户无感自动播放
            const autoPlay = () => {
            // 点击 事先将交互事件绑定到document元素上在用户不知情并且很自然的情况下，完成交互
                document.addEventListener('click', () => {
                    document.querySelector('audio').play()
                    isMusicIcon.value = true
                    playStatus.value = true
                }, { once: true }) // once: true表示只是触发一次

            // // 监听鼠标移动的事件,自动播放音乐
            // let music = document.getElementById('audio')
            // music.addEventListener('mousemove', () => {
            //     document.querySelector('audio').play()
            // })
            }

            onMounted(() => {
                nextTick(() => {
                    autoPlay()
                })
            })

            return { isMusicIcon, audioRef, imgRef, playStatus, controlMusic }
        }

        return {
            ...useMusic(),
        }
    },
})
</script>

<style lang="less" scoped>
// music
// 元素持续旋转关键帧
@keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.img-box {
    position: fixed;
    right: 46px;
    bottom: 46px;
    z-index: 99;
    width: 27px;
    height: 27px;

    img {
        width: 100%;
        height: 100%;
    }
}

// 旋转类
.rotate {
    animation: rotation 3s linear infinite;
}
</style>

```


## 视频

```
<template>
    <div>
        <!-- <video src="media/video.mp4" controls="controls"></video> -->
        <!-- 谷歌浏览器把自动播放功能给禁用了 有解决方案： 给视频添加静音属性 -->
        <video muted="muted" loop="loop" poster="./media/pic.jpg" controls>
            <source src="./media/video.mp4" type="video/mp4" />
            <!-- <source src="media/video.ogg" type="video/ogg" /> -->
            您的浏览器太low了，不支持播放此视频
        </video>
    </div>
</template>

<script>
import { defineComponent, onMounted, nextTick, ref } from 'vue'

export default defineComponent({
    setup() {
        return {

        }
    },
})
</script>

<style lang="less" scoped>
video {
    width: 300px;
}
</style>

```


## 注意-音频

```
<!-- 注意：在 chrome 浏览器中已经禁用了 autoplay 属性 -->
<!-- <audio src="./media/snow.mp3" controls autoplay></audio> -->

<!-- 因为不同浏览器支持不同的格式，所以我们采取的方案是这个音频准备多个文件 -->
<audio controls>
    <source src="./media/snow.mp3" type="audio/mpeg" />
</audio>
```

## 注意-视频

```
<!-- <video src="./media/video.mp4" controls="controls"></video> -->

<!-- 谷歌浏览器禁用了自动播放功能，如果想自动播放，需要添加 muted 属性 -->
<video controls="controls" autoplay muted loop poster="./media/pig.jpg">
    <source src="./media/video.mp4" type="video/mp4">
    <!-- <source src="./media/video.ogg" type="video/ogg"> -->
</video>
```

## 多媒体标签总结

音频标签与视频标签使用基本一致

多媒体标签在不同浏览器下情况不同，存在兼容性问题

谷歌浏览器把音频和视频标签的自动播放都禁止了

谷歌浏览器中视频添加 muted 标签可以自己播放

注意：重点记住使用方法以及自动播放即可，其他属性可以在使用时查找对应的手册
