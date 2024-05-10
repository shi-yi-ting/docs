```vue
<template>
    <div>
        <!-- 超出宽度省略号展示 -->
        <div>
            <Tooltip placement="topLeft" color="#fff">
                <div class="width_80">
                    <div class="text-overflow">
                        超出宽度省略号展示
                    </div>
                </div>

                <template #title>
                    <div class="text-overflow" style="color: #545454">超出宽度省略号展示</div>
                </template>
            </Tooltip>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, watch, computed, onMounted, nextTick  } from 'vue'
import { Tooltip } from 'ant-design-vue'

</script>

<style lang="less" scoped>
// 超出宽度省略号展示
.width_80 {
    max-width: 80px;
}
.text-overflow {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>

```
