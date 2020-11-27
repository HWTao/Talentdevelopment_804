import Axios from 'axios'
import { Toast } from 'vant'

//创建axios实例
const axios = Axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 5000, //超时
})

let loading = null

axios.interceptors.request.use(config => {
    if (!config.data || !config.data.isHideLoading) {
        loading = Toast.loading({
            message: '加载中...',
            duration: 0,
            forbidClick: true
        })
    }
    config.data !== undefined && config.data.isHideLoading !== undefined && delete config.data['isHideLoading']

    return config
}, error => {
    //请求错误预处理
    return Promise.reject(error)
})

//响应拦截
axios.interceptors.response.use(response => {
    if (loading) {
        loading.clear()
    }
    //仅返回数据部分
    const res = response.data
    if (res.code !== '0000') {
        return Promise.reject(new Error(res.msg || 'Error'))
    } else {
        return res
    }
}, error => {
    if (loading) {
        loading.clear()
    }
    Toast(error.message)
    return Promise.reject(error)
})

export default axios