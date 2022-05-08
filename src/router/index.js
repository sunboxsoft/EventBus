import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MockJsTest from '@/components/MockJsTest'
import MockJsAxios from '@/components/MockJsAxios'
import MockJsAxiosPost from '@/components/MockJsAxiosPost'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/MockJsTest',
            name: 'MockJsTest',
            component: MockJsTest
        },
        {
            path: '/MockJsAxios',
            name: 'MockJsAxios',
            component: MockJsAxios
        },
        {
            path: '/MockJsAxiosPost',
            name: 'MockJsAxiosPost',
            component: MockJsAxiosPost
        }
    ]
})