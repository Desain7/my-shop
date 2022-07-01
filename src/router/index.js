import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/index.vue'
import Login from '../pages/Login/index.vue'
import Register from '../pages/Register/index.vue'
import Search from '../pages/Search/index.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            name: 'home',
            path: '/home',
            component:Home,
            meta:{footerShow:true} //路由元信息
        },
        {
            name: 'login',
            path: '/login',
            component:Login,
            meta:{footerShow:false}
        },
        {
            name:'register',
            path: '/register',
            component:Register,
            meta:{footerShow:false}
        },
        {
            name:'search',
            path: '/search/',
            component:Search,
            meta:{footerShow:true}
        },
        {
            path: '/',
            component:Home,
            meta:{footerShow:true}
        },
    ]
})