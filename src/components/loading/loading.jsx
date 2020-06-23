import React from 'react';
import './loading.css';
import '../../css/reset.css';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../store/reduxMap';

//  Loading
export const Loading = connect(
    mapStateToProps,
    mapDispatchToProps
)(
    ({ namespace_loading, loadingToggle }) => {
        const { isShow } = namespace_loading;
        Loading.loadingToggle = loadingToggle;
        // console.log('🍎Loading', isShow);
        const loadingClassName = isShow ? 'loading-mask basic-full-mask' : 'hide';
        return (
            <div id='loading' className={loadingClassName}>
                <svg className='loading-content' xmlns='http://www.w3.org/2000/svg' width='120' height='120'
                     viewBox='0 0 100 100'>
                    <path fill='none' d='M0 0h100v100H0z'/>
                    <rect width='7' height='20' x='46.5' y='40' fill='#E9E9E9' rx='5' ry='5'
                          transform='translate(0 -30)'/>
                    <rect width='7' height='20' x='46.5' y='40' fill='#989697' rx='5' ry='5'
                          transform='rotate(30 105.98 65)'/>
                    <rect width='7' height='20' x='46.5' y='40' fill='#9B999A' rx='5' ry='5'
                          transform='rotate(60 75.98 65)'/>
                    <rect width='7' height='20' x='46.5' y='40' fill='#A3A1A2' rx='5' ry='5'
                          transform='rotate(90 65 65)'/>
                    <rect width='7' height='20' x='46.5' y='40' fill='#ABA9AA' rx='5' ry='5'
                          transform='rotate(120 58.66 65)'/>
                    <rect width='7' height='20' x='46.5' y='40' fill='#B2B2B2' rx='5' ry='5'
                          transform='rotate(150 54.02 65)'/>
                    <rect width='7' height='20' x='46.5' y='40' fill='#BAB8B9' rx='5' ry='5'
                          transform='rotate(180 50 65)'/>
                    <rect width='7' height='20' x='46.5' y='40' fill='#C2C0C1' rx='5' ry='5'
                          transform='rotate(-150 45.98 65)'/>
                    <rect width='7' height='20' x='46.5' y='40' fill='#CBCBCB' rx='5' ry='5'
                          transform='rotate(-120 41.34 65)'/>
                    <rect width='7' height='20' x='46.5' y='40' fill='#D2D2D2' rx='5' ry='5'
                          transform='rotate(-90 35 65)'/>
                    <rect width='7' height='20' x='46.5' y='40' fill='#DADADA' rx='5' ry='5'
                          transform='rotate(-60 24.02 65)'/>
                    <rect width='7' height='20' x='46.5' y='40' fill='#E2E2E2' rx='5' ry='5'
                          transform='rotate(-30 -5.98 65)'/>
                </svg>
            </div>
        );
    }
);


