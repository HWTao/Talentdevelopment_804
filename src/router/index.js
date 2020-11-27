import Vue from 'vue'
import Router from 'vue-router'
import '@/assets/style/resetvant.less'
Vue.use(Router)

const router = new Router({
    routes: [{
        path: "/",
        meta: { title: "人才开发" },
        component: () =>
            import ("@/views/index"),
    }]
})

export default router