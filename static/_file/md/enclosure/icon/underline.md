```
<template>
    <div>
        <div class="underline-wrap">
            <div class="content">
                <div class="title">
                    <div class="text">智能工具</div>
                    <div class="underline"></div>
                </div>
            </div>
        </div>

        <div class="underline-text-wrap">
            <div class="underline-text">
                标题
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {
        }
    },
})
</script>


<style lang="less" scoped>
.underline-wrap {
    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .title {
        padding: 20px;
        background-color: #fff;
    }
    .text {
        padding-bottom: 8px;
        font-size: 30px;
    }
    .underline {
        width: 60px;
        height: 5px;
        margin: 0 auto;
        background-color: #01bd9f;
    }
}
.underline-text-wrap {
    .underline-text {
        display: inline-block;
        padding-bottom: 8px;
        font-size: 30px;
        font-weight: 600;
        border-bottom: 5px solid #01bd9f;
    }
}
</style>

```
