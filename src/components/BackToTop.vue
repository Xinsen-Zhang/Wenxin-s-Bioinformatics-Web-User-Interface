<template>
    <div class="back-to-top" id="back-to-top" style="opacity: 0">
        <span class="iconfont icon-top"></span>
    </div>
</template>

<script>
export default {
    name: 'backToTop'
}
</script>

<style scoped>
.back-to-top{
    width: 3rem;
    height: 3rem;
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    text-align: center;
    line-height: 3rem;
    z-index: 99999;
    transition: opacity 1s linear 0s
}
.back-to-top span{
    font-size: 3rem;
    cursor: pointer;
}
</style>
