```
<template>
    <div v-if="show">
        <slot />
    </div>
    <div v-else-if="showTip" style="text-align: center;">正在加载, 请稍候...</div>
</template>

<script>
export default {
    props: {
        time: {
            type: Number,
            default: 100,
        },
        showTip: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            show: false,
        }
    },
    created() {
        this.$nextTick(() => {
            setTimeout(() => {
                this.show = true
            }, this.time)
        })
    },
}
</script>

<style scoped>
</style>

```
