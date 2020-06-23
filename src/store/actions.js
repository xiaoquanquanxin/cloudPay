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

//  是否toast
export function setToastIsShow(isShow, text, confirmClick, cancelClick){
    // console.log('是否toast action', isShow);
    return { type: ACTION_TOAST, isShow, text, confirmClick, cancelClick };
}

//  是否选择了支付类型
export const ACTION_PAY_TYPE = 'ACTION_PAY_TYPE';

//  是否loading
export function setPayType(payType){
    return { type: ACTION_PAY_TYPE, payType };
}

//
//
//  orderConfirm解析url获取
export const ACTION_ORDER_CONFIRM = 'ACTION_ORDER_CONFIRM';

//  数据
export function setOrderConfirm(data){
    return { type: ACTION_ORDER_CONFIRM, data };
}

//  feesPaid解析url获取
export const ACTION_FEES_PAID = 'ACTION_FEES_PAID';

//  数据
export function setFeesPaid(data){
    return { type: ACTION_FEES_PAID, data };
}