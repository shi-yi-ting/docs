```
<template>
    <iframe v-bind="iframeBind" class="iframe" />
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            default: '',
        },
    },

    data() {
        return {
            pageNumber: 0,
            src: undefined,
        }
    },

    computed: {
        iframeBind() {
            return {
                // src: window.location.origin + this.url + '#toolbar=0',
                src: 'https://juejin.cn/',
                frameborder: 0,
                scrolling: 'auto',
            }
        },
    },

}
</script>

<style scoped>
.iframe {
    float: left;
    width: calc(100% - 20px);
    /* height: 100%; */
    height: calc(100vh - 156px);
    margin: 10px;
    padding: 10px;
    border: 1px solid #dcdee2;
    background-color: white;
}
</style>

```
