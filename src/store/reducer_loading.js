//  Action 是把数据从应用传到 store 的有效载荷。它是 store 数据的唯一来源。
//  记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。

import { ACTION_2 } from './actions';

//  打开，关闭支付谈框
export function namespace_Loading(state = { isShow: false, }, action){
    if (action.type === ACTION_2) {
        return {
            isShow: action.isShow,
        };
    }
    return state;
}