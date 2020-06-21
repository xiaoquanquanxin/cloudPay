import React from 'react';
import { isWX } from '../utils/utils';

//  请用微信打开
export function OpenWithWeChat(){
    const isWx = isWX();

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '0.3rem',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        }}>
            {isWx ? '404' : '请用微信打开'}
        </div>
    );
}