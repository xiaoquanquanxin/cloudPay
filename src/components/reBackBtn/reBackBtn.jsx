import React from 'react';
import '../../css/basic.css';
import './reBackBtn.css';
import { ArrowsHead } from '../arrowsHead/arrowsHead';

//  返回按钮
export function ReBackBtn(){
    return (
        <button className='fl re-back-btn' onClick={() => {console.log('返回');}}>
            {/*箭头*/}
            <ArrowsHead/>
            <span>返回</span>
        </button>
    );
}