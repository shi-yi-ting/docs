## 使用
```
<Check2 v-model:value="value2">
    <span class="fw_normal">单选</span>
</Check2>

<script setup>
import { ref } from 'vue'
import Check2 from '@/views/enclosure/check/check2.vue'

// TODO
const value2 = ref(true)
</script>
```


```
<template>
    <span :class="classList" :style="styles" @click="clickButton"><slot name="default" /></span>
</template>

<script>
import { computed, defineComponent } from 'vue'

export default defineComponent({
    components: {
    },
    props: {
        value: {
            type: Boolean,
        },
        button: {
            type: Boolean,
            default: false,
        },
        left: {
            type: Boolean,
            default: true,
        },
        right: {
            type: Boolean,
            default: false,
        },
        height: {
            type: Number,
            default: 32,
        },
        lineHeight: {
            type: Number,
            default: undefined,
        },
        padding: {
            type: Number,
            default: undefined, // button: 20, check: 6
        },
    },
    setup(props, context) {
        const onlyCheck = context.slots.default === undefined

        const classList = computed(() => {
            console.log('props.value', props.value);

            const list = []
            if (props.button) {
                list.push('Button')
                if (!props.value) {
                    list.push('White')
                }
            } else {
                list.push('check')
                if (props.value) {
                    list.push('selected')
                }
            }

            console.log('list', list);
            return list
        })

        const styles = computed(() => {
            if (props.button) {
                return {
                    height: `${props.height}px`,
                    lineHeight: `${props.lineHeight || (props.height - 2)}px`,
                    padding: `0 ${props.padding || 20}px`,
                }
            } else {
                const padding = props.padding || 6
                if (onlyCheck) {
                    return {
                        width: '14px',
                        height: '14px',
                    }
                } else if (props.right) {
                    return {
                        height: `${props.height}px`,
                        lineHeight: `${props.lineHeight || props.height}px`,
                        paddingLeft: `${padding}px`,
                        paddingRight: `${padding + 14}px`,
                        backgroundPositionX: '100%',
                    }
                } else if (props.left) {
                    return {
                        height: `${props.height}px`,
                        lineHeight: `${props.lineHeight || props.height}px`,
                        paddingLeft: `${padding + 14}px`,
                        paddingRight: `${padding}px`,
                        backgroundPositionX: '0%',
                    }
                }
                return {}
            }
        })

       const clickButton = () => {
            context.emit('update:value', !props.value);
       }

       return {
            classList,
            styles,

            clickButton,
        }
    },
})
</script>

<style scoped>
.Button,
.check {
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    user-select: none;
}

.check {
    background-image: url(./img/check_gray.png);
    background-position-y: center;
    background-repeat: no-repeat;
}
.check:hover {
    color: #0097dd;
    /* background-image: url(./img/check_blue.png); */
}
.selected {
    background-image: url(./img/check_selected.png);
}
</style>

```
