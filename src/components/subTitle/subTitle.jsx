import React from 'react';
import './subTitle.css';

//  副标题
export function SubTitle({ text, history }){
    // console.log('🍊', history, text);
    return (
        <div className='sub-title'>{text}</div>
    );
}