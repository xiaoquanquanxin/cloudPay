import React from 'react';
import './reBackBtn.less';
import '@css/color.less';
import { ArrowsHead } from '@components/arrowsHead/arrowsHead';

import { withRouter } from 'react-router-dom';
//  返回按钮
export const ReBackBtn = withRouter((
    { history, goRoute, ReBackBtnBefore }) => {
    // console.log('🍎返回');
    // console.log(goRoute);
    // console.log(ReBackBtnBefore);
    return (
        <button className='re-back-btn' onClick={() => {
            if (typeof goRoute === 'number') {
                if (goRoute === -1) {
                    history.goBack();
                } else {
                    history.go(goRoute);
                }
            } else {
                //  在pad支付那一页
                ReBackBtnBefore(
                    (params) => {
                        if (params) {
                            history.replace(params);
                            return;
                        }
                        history.replace(goRoute);
                    }
                );
            }
        }}>
            {/*箭头*/}
            <ArrowsHead/>
            <span className='color-grey'>返回</span>
        </button>
    );
});