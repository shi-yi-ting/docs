```
<template>
    <div>
        <div class="icon-wrap">
            <div class="icon">
                <div class="icon-inner"></div>
            </div>
        </div>

        <div class="circle" />
    </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    setup() {
        return {
        }
    },
})
</script>


<style lang="less" scoped>
.icon-wrap {
    display: flex;
    align-items: center;
    height: 30px;
    .icon {
        position: relative;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #e7f8f5;

        .icon-inner {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 6px;
            height: 6px;
            margin-left: -3px;
            margin-top: -3px;
            border-radius: 50%;
            background: #01bea0;
        }
    }
}

.circle {
    display: inline-block;
    width: 6px;
    height: 6px;
    margin: 4px;
    border-radius: 50%;
    box-shadow: 0px 20px 40px 0px rgba(1, 189, 159, 0.5);
    background-color: #01bd9f;
    cursor: pointer;
}
</style>


```
