// import './index.css';

// import { Game } from './components/game.jsx';
// import { KnowLedge } from './components/knowLedge';
//
// //  功能
// ReactDOM.render(
//     <Game/>,
//     document.getElementById('root'),
// );
//
// //  笔记
// ReactDOM.render(
//     <KnowLedge i={new Date().toLocaleString()}/>,
//     document.getElementById('log'),
// );

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