<template>
    <div class="container-fluid py-5 py-5" id="lecture">
        <div class="row">
            <div id="catlog" class="col-3 position-fixed">
                <div class="row">
                    <div class="w-100 catlog">
                        Catalog
                    </div>
                    <div class="col-12" v-for = "lecture in catlog" :key = "lecture.key">
                        <router-link :to="lecture.link">{{lecture.name}}</router-link>
                    </div>
                </div>
            </div>
            <div class="col-3"></div>
            <div id="content" class="col-9 text-left">
                <div id="title" v-html = "content.name" class="title"></div>
                <div id="context" v-html = "content.context" class="text-left"></div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    name: 'lecture',
    data () {
        let id_ = this.$route.params.id ? this.$route.params.id : 1
        this.$store.dispatch('getLectureContent', id_)
        return {
            catlog: this.$store.state.Lectures,
            content: ''
        }
    },
    mounted () {
        setTimeout(() => {
            this.content = this.$store.state.lectureContent
        }, 800)
        setTimeout(() => {
            if (this.$route.path === '/lecture/4' || this.$route.path === '/lecture/5') {
                let _this = this
                const jounrey = document.getElementById('proteinJourney')
                $(jounrey).on('click', function (e) {
                    e.preventDefault()
                    _this.$router.push({
                        path: '/analysis/2'
                    })
                    return false
                })
            }
        }, 2000)
    },
    watch: {
        $route: {
            handler: function (newVal) {
                this.$store.dispatch('getLectureContent', newVal.params.id)
                setTimeout(() => {
                    this.content = this.$store.state.lectureContent
                }, 800)
                setTimeout(() => {
                    if (this.$route.path === '/lecture/4' || this.$route.path === '/lecture/5') {
                        let _this = this
                        const jounrey = document.getElementById('proteinJourney')
                        $(jounrey).on('click', function (e) {
                            e.preventDefault()
                            _this.$router.push({
                                path: '/analysis/2'
                            })
                            return false
                        })
                    }
                }, 2000)
            }
        }
    }
}
</script>

<style scoped>
.text-left {
    text-align: left !important;
}

.title {
    font-size: 3rem;
    font-weight: bolder;
    text-align: center !important;
}

#catlog {
    font-size: 2.5rem;
    top: 15rem;
    z-index: 99999;
}

.catlog {
    font-weight: bolder;
}

#catlog .col-12:hover {
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2);
    text-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2);
}

#context {
    font-size: 1.2rem;
}

#catlog a,
#catlog a:link,
#catlog a:visited,
#catlog a:hover,
#catlog a:active {
    color: #000;
    text-decoration: none;
}

</style>
