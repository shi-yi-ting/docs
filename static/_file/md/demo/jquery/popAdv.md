```
<template>
    <div>
        <div class="ani">我是内容</div>
        <div class="ad">
            <span></span>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

import { defineComponent, onMounted } from '@vue/composition-api'

export default defineComponent({
    setup() {
        const jqEntry = () => {
            $('.ad').slideDown(1000).slideUp(1000).fadeIn(1000).children('span').click(function() {
                $(this).parent().fadeOut(1000)
            })
        }

        onMounted(() => {
            jqEntry()
        })

        return {

        }
    },
})
</script>

<style scoped>
.ad{
    width: 230px;
    height: 120px;
    background-image: url(./img/ad.jpg);
    position: fixed;
    right: 10px;
    bottom: 40px;
    display: none;
    z-index: 100;
}
.ad span{
    width: 40px;
    height: 18px;
    background-image: url(./img/h.jpg);
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
}
</style>

```
