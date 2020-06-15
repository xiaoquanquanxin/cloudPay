import React from 'react';
import ReactDOM from 'react-dom';
import { remSet } from './utils/utils';
import './css/reset.css';
import { BasicStruct } from './components/basicStruct.jsx';
//  设置字体大小
remSet(window, document);

ReactDOM.render(
    <BasicStruct/>,
    document.getElementById('root'),
);