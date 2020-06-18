//  Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的，
//  记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。
import { combineReducers } from 'redux';
import {
    aaa
} from './actions';

//  打开，关闭支付谈框
function namespace_QRCode(state = { isShow: false, QRCodeImg: null, }, action){
    if (action.type === aaa) {
        return {
            isShow: action.isShow,
            QRCodeImg: action.QRCodeImg
        };
    }
    return state;
}

const AppRedux = combineReducers({
    namespace_QRCode,
});
export default AppRedux;

