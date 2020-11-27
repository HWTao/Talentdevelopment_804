import Vue from 'vue'
import Vuex from 'vuex'
import { getUserInfo } from '@/api/index'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {

    },
    getters: {

    },
    mutations: {},
    actions: {
        getUserInfo({ state }, paylod) {
            return new Promise(relove => {
                getUserInfo(paylod).then(res => {
                    console.log(state, res);
                    relove()
                })
            })
        }

    }
})


export default store