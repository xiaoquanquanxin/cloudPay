import React from 'react';
import './headerRightSide.css';

export function HeaderRightSide(props){
    let innerHtml = '';
    if (props.hasRightSide) {
        innerHtml = '确认订单';
    }
    return (
        <span className='header-right-side'>{innerHtml}</span>
    );
}