import React from 'react';
import './subTitle.css';
//  副标题
export function SubTitle(props){
    return (
        <div className='sub-title'>{props.text}</div>
    );
}