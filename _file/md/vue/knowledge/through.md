## 透传

### vm.$attrs

包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。
当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。

### vm.$listeners

包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。

### inheritAttrs

1. 默认值为true,作用使那些没有在props中定义的属性，直接以attribute的形式作用在组件的根元素上！
2. 一般一个组件如果要接受父组件传来的属性，是需要先在props里面预定义好的。如果没有父组件传递过来的属性将会挂载在根元素的attribute上
3. 设置为false可阻止以上行为

### 透传代码

#### 父组件

```
<template>
    <div class="nav">
        <MyButton01 type="success" size="small" class="mr8">测试01</MyButton01>
    </div>
</template>
<script>
import MyButton01 from './myButton01/myButton01.vue'
export default {
    components: {
        MyButton01,
    },
}
<script> // 注意差一个反斜杠，由于报错故意删除的
```

#### 子组件

**这里的使用场景**
Button按钮的size默认为large,但是页面我们全部使用size为small的大小，又不想如下使用
于是便在依赖iview中的Button自己封装了一个myButton,并给他一个默认值，为了使Button的原有属性能够使用这里就需要使用到透传了

```
<template>
    <Button v-bind="customizedAttrs" v-on="$listeners">
        <slot />
    </Button>
</template>
<script>
export default {
    name: 'MyButton',
    // 一个组件如果要接受父组件传来的属性，是需要先在props里面预定义好的。
    // 如果没有父组件传递过来的属性将会挂载在根元素的attribute上
    // 也就是说，inheritAttrs为true时：使那些没有在props中定义的属性，直接以attribute的形式作用在组件的根元素上！
    inheritAttrs: false, // inheritAttrs默认值为true,
    // props: {
    //     size: {
    //         type: String,
    //         default: 'small',
    //     },
    // },
    computed: {
        customizedAttrs() {
            return {
                size: 'large',
                // 支持传过来的size覆盖默认的size
                ...this.$attrs,
            }
        },
    },
}
<script>
```
