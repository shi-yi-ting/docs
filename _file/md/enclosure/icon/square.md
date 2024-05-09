```
<template>
    <div>
        <div class="square">
            <span class="active"></span>
            <span>在网</span>
        </div>

        <div class="square">
            <span class="noActive"></span>
            <span>坏盘</span>
        </div>
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


<style scoped>
.square span:first-child{
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 8px;
}
.active {
    background-color: #f56c6c;
}
.noActive {
    background-color: #b5dfff;
}
</style>

```
