```
<template>
    <div>
        <div>
            <div>这里只是做了点击画布获取坐标点</div>
            <div class="content">
                <span>鼠标点击坐标：x({{ canvasX }}), y({{ canvasY }})</span>
                <div id="video" class="hrtc-video-theme" style="width: 100%; height: 100%;">
                    <div class="sign-canvas">
                        <canvas id="canvas" ref="canvas" style="background: black" @mousedown="canvasDown($event)">你的浏览器不支持canvas</canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    data() {
        return {
            TOP_HEAD_HEIGHT: 50,

            canvasX: '',
            canvasY: '',
        }
    },

    methods: {
        drawing() {
            // 初始化准备画笔
            this.ctx = this.$refs.canvas.getContext('2d')
        },

        canvasDown(e) {
            // console.log(e)

            const canvasX = e.clientX - e.target.offsetLeft + document.documentElement.scrollLeft
            const canvasY = e.clientY - e.target.offsetTop + document.documentElement.scrollTop - this.TOP_HEAD_HEIGHT

            this.canvasX = canvasX
            this.canvasY = canvasY

            // console.log('canvasX', canvasX)
            // console.log('canvasY', canvasY)
        },

        showDrawing() {
            this.drawing()
            const videoWidth = Number($('#video').width())
            const videoHeight = Number($('#video').height())
            // console.log('videoWidth', videoWidth)
            // console.log('videoHeight', videoHeight)

            // 加上单位
            $('#video').css({
                width: `${videoWidth}px`,
                height: `${videoHeight}px`,
            })

            $('#canvas').attr('width', this.videoWidth)
            $('#canvas').attr('height', this.videoHeight)
        },
    },

    mounted() {
        this.showDrawing()
    },
}
</script>

<style scoped>
.hrtc-video-theme #local_stream {
    position: relative;
}

.hrtc-video-theme #local_video_info {
    position: absolute;
}

.hrtc-video-theme .video-view {
    position: relative;
}

.hrtc-video-theme .video-view,
.hrtc-video-theme .video-placeholder,
.hrtc-video-theme #local_stream,
.hrtc-video-theme #local_video_info {
    width: auto;
    height: auto;
}

.hrtc-video-theme .video-profile {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    font-size: 10px;
    color: #fff;
    opacity: 0.9;
    text-shadow: black 0.1em 0.1em 0.2em;
    z-index: 2;
}

.hrtc-video-theme .video-grid {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: auto;
}

.hrtc-video-theme .autoplay-fallback {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
    cursor: pointer;
}

.content {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    margin-top: 10px;
    /* padding: 30px; */
    /* text-align: center; */
}
</style>

```
