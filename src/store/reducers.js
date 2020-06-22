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

const AppRedux = combineReducers({
    //  二维码
    namespace_qrCode,
    //  loading
    namespace_loading,
    //  toast
    namespace_toast,
    //  选择的支付方式
    namespace_payType,
});
export default AppRedux;

