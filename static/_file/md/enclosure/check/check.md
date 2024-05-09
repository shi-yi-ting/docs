## 使用
```
<Check :select="value" @change="(flag) => { value = flag }">
    <span class="fw_normal">单选</span>
</Check>

<script setup>
import { ref } from 'vue'
import Check from '@/views/enclosure/check/check.vue'

// TODO
const value = ref(true)
</script>
```


```
<template>
    <span v-if="hasSlot" class="checkboc-wp" :class="{ disabled }" @click="change">
        <slot v-if="!isLeft" name="default" />
        <span class="checkbox" :class="{ select: select, half: select && half, disabled }" :style="{ margin: isLeft ? '9px 6px 9px 0' : '9px 0 9px 6px' }" />
        <slot v-if="isLeft" name="default" />
    </span>
    <span v-else class="checkbox" :class="{ select: select, half: select && half, disabled }" @click="change" />
</template>

<script>
import { computed, defineComponent } from 'vue'

export default defineComponent({
    name: 'Check',
    components: {
    },
    // vue 组件中的 model: 允许自定义组件在使用 v-model 时定制 prop 和 event
    model: {
        prop: 'select',
        event: 'change',
    },
    props: {
        select: {
            type: Boolean,
            default: false,
        },
        half: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        space: {
            type: Number,
            default: 6,
        },
        left: {
            type: Boolean,
            default: undefined,
        },
        right: {
            type: Boolean,
            default: undefined,
        },
    },
    setup(props, { slots, emit }) {
        return {
            hasSlot: !!slots.default,
            isLeft: computed(() => props.left === true || (props.left === undefined && props.right !== true)),
            change: () => {
                if (props.disabled) {
                    console.log(1111)
                    return
                }

                console.log('传入check中的值', props.select)
                emit('change', !props.select)
                console.log('传入check中的值取反之后返回', !props.select)
            },
        }
    },
})
</script>

<style scoped>
.checkboc-wp {
    display: inline-block;
    vertical-align: top;
    height: 32px;
    line-height: 32px;
    cursor: default;
}
.checkboc-wp:not(.disabled):hover {
    color: #108ee9;
    cursor: pointer;
}

.checkbox {
    display: inline-block;
    vertical-align: top;
    user-select: none;
    position: relative;
    width: 14px;
    height: 14px;
    border-width: 1px;
    border-style: solid;
}

.checkbox {
    border-color: #abbacc;
    background-color: #ffffff;
}
.checkbox:not(.disabled):hover {
    border-color: #108ee9;
    cursor: pointer;
}

.checkbox.select {
    border-color: #108ee9;
    background-color: #108ee9;
}
.checkbox.select:after {
    content: "";
    position: absolute;
    left: 2px;
    top: 2px;
    width: 8px;
    height: 5px;
    border: 2px solid #ffffff;
    border-top: 0;
    border-right: 0;
    transform: rotate(-45deg);
    transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6);
}

.checkbox.select.half:after {
    border-left: 0;
    transform: rotate(0);
}

.checkbox.disabled {
    border-color: #b1becf;
    background-color: #d7d7d7;
}
</style>

```
