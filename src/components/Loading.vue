<template>
    <div id="loading" class="fixed-custom-top" :style="{ width: loadingWidth + 'px', height: loadingHeight + 'px' }" :class = '{"opacity-0": !ajaxShow, "opacity-1": ajaxShow}'>
        <div class="loading-box">
            <div class="loading-image"></div>
            <div class="loading-message">Be patient, the webpage will be loaded soon. <span class="loading-icon iconfont icon-smile"></span></div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import { setTimeout } from 'timers';

export default {
    name: 'loading',
    computed: {
        loadingWidth: () => {
            return $(window).width()
        },
        loadingHeight: () => {
            return $(window).height()
        }
    },
    data () {
        return {
            ajaxShow: true
        }
    },
    mounted () {
        let _this = this
        // 开始 ajax 请求的时候显示内容
        $(document).ajaxStart(function () {
            _this.ajaxShow = true
        })

        // ajax 请求结束的时候隐藏界面
        $(document).ajaxStop(function () {
            _this.ajaxShow = false
        })
    },
    watch: {
        $route: {
            handler: function () {
                this.ajaxShow = true
                setTimeout(() => {
                    this.ajaxShow = false
                }, 6000)
            }
        }
    },
}
</script>

<style scoped>

#loading{
    background-color: #fff;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    transition: opacity 3s linear 0s;

}

.fixed-custom-top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}

.loading-box{
    width: 100%;
    height: 20rem;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
}

.loading-image{
    width: 8.375rem;
    height: 13.75rem;
    background-image: url("http://python-zhang.oss-cn-shanghai.aliyuncs.com/cat/images/DNA.gif");
    background-repeat: no-repeat;
    /* position: relative; */
}

.loading-message{
    /* position: absolute; */
    font-size: 2rem;
    height: 2rem;
    width: 100%;
    font-weight: 700;
    text-align: center;
    /* bottom: -3rem; */
    /* margin-left: -20rem; */
    /* display: inline-block; */
    /* text-wrap: nowrap; */
}

.loading-icon{
    font-size: 2rem;
    height: 2rem;
    line-height: 2rem;
    color: #235383;
}
</style>
