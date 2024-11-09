import React from 'react';

const PrimaryBtn = ({btnAction, children}) => {
    return (
        <button className='primary_btn big bold btn_app flex al-c' onClick={btnAction}>
            {children}
        </button>
    );
};

export default PrimaryBtn;