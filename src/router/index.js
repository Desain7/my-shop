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
            path: '/home',
            component:Home,
            meta:{footerShow:true} //路由元信息
        },
        {
            path: '/login',
            component:Login,
            meta:{footerShow:false}
        },
        {
            path: '/register',
            component:Register,
            meta:{footerShow:false}
        },
        {
            path: '/search',
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