import axios from '@/utils/require'

//获取某个⼈某个菜单下授权的功能清单
export function getMenu(data) {
    data.params.cmd = "manager.rl_getFunMenuInfo"
    return axios.get("", data)
}

//获取通知接⼝
export function getNotice(data) {
    data.params.cmd = 'manager.rl_getNotification'
    return axios.get("", data)
}

//获取⼈员姓名和部⻔名称接⼝
export function getNameAndDepartmentName(data) {
    data.params.cmd = 'manager.rl_getNameAndDepartmentName'
    return axios.get("", data)
}