import Vue from 'vue'
import Router from 'vue-router'

import Fenxiye from './views/Dashboard/FXY/Fenxiye.vue'
import Jiankongye from './views/Dashboard/JKY/Jiankongye.vue'
import Gongzuotai from './views/Dashboard/GZT/Gongzuotai.vue'

import Jcbd from './views/BDY/JCBD/Jcbd.vue'
import Fbbdtitle from './views/BDY/FBBD/Fbbdtitle.vue'
import Gjbd from './views/BDY/GJBD/Gjbd.vue'

import table_wz from './views/LBY/table-ss/table_wz'
import table_xm from './views/LBY/table-ss/table_xm_list'
import table_yy from './views/LBY/table-ss/table_yy_item.vue'
import table_cx from './views/LBY/table-cx/table_cx'
import table_bz from './views/LBY/tables-bz/table_bz'
import table_kp from './views/LBY/table-kp/table_kp_title'

import JCXQ from './views/XQY/JCXQ'
import GJXQ from './views/XQY/GJXQ'

import CGY from './views/GGY/CGY'
import SBY from './views/GGY/SBY'

import ycy_403 from "./views/YCY/ycy_403"
import ycy_404 from "./views/YCY/ycy_404"
import ycy_500 from "./views/YCY/ycy_500"

import GRZX from "./views/GRY/GRZX"
import GRPZ from "./views/GRY/GRPZ"

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
      component:Fbbdtitle,

    },
    {
      path:"/gjbd",
      component:Gjbd
    },
    {
      path:"/table_wz",
      component:table_wz
    },
    {
      path:"/table_xm",
      component:table_xm
    },
    {
      path:"/table_yy",
      component:table_yy
    },
    {
      path:"/table_cx",
      component:table_cx
    },
    {
      path:"/table_bz",
      component:table_bz
    },
    {
      path:"/table_kp",
      component:table_kp
    },

    {
      path:"/JCXQ",
      component:JCXQ
    },
    {
      path:"/GJXQ",
      component:GJXQ
    },
    {
      path:"/cgy",
      component:CGY
    },
    {
      path:"/sby",
      component:SBY
    },
    {
      path:"/ycy_403",
      component:ycy_403
    },
    {
      path:"/ycy_404",
      component:ycy_404
    },
    {
      path:"/ycy_500",
      component:ycy_500
    },
    {
      path:"/GRZX",
      component:GRZX
    },
    {
      path:"/GRPZ",
      component:GRPZ
    },

    {
      path:"",//默认显示
      redirect:'/fenxiye'
    },

  ]
})
