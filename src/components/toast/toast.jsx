import React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../store/reduxMap';
import './toast.css';
import '../../css/color.css';

//  弹框组件
export const Toast = connect(
    mapStateToProps,
    mapDispatchToProps
)(
    ({ namespace_toast }) => {
        console.log('🍎弹框组件', namespace_toast);
        const { isShow, text, confirmClick, cancelClick } = namespace_toast;
        if (!isShow) {
            return '';
        }
        //  确认按钮
        const ConfirmButton = confirmClick ? (
            <button
                className='border-grey'
                onClick={confirmClick}
            >确定</button>
        ) : '';
        //  取消按钮
        const CancelButton = cancelClick ? (
            <button
                className='border-grey'
                onClick={cancelClick}
            >取消</button>
        ) : '';
        console.log(confirmClick && cancelClick);
        //  底部有按钮吗？
        const hasFooterButtons = (confirmClick || cancelClick) ? (
            <div className='toast-buttons border-grey'>
                {CancelButton}
                {ConfirmButton}
            </div>
        ) : '';
        const containerClassName = 'toast-container ' + (hasFooterButtons ? 'big' : '');
        return (
            <div id='toast' className='toast-mask'>
                <div className={containerClassName}>
                    <p className='text'>{text}</p>
                    {hasFooterButtons}
                </div>
            </div>
        );
    }
);