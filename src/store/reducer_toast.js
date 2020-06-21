//  Action 是把数据从应用传到 store 的有效载荷。它是 store 数据的唯一来源。
//  记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。

import { ACTION_TOAST } from './actions';

//  打开，关闭普通对话框
export function namespace_toast(state = {
    isShow: false,
    text: '',
    confirmClick: null,
    cancelClick: null,
}, action){
    if (action.type === ACTION_TOAST) {
        return {
            isShow: action.isShow,
            text: action.text,
            confirmClick: action.confirmClick,
            cancelClick: action.cancelClick,
        };
    }
    return state;
}