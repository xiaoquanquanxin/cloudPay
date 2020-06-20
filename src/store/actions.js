//  支付谈框是否打开的action
export const ACTION_1 = 'QR_CODE_IS_SHOW';

//  支付谈框是否打开的action function
export function setqrCodeIsShow(isShow, qrCodeImg){
    // console.log('执行action');
    return { type: ACTION_1, isShow, qrCodeImg };
}

//  是否loading
export const ACTION_2 = 'LOADING_IS_SHOW';

//  是否loading
export function setLoadingIsShow(isShow){
    return { type: ACTION_2, isShow };
}