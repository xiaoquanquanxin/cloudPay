//  支付谈框是否打开的action
export const ACTION_QR_CODE_IS_SHOW = 'ACTION_QR_CODE_IS_SHOW';

//  支付谈框是否打开的action function
export function setQrCodeIsShow(qrIsShow, qrCodeImg){
    // console.log('执行action');
    return { type: ACTION_QR_CODE_IS_SHOW, qrIsShow, qrCodeImg };
}

//  是否loading
export const ACTION_LOADING_IS_SHOW = 'ACTION_LOADING_IS_SHOW';

//  是否loading
export function setLoadingIsShow(isShow){
    return { type: ACTION_LOADING_IS_SHOW, isShow };
}

//  是否打开toast
export const ACTION_TOAST = 'ACTION_TOAST';

//  是否loading
export function setToastIsShow(isShow, text, confirmClick, cancelClick){
    return { type: ACTION_TOAST, isShow, text, confirmClick, cancelClick };
}