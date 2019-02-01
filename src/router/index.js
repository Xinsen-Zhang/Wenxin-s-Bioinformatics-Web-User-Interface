import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld' //  @表示从src目录开始
// import HelloWorld2 from '@/components/HelloWorld2'
import Lecture from '@/components/Lecture'
import Analysis from '@/components/Analysis'
import Home from '@/components/Home'
import Reflection from '@/components/Reflection'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/index',
      name: 'Index',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/lecture',
      name: 'Lecture',
      component: Lecture
    },
    {
      path: '/lecture/:id',
      name: 'Lecture-with-id',
      component: Lecture
    },
    {
      path: '/analysis',
      name: 'Analysis',
      component: Analysis
    },
    {
      path: '/analysis/:id',
      name: 'Analysis-with-id',
      component: Analysis
    },
    {
      path: '/reflection',
      name: 'Reflection',
      component: Reflection
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
