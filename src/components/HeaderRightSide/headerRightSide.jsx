import React from 'react';
import './headerRightSide.css';
import '../../css/color.css';

export function HeaderRightSide(props){
    let innerHtml = '';
    if (props.hasRightSide) {
        innerHtml = '确认订单';
    }
    return (
        <span className='header-right-side color-grey'>{innerHtml}</span>
    );
}