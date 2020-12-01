import { getconfig } from '@/api/getconfig'//引入登录 api 接口
import { setconfig } from '@/api/getconfig'

const yaml = {
    actions: {
        // 获取配置
        Getconfig({ commit }, propertyReq) { //定义 Login 方法，在组件中使用 this.$store.dispatch("Login") 调用
            return new Promise((resolve, reject) => { //封装一个 Promise
                getconfig(propertyReq).then(response => { //使用 login 接口进行网络请求
                    commit('') //提交一个 mutation，通知状态改变
                    resolve(response) //将结果封装进 Promise
                }).catch(error => {
                    reject(error)
                })
            })
        },// 设置配置
        Setconfig({ commit }, propertyReq) { //定义 Login 方法，在组件中使用 this.$store.dispatch("Login") 调用
            return new Promise((resolve, reject) => { //封装一个 Promise
                setconfig(propertyReq).then(response => { //使用 login 接口进行网络请求
                    commit('') //提交一个 mutation，通知状态改变
                    resolve(response) //将结果封装进 Promise
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }

}
export default yaml