import React from 'react';
import './subTitle.less';
import { isWX } from '@utils/utils';

const iswx = isWX();

//  副标题
export function SubTitle({ text }){
    const className = 'sub-title ' + (iswx ? 'iswx' : '');
    return (
        <div className={className}>{text}</div>
    );
}