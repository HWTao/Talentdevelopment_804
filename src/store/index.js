import Vue from 'vue'
import Vuex from 'vuex'
import {
    getMenu,
    getNotice,
    getNameAndDepartmentName
} from '@/api/index'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        UserInfo: {},
        message: {},
        menuArrInfo: {}
    },
    getters: {

    },
    mutations: {},
    actions: {
        getMenu({ state }, paylod) {
            return new Promise(relove => {
                getMenu(paylod).then(res => {
                    state.menuArrInfo = res.menuArrInfo
                    relove()
                })
            })
        },
        getNotice({ state }, paylod) {
            return new Promise(relove => {
                getNotice(paylod).then(res => {
                    state.message = res.message
                    relove()
                })
            })
        },
        getNameAndDepartmentName({ state }, paylod) {
            return new Promise(relove => {
                getNameAndDepartmentName(paylod).then(res => {
                    state.UserInfo = res.message
                    relove()
                })
            })
        },

    }
})


export default store