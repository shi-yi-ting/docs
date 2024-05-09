```
<template>
    <div>
        <div class="wrap">
            <ul>
                <li><a href="#"><img src="./img/01.jpg" alt=""></a></li>
                <li><a href="#"><img src="./img/02.jpg" alt=""></a></li>
                <li><a href="#"><img src="./img/03.jpg" alt=""></a></li>
                <li><a href="#"><img src="./img/04.jpg" alt=""></a></li>
                <li><a href="#"><img src="./img/05.jpg" alt=""></a></li>
                <li><a href="#"><img src="./img/06.jpg" alt=""></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

import { defineComponent, onMounted } from 'vue'

export default defineComponent({
    setup() {
        const jqEntry = () => {
            $('.wrap').find('li').mouseenter(function () {
                $(this).css('opacity', 1)
                $(this).siblings('li').css('opacity', 0.4)
            })
            $('.wrap').mouseleave(function () {
                $(this).children().children('li').css('opacity', 1)
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
.wrap {
    width: 666px;
    height: 420px;
    padding: 10px 0 0 10px;
    /*注意这里*/
    margin: 30px auto;
    background: #000;
    border: 1px solid #fff;
}

.wrap ul {
    list-style: none;
}

.wrap li {
    float: left;
    margin: 0 10px 10px 0;
    /*注意这里*/
}
</style>

```
