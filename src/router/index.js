import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AxiosTestGet from '@/components/AxiosTestGet'
import AxiosTestFullGet from '@/components/AxiosTestFullGet'
import AxiosTestPost from '@/components/AxiosTestPost'
import AxiosTestFullPost from '@/components/AxiosTestFullPost'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/AxiosTestGet',
            name: 'AxiosTest',
            component: AxiosTestGet
        },
        {
            path: '/AxiosTestFullGet',
            name: 'AxiosTestFullGet',
            component: AxiosTestFullGet
        },
        {
            path: '/AxiosTestPost',
            name: 'AxiosTestPost',
            component: AxiosTestPost
        },
        {
            path: '/AxiosTestFullPost',
            name: 'AxiosTestFullPost',
            component: AxiosTestFullPost
        }
    ]
})