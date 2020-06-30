import axios from 'axios';
import { requestEndorse } from './utils';
import { appKey } from './constant';
import { Toast } from '../components/toast/toast';
import { Loading } from '../components/loading/loading';

//  定义中间件
axios.interceptors.response.use(
    (response) => {
        const data = response.data;
        //  如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
        //  或者是hachi公共的接口，获取ip那个
        const reg = /^\/hachi-api/;
        if ((response.status === 200 && +data.code === 1000) || reg.test(response.config.url)) {
            return Promise.resolve(data);
        }
        // 否则的话抛出错误
        return Promise.reject(data.msg);
    },
    // 服务器状态码不是2开头的的情况
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    // 下面列举几个常见的操作，其他需求可自行扩展
    error => {
        return Promise.reject(error.response);
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
    //  console.log(requestData, timestamp, auth);
    //  console.log(options.clientIp);
    return axios({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            auth,
            timestamp,
            appKey,
            channel: 'digital-center',
            clientIp: options.clientIp,
        },
        method: options.method,
        url: options.url,
        data: requestData,
        params: options.params,
    })
        .catch(v => {
            Toast.toastToggle(true, v, () => {
                Toast.toastToggle(false);
            });
            Loading.loadingToggle(false);
            return Promise.reject();
        });
}




