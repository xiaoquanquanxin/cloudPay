import './arrowsHead.css';
import React from 'react';
import arrowsHeadSrc from '../../images/arrowsHead.png';

//  箭头
export function ArrowsHead(){
    return (
        <img className='arrows-img' src={arrowsHeadSrc} alt='返回'/>
    );
}

//  {/*<span className='arrows-head'>*/}
//  {/*    <span className='arrows-content left-pos'/>*/}
//  {/*</span>*/}