import Vue from 'vue'
import Router from 'vue-router'

import LandingPage from './components/Logoin/LandingPage'
import Register from './components/Logoin/Register'
import Home from "./components/Home"


import Analysis from './views/Dashboard/Analysis/Home'
import Monitor from './views/Dashboard/Monitor/Home'
import Workplace from './views/Dashboard/Workplace/Home'

import BasicForm from './views/From/BasicForm/Home'
import StepForm from './views/From/StepForm/Home'
import AdvancedForm from './views/From/AdvancedForm/Home'

import SearchList from './views/List/SearchList/Home'
import SearchTable from './views/List/SearchTable/Home'
import BasicList from './views/List/BasicList/Home'
import CardList from './views/List/CardList/Home'

import BasicProfile from './views/Profile/BasicProfile'
import AdvancedProfile from './views/Profile/AdvancedProfile'

import Fail from './views/Result/Fail'
import Success from './views/Result/Success'

import Exception_403 from "./views/Exception/Exception_403"
import Exception_404 from "./views/Exception/Exception_404"
import Exception_500 from "./views/Exception/Exception_500"

import AccountCenter from "./views/Account/AccountCenter"
import AccountSettings from "./views/Account/AccountSettings"

import ProcessEditor from "./views/GraphEditor/ProcessEditor"


Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/LandingPage',
      component: LandingPage
    },
    {
      path: '/Register',
      component: Register
    },
    {
      path: '/Home',
      component: Home,
      children: [
        {
          path: '/Analysis',
          component: Analysis,
        },
        {
          path: "/Monitor",
          component: Monitor,
        },
        {
          path: "/Workplace",
          component: Workplace,
        },
        {
          path: "/BasicForm",
          component: BasicForm,

        },
        {
          path: "/StepForm",
          component: StepForm,

        },
        {
          path: "/AdvancedForm",
          component: AdvancedForm
        },
        {
          path: "/SearchList",
          component: SearchList
        },
        {
          path: "/SearchTable",
          component: SearchTable
        },
        {
          path: "/BasicList",
          component: BasicList
        },
        {
          path: "/CardList",
          component: CardList
        },

        {
          path: "/BasicProfile",
          component: BasicProfile
        },
        {
          path: "/AdvancedProfile",
          component: AdvancedProfile
        },
        {
          path: "/Fail",
          component: Fail
        },
        {
          path: "/Success",
          component: Success
        },
        {
          path: "/Exception_403",
          component: Exception_403
        },
        {
          path: "/Exception_404",
          component: Exception_404
        },
        {
          path: "/Exception_500",
          component: Exception_500
        },
        {
          path: "/AccountCenter",
          component: AccountCenter
        },
        {
          path: "/AccountSettings",
          component: AccountSettings
        },
        {
          path: "/ProcessEditor",
          component: ProcessEditor
        },
   
        {
          path: "",//默认显示
          redirect: '/Analysis'
        },
      ]
    },

    {
      path: "",//默认显示
      redirect: '/LandingPage'
    },
  ]
})
