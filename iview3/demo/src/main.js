import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import { Tabs,Button,TabPane,RadioGroup,RadioButton} from 'element-ui';

Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Button)
Vue.use(RadioGroup)
Vue.use(RadioButton)

Vue.use(iView);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
