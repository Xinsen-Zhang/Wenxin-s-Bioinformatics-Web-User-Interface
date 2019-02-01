<template>
    <div class='w-100 position-relative' id='header'>
        <div class="head-header light-bg align-items-center">
            <div class="row justify-content-end no-margin">
                <div class="date col-6 clearfix">
                    <span class="player iconfont float-right" @click="togglePlay()" :class = '{"icon-yinpinaudio47": musicOn, "icon-jingyin": !musicOn}'></span>
                    <span class="weather pr-4 float-right">{{weather}}</span>
                    <span class="date pr-4 float-right">{{date}}</span>
                    <audio src="http://python-zhang.oss-cn-shanghai.aliyuncs.com/cat/media/bgm.m4a" loop controls class='d-none' id="audio"></audio>
                </div>
            </div>
        </div>
        <div class="head-body dark-bg">
            <div class="row no-margin justify-content-between h-100 align-items-center">
                <div class="webtitle col-4">Wenxin's Web</div>
                <div class="search flex-row col-4 clearfix">
                    <form action="#" method="get" class="float-right pr-2">
                        <div class="input d-inline">
                        <!--height 3rem-->
                            <label for="search"></label>
                            <input type="text" placeholder="Seach text here" id="search">
                            <input type="button" class="search-button d-none">
                        </div>
                        <div class="icon iconfont icon-icon_sousuomian d-inline text-white"></div>
                    </form>
                </div>
            </div>
        </div>
        <div class="head-footer justify-content-end flex-row no-margin row">
            <div class="col-50rem dark-bg top-menu rounded-left-bottom no-margin no-padding row text-center align-items-center overflow-visible">
                <div class="menu-item clearfix col2-4 h-100 rounded-left-bottom">
                    <span class="A-color index pr-4">A</span>
                    <router-link to="/index">Home</router-link>
                </div>
                <div class="menu-item clearfix col2-4 h-100 position-relative overflow-visible" @mouseenter = 'lectureEnter()'  @mouseleave = 'lectureLeave()'>
                    <span class="T-color index pr-4" :class = '{"opacity-0": !lectureShow, "opacity-1": lectureShow}'>T</span>
                    <!-- 添加 Lecture 路由 -->
                    <router-link to="/lecture">Lecture</router-link><span class="expansion iconfont icon-zhankai position-absolute"
                                                :class = '{"rotate-0": !lectureShow, "rotate-90": lectureShow}'></span>
                    <ul v-if="lectureShow" class="row position-absolute submenu light-bg w-100 d-block no-margin no-padding">
                        <li class="submenu-item no-margin w-100 text-center" v-for = "lecture in lectures" :key="lecture.id">
                            <!-- 循环内注册带 id 的 lecture 路由 -->
                            <router-link :to="lecture.link" :key="lecture.id">{{lecture.name}}</router-link>
                        </li>
                    </ul>
                </div>
                <div class="menu-item clearfix col2-4 h-100 position-relative" @mouseenter = 'analysisEnter()'  @mouseleave = 'analysisLeave()'>
                    <span class="C-color index pr-4" :class = '{"opacity-0": !analysisShow, "opacity-1": analysisShow}'>C</span>
                    <!-- 添加 Analysis 路由 -->
                    <router-link to="/analysis">Analysis</router-link><span class="expansion iconfont icon-zhankai position-absolute"
                                                :class = '{"rotate-0": !analysisShow, "rotate-90": analysisShow}'></span>
                    <ul v-if="analysisShow" class="row position-absolute submenu light-bg w-100 d-block no-margin no-padding">
                        <li class="submenu-item no-margin w-100 text-center" v-for = "analysis in analysises" :key="analysis.id">
                            <!-- 循环内注册带 id 的 analysis 路由 -->
                            <router-link :to="analysis.link" :key="analysis.id">{{analysis.name}}</router-link>
                        </li>
                    </ul>
                </div>
                <div class="menu-item clearfix col2-4 h-100">
                    <span class="G-color index pr-4">G</span>
                    <router-link to="/reflection">Reflection</router-link>
                </div>
                <div class="menu-item clearfix col2-4 h-100">
                    <span class="U-color index pr-4">U</span>
                    <router-link to="/profile">Profile</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    name: 'header',
    data () {
        let data_ = {
            date: '',
            weather: ''
        }

        // 可以优化的地方
        // TODO map
        this.$store.dispatch('refreshLecutres')
        this.$store.dispatch('refreshAnalysises')
        return {
            date: data_['date'],
            weather: data_['weather'],
            lectures: this.$store.state.Lectures,
            analysises: this.$store.state.Analysises,
            lectureShow: false,
            analysisShow: false,
            musicOn: false
        }
    },
    methods: {
        lectureEnter () {
            this.lectureShow = true
        },
        lectureLeave () {
            this.lectureShow = false
        },
        analysisEnter () {
            this.analysisShow = true
        },
        analysisLeave () {
            this.analysisShow = false
        },
        togglePlay () {
            this.musicOn = !this.musicOn
        }
    },
    mounted () {
        $.getJSON('http://39.107.99.64:1221/weather?callback=?', (data) => {
            this.date = data.date
            this.weather = data.city.replace('h', 'H') + ':' + data.now
        })
    },
    watch: {
        musicOn: function () {
            let status = this.musicOn
            const audio = document.getElementById('audio')
            if (status) {
                audio.play()
            } else {
                audio.pause()
            }
        }
    }
}
</script>

<style scoped>
#header {
    z-index: 2;
}

.head-header {
    height: 2rem;
    font-size: 1.5rem;
}

.player {
    cursor: pointer;
}

.head-body{
    height: 8rem;
}

.webtitle{
    font-size: 3rem;
    color: #fff;
}

.input{
  height: 3rem;
  font-size: 1.5rem;
}

.icon-icon_sousuomian{
  cursor: pointer;
  font-size: 2.5rem !important;
  position: relative;
  top: 0.25rem;
}

.col2-4 {
    -webkit-box-flex: 0;
    flex: 0 0 20%;
    max-width: 20%;
}

.top-menu {
    font-size: 1.2rem;
    color: #fff;
    height: 3rem;
    line-height: 3rem;
}

.top-menu a,
.top-menu a:link,
.top-menu a:visited,
.top-menu a:hover,
.top-menu a:active{
    color: #fff;
    text-decoration: none;
}

.menu-item:hover{
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.3);
    text-shadow: 1px 1px 1px 1px rgba(0,0,0,0.3);
}

.menu-item::after{
    content: '|';
    color: #fff;
    font-size: 2rem;
    float: right;
}

.menu-item:last-child::after{
    content: ' '
}

/* 菜单颜色 */
.A-color {
    color: #f00;
    opacity: 0;
}
.T-color {
    color: #FFE800;
    opacity: 0;
}
.C-color {
    color: #00ff3d;
    opacity: 0;
}
.G-color {
    color: #a5d9ee;
    opacity: 0;
}
.U-color {
    color: #ff8600;
    opacity: 0;
}

.menu-item .index{
    transition: opacity 0.8s linear 0s;
}

.menu-item:hover .index {
    opacity: 1.0;
}

.expansion {
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    display: block;
    top: 0.5rem;
    right: 0.25rem;
    transition: transform 0.8s linear 0s;
    font-size: 0.8rem;
    transform-origin: center;
}

/* .menu-item:hover .expansion {
    transform: rotate(90deg);
} */

.submenu {
    top: 3rem;
    color:  #235383;
    left: 0rem;
    z-index: 9999999;

}

.submenu a,
.submenu a:link,
.submenu a:visited,
.submenu a:hover,
.submenu a:active
{
    color:  #235383;
    text-decoration: none;
}

.submenu-item:hover {
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.3);
    text-shadow: 1px 1px 1px 1px rgba(0,0,0,0.3);
}

ul {
    list-style: none;
}

.col-50rem {
    width: 70rem;
}
</style>
