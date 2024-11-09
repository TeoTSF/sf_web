import React from 'react';

const YellowBtn = ({btnAction, children}) => {
    return (
        <button className='yellow_btn big bold btn_app flex al-c jf-c s_family' onClick={btnAction}>
            {children}
        </button>
    );
};

export default YellowBtn;