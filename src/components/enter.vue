<template>
    <div id="enter" class="w-100">
        <div class="container-fluid position-relative content">
            <div class="row justify-content-center text-white">
                <div class="col-10 h1 mb-5">Wenxin's Bioinformatics Web</div>
                <div class="w-100"></div>
                <div class="col-10 h2 my-2">Welcome To the Wonderful World of Bioinformatics !</div>
                <div class="w-100"></div>
                <div class="col-10 h3 mt-5 enter" @click = "enter()">go and explore →</div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import PubSub from 'pubsub-js'

export default {
    name: 'enter',
    props: {
        isFirst: [Boolean]
    },
    mounted() {
        const enter = document.getElementById('enter')
        enter.style.width = $(window).width() + 'px'
        enter.style.height = $(window).height() + 'px'
    },
    methods: {
        enter () {
            PubSub.publish('enter')
        }
    }
}
</script>

<style scoped>
#enter {
    background-image: url("http://python-zhang.oss-cn-shanghai.aliyuncs.com/cat/assets/enter/enter.jpeg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
}

.content {
    top: 50%;
    transform: translateY(-50%);
}

.enter {
    cursor: pointer;
}

.row div {
    transform: scale(2.0);
}
</style>
