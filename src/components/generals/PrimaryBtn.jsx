import React from 'react';

const PrimaryBtn = ({btnAction, children}) => {
    return (
        <button className='primary_btn big btn_app flex al-c jf-c s_family' onClick={btnAction}>
            {children}
        </button>
    );
};

export default PrimaryBtn;