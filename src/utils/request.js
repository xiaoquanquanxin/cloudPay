import axios from 'axios';
import { requestEndorse } from './utils';
import { appKey } from './constant';
//  定义中间件
axios.interceptors.response.use(
    response => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
        // 否则的话抛出错误
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是2开头的的情况
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    // 下面列举几个常见的操作，其他需求可自行扩展
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。
                case 401:
                    break;
                // 403 token过期
                // 登录过期对用户进行提示
                // 清除本地token和清空vuex中token对象
                // 跳转登录页面
                case 403:
                    //  todo
                    break;
                // 404请求不存在
                case 404:
                    //  todo
                    break;
                // 其他错误，直接抛出错误提示
                default:
                    break;
            }
            return Promise.reject(error.response);
        }
    }
);

//  疯转请求
export function request(options){
    //  加签完毕的数据
    const {
        requestData,
        timestamp,
        auth,
    } = requestEndorse(options.data);
    // console.log(requestData, timestamp, auth);
    return axios({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            auth,
            timestamp,
            channel: 'digital-center',
            clientIp: '192.168.50.91',
            appKey
        },
        method: options.method,
        url: options.url,
        data: requestData,
    });
}




