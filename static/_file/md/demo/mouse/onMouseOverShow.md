```
<template>
    <div class="task_item ptb30">
        <!-- 在需要鼠标经过显示，鼠标离开隐藏图标的 span 标签上放一个 v-if="menuUnSeen" -->
        <label for="">鼠标悬浮展示隐藏的图标(img标签的title可以放在包住img的span标签中): </label>
        <div class="block_right" @mouseenter="onMouseOver" @mouseleave="onMouseOut">
            <span v-if="menuUnseen" title="启动任务">
                <img src="./img/start_left_gray.png">
                <img src="./img/start_left_blue.png">
            </span>

            <span title="重复执行">
                <img src="./img/restart_left_gray.png">
                <img src="./img/restart_left_blue.png">
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timer: null,
            hoverEnterTime: 300,
            hoverLeaveTime: 800,
            menuUnseen: false,
        }
    },

    methods: {
        onMouseOver() {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.menuUnseen = true
            }, this.hoverEnterTime)
        },

        onMouseOut() {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.menuUnseen = false
            }, this.hoverLeaveTime)
        },
    },
}
</script>

<style scoped>
.task_item .block_right {
    /* position: absolute;
    right: 10px;
    width: 40%;
    float: right;
    height: 26px; */
    margin-top: 10px;
    margin-left: 10px;
}
.task_item .block_right * {
    vertical-align: middle;
}

.task_item .block_right > span {
    display: inline-block;
    position: relative;
    right: 14px;
    width: 22px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 5px;
}

.task_item .block_right > span > img:nth-child(2n + 1) {
    display: inline-block;
}
.task_item .block_right > span > img:nth-child(2n) {
    display: none;
}
.task_item .block_right > span:hover > img:nth-child(2n + 1) {
    display: none;
}
.task_item .block_right > span:hover > img:nth-child(2n) {
    display: inline-block;
}
</style>

```
