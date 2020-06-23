//  Action 是把数据从应用传到 store 的有效载荷。它是 store 数据的唯一来源。
//  记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。

import { ACTION_ORDER_CONFIRM } from './actions';

//  支付类型
export function namespace_orderConfirm(state = {}, action){
    const { type, data } = action;
    if (type === ACTION_ORDER_CONFIRM) {
        return Object.assign({}, state, data);
    }
    return state;
}