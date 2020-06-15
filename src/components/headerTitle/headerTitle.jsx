import React from 'react';
import './headerTitle.css'
//  头部组件
export function HeaderTitle(props){
    return (
        <span className='header-title'>{props.title}</span>
    );
}