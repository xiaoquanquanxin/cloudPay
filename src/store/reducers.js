//  Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的，
import { combineReducers } from 'redux';
//  二维码
import { namespace_qrCode } from './reducer_qrcode';
import { namespace_loading } from './reducer_loading';
//
import { namespace_toast } from './reducer_toast';

const AppRedux = combineReducers({
    //  二维码
    namespace_qrCode,
    //  loading
    namespace_loading,
    //  toast
    namespace_toast,
});
export default AppRedux;

