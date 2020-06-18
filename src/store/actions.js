//  Action 是把数据从应用传到 store 的有效载荷。它是 store 数据的唯一来源。
//  支付谈框是否打开的action
export const aaa = 'QR_CODE_IS_SHOW';
/*
 * action 创建函数
 * 支付谈框是否打开的action function
 */
export function setQRCodeIsShow(isShow, QRCodeImg){
    console.log('执行action');
    return { type: aaa, isShow, QRCodeImg };
}
