//  Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的，
import { combineReducers } from 'redux';
//  二维码
import { namespace_qrCode } from './reducer_qrcode';
//  loading
import { namespace_loading } from './reducer_loading';
//  toast
import { namespace_toast } from './reducer_toast';
//  选择的支付方式
import { namespace_payType } from './reducer_pay_type';
//  确认订单的数据
import { namespace_orderConfirm } from './reducer_order_confirm';
//  费用支付页面的数据
import { namespace_feesPaid } from './reducer_fees_paid';

const AppRedux = combineReducers({
    //  二维码
    namespace_qrCode,
    //  loading
    namespace_loading,
    //  toast
    namespace_toast,
    //  选择的支付方式
    namespace_payType,
    //  确认订单的数据
    namespace_orderConfirm,
    //  确认订单的数据
    namespace_feesPaid
});
export default AppRedux;

