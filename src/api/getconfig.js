import request from '@/utils/request' //引入封装好的 axios 请求

export function getconfig(propertyReq) { //登录接口
    return request({ //使用封装好的 axios 进行网络请求
        url: '/getProperties',
        method: 'post',
        data: propertyReq
    })
}

export function setconfig(propertyReq) { //登录接口
    return request({ //使用封装好的 axios 进行网络请求
        url: '/setProperties',
        method: 'post',
        data: propertyReq
    })
}