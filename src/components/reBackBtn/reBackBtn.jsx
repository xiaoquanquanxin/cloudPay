import React from 'react';
import './reBackBtn.css';
import '../../css/color.css';
import { ArrowsHead } from '../arrowsHead/arrowsHead';

//  返回按钮
export function ReBackBtn({ history }){
    return (
        <button className='re-back-btn' onClick={() => {
            console.log('返回');
            history.go(-1);
        }}>
            {/*箭头*/}
            <ArrowsHead/>
            <span className='color-grey'>返回</span>
        </button>
    );
}