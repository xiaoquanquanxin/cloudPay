import React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '@store/reduxMap';
import './toast.less';
import '@css/color.less';

//  弹框的title logo
import toast_logo from '@images/toast_logo.png';

//  弹框组件
export const Toast = connect(
    mapStateToProps,
    mapDispatchToProps
)(
    ({ namespace_toast, toastToggle }) => {
        //  console.log('🍎弹框组件', namespace_toast);
        Toast.toastToggle = toastToggle;
        const { isShow, text, confirmClick, cancelClick } = namespace_toast;
        if (!isShow) {
            return '';
        }
        //  确认按钮
        const ConfirmButton = confirmClick ? (
            <button
                className='footer-btn-blue'
                onClick={confirmClick}
            >确定</button>
        ) : '';
        //  取消按钮
        const CancelButton = cancelClick ? (
            <button
                className='footer-btn-red'
                onClick={cancelClick}
            >取消</button>
        ) : '';
        //  底部有按钮吗？
        // console.log(!!(confirmClick && cancelClick));
        const hasFooterButtons = (confirmClick || cancelClick) ? (
            <div className='toast-buttons'>
                {CancelButton}
                {ConfirmButton}
            </div>
        ) : '';
        const containerClassName = 'toast-container ' + (hasFooterButtons ? 'pad' : '');
        return (
            <div id='toast' className='toast-mask basic-full-mask'>
                <div className={containerClassName}>
                    <img className='toast_logo' src={toast_logo} alt=""/>
                    <p className='text color-dark'>{text}</p>
                    {hasFooterButtons}
                </div>
            </div>
        );
    }
);