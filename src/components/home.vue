<template>
    <div id="home" class="container-fluid py-5">
        <div class="row justify-content-center align-items-center">
            <!-- 左侧网页链接 -->
            <div class="col-3 links text-center">
                <div class="row">
                    <div class="col-12">Links</div>
                    <div class="w-100"></div>
                    <ul class="w-100 no-margin no-padding">
                        <li v-for = "(link, index) in links" :key="index" class="no-margin no-padding py-2">
                            <a :href="link.link" target="_blank">{{link.name}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 中间轮播图 -->
            <div class="col-6 justify-content-center">
                <div id="carouselExampleIndicators" class="carousel slide col-11" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>

                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="http://python-zhang.oss-cn-shanghai.aliyuncs.com/cat/images/1.jpeg" class="d-block" alt="Lecture" @click="linkTo(1)">
                            <div class="carousel-caption d-none d-md-block">
                                <h3>LECTURE</h3>
                                <p class="h5">learn basic content of Bioinformatics and web design</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="http://python-zhang.oss-cn-shanghai.aliyuncs.com/cat/images/2.jpeg" class="d-block" alt="Analysis" @click="linkTo(2)">
                            <div class="carousel-caption d-none d-md-block">
                                <h3>ANALYSIS</h3>
                                <p class="h5">analysis your sequences and enjoy my protein journey</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="http://python-zhang.oss-cn-shanghai.aliyuncs.com/cat/images/3.gif" class="d-block" alt="Reflection" @click="linkTo(3)">
                            <div class="carousel-caption d-none d-md-block">
                                <h3>REFLECTION</h3>
                                <p class="h5">during the 8 weeks learning, I harvested a lot</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="http://python-zhang.oss-cn-shanghai.aliyuncs.com/cat/images/4.png" class="d-block" alt="Profile"  @click="linkTo(4)">
                            <div class="carousel-caption d-none d-md-block">
                                <h3>PROFILE</h3>
                                <p class="h5">something about me and my hometown Hangzhou</p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <!-- 右侧登录 -->
            <div class="col-2 dark-bg mr-2" id="login">
                <div class="row flex-row flex-no-wrap justify-content-center">
                    <div class="avatar"></div>
                    <div class="w-100 my-1"></div>
                    <div class="col-12 h3 my-2 text-white">Hi,visitor~</div>
                    <div class="w-100 my-1"></div>
                    <div class="col-12 my-2">
                        <form action="#" method="get" class="text-white" autocomplete="off">
                            <div class="row flex-row flex-no-wrap justify-content-center">
                                <label for="username" style="width:6rem;">Username&emsp;</label>
                                <input type="text" id="username" style="width: 10rem;" placeholder="username">
                            </div>
                            <div class="w-100 py-2"></div>
                            <div class="row flex-row flex-no-wrap justify-content-center">
                                <label for="password" style="width:6rem;">Password&emsp;</label>
                                <input type="password" id="password" style="width: 10rem;" placeholder="password">
                            </div>
                            <button type="reset" class="btn btn-info my-5 mr-5">Reset</button>
                            <button type="submit" class="btn btn-info my-5">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    name: 'home',
    mounted () {
        const carousel = $('#carouselExampleIndicators')
        const width = carousel.width()
        const height = width * 0.618
        carousel.height(height)
        carousel.find('img').each((index, element) => {
            $(element).height(height)
        })
        // const avatar = $('.avatar')
        // avatar.height(avatar.width())
    },
    data () {
        let links = []
        // 链接1
        links.push({
            name: 'Zhejiang University',
            link: 'https://www.zju.edu.cn'
        })
        // 链接2
        links.push({
            name: 'Ming Chen\'s Group',
            link: 'http://www.cls.zju.edu.cn/binfo/'
        })
        // 链接3
        links.push({
            name: 'College of Life Sciences',
            link: 'http://www.cls.zju.edu.cn'
        })
        // 链接4
        links.push({
            name: 'NCBI',
            link: 'https://www.ncbi.nlm.nih.gov/'
        })
        // 链接5
        links.push({
            name: 'Uniprot',
            link: 'https://www.uniprot.org/help/uniprotkb/'
        })
        return {
            links
        }
    },
    methods: {
        linkTo (index) {
            let link = '/index'
            if (index === 1) {
                link = '/lecture'
            }
            if (index === 2) {
                link = '/analysis'
            }
            if (index === 3) {
                link = '/relection'
            }
            if (index === 4) {
                link = '/profile'
            }
            console.log(link)
            this.$router.push({
                path: link
            })
        }
    }
}
</script>

<style scoped>
#carouselExampleIndicators{
    overflow: hidden;
    width: 100%;
    /* height: 50rem; */
}

#carouselExampleIndicators img {
    width: 100%;
    /* height: 50rem; */
}

ul {
    list-style: none;
}

.links {
    font-size: 2rem;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    flex: row;
    align-items: center;
    flex-wrap: nowrap;
}

.links a,
.links a:link,
.links a:visited,
.links a:hover,
.links a:active{
    color: #000;
    text-decoration: none;
    font-weight: normal;
}

.carousel-caption p{
    font-size: 2rem;
}

/* 箭头的大小 */
.carousel-control-prev-icon,
.carousel-control-next-icon {
    width: 2rem;
    height: 2rem;
}

.avatar {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    background-image: url("http://python-zhang.oss-cn-shanghai.aliyuncs.com/cat/images/avatar.gif");
    margin-top: 3rem;
    background-repeat: no-repeat;
    background-position: center center;
}

</style>
