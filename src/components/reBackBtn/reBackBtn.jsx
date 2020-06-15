import React from 'react';
import './reBackBtn.css';
import { ArrowsHead } from '../arrowsHead/arrowsHead';

//  返回按钮
export function ReBackBtn(){
    return (
        <button className='re-back-btn' onClick={() => {console.log('返回');}}>
            {/*箭头*/}
            <ArrowsHead/>
            <span>返回</span>
        </button>
    );
}