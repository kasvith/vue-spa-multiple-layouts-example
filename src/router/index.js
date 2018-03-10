import Vue from 'vue'
import Router from 'vue-router'
import MyComponent from '@/components/MyComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyComponent',
      component: MyComponent
    }
  ]
})
