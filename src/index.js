import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import { App } from './layout/router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppRedux from './store/reducers';
import { basicConfig } from './utils/basicConfig';

//  基础配置
basicConfig();
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
// store.dispatch(setqrCodeIsShow(true));
// 停止监听 state 更新
unsubscribe();