import React from 'react';
import ReactDOM from 'react-dom';
import { remSet } from './utils/utils';
import './css/reset.css';
import { App } from './layout/router';
//  设置字体大小
remSet(window, document);


ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);