import React from 'react';
import './headerTitle.css';
import '@css/color.css';

//  头部组件
export function HeaderTitle(props){
    return (
        <span className='header-title color-dark'>{props.title}</span>
    );
}