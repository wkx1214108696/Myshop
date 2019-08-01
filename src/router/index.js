import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Order from '@/components/Order'
import Shopcart from '@/components/Shopcart'
import ProductList from '@/components/ProductList'
import ProductDetail from '@/components/ProductDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/order',
      name: 'Order',
      component: Order

    },
    {
      path: '/Shopcart',
      name: 'Shopcart',
      component: Shopcart

    },
    {
      path: '/productList',
      name: 'ProductList',
      component: ProductList

    },
    {
      path: '/productDetail',
      name: 'ProductDetail',
      component: ProductDetail

    }
  ]
})
