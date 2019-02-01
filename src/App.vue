<template>
  <div id="app">
    <enter v-show="isFirst" :isFirst="isFirst"/>
    <loading v-show="!isFirst"/>
    <cat-head v-show="!isFirst"/>
    <back-to-top v-show="!isFirst"/>
    <!-- <router-link to="test">test</router-link> -->
    <router-view v-if="!isFirst"/>
    <cat-foot v-show="!isFirst"/>
  </div>
</template>

<script>

import enter from '@/components/enter'
import catHead from '@/components/CatHead'
import catFoot from '@/components/CatFoot'
import loading from '@/components/Loading'
import backToTop from '@/components/BackToTop'
import mapState from 'vuex'

import PubSub from 'pubsub-js'

export default {
  name: 'App',
  components: {
    catHead,
    catFoot,
    loading,
    backToTop,
    enter
  },
  data () {
    return {
      isFirst: true
    }
  },
  mounted() {
    const _this = this
    PubSub.subscribe('enter', (msg) => {
      _this.isFirst = false
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
