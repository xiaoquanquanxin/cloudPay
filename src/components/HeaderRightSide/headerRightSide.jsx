import React from 'react';
import './headerRightSide.css';
import '@css/color.less';

export function HeaderRightSide(props){
    const innerHtml = props.rightSide || '';
    return (
        <span className='header-right-side color-grey'>{innerHtml}</span>
    );
}