import Vue from 'vue'
import Router from 'vue-router'

import Fenxiye from './views/Dashboard/FXY/Fenxiye.vue'
import Jiankongye from './views/Dashboard/JKY/Jiankongye.vue'
import Gongzuotai from './views/Dashboard/GZT/Gongzuotai.vue'

import Jcbd from './views/BDY/JCBD/Jcbd.vue'
import Fbbdtitle from './views/BDY/FBBD/Fbbdtitle.vue'
import Gjbd from './views/BDY/GJBD/Gjbd.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/fenxiye',
      component:Fenxiye,
    },
    {
      path:"/Jiankongye",
      component:Jiankongye, 
    },
    {
      path:"/gongzuotai",
      component:Gongzuotai,
    },
    {
      path:"/jcbd",
      component:Jcbd,
     
    },
    {
      path:"/fbbdtitle",
      component:Fbbdtitle
    },
    {
      path:"/gjbd",
      component:Gjbd
    },
    {
      path:"",//默认显示
      redirect:'/fenxiye'
  }
  ]
})
