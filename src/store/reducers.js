//  Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的，
import { combineReducers } from 'redux';
//  二维码
import { namespace_QRCode } from './reducer_qrcode';

const AppRedux = combineReducers({
    //  二维码
    namespace_QRCode,
});
export default AppRedux;

