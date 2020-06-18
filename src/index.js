import React from 'react';
import ReactDOM from 'react-dom';
import { remSet } from './utils/utils';
import './css/reset.css';
import { App } from './layout/router';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import AppRedux from './store/reducers';
// import { setQRCodeIsShow } from './store/actions';
//  设置字体大小
remSet(window, document);

let store = createStore(AppRedux);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'),
);

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
const unsubscribe = store.subscribe(() => console.log(store.getState()));
// store.dispatch(setQRCodeIsShow(true));
// 停止监听 state 更新
unsubscribe();