<template>
    <div id="footer" class='dark-bg'>
        <div class="foot-main w-100 position-relative">
            <span class="address">Zhejiang University Zijingang Campus, Zhejiang, China</span>
            <span class="contact">
                <router-link to="/profile/#contact">Contact me</router-link>
                <!-- <a href="/profile/#">Contact me</a> -->
            </span>
        </div>
        <div class="copyright w-100 position-relative">
            <span class="balabala">© 2019 WENXIN XU ALL rights reserved.</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'footer'
}
</script>

<style scoped>
#footer {
    color: #fff;
    font-size: 2rem;
    height: 15rem;
}

#footer div {
    z-index: 10;
}

.foot-main {
    padding-top: 5rem;
    padding-bottom: 2rem;
}

.address::after {
    content: "|";
    padding-left: 1rem;
    padding-right: 1rem;
}

.copyright {
    padding-bottom: 2rem;
}

.foot-main a,
.foot-main a:link,
.foot-main a:visited,
.foot-main a:hover,
.foot-main a:active{
    color: #fff;
    text-decoration: none;
}
</style>
