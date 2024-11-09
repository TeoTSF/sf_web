import React from 'react';
import "./header.css"
import logoV from "/logo.png";
import PrimaryBtn from '../generals/PrimaryBtn';
import YellowBtn from '../generals/YellowBtn';

const Header = () => {
    return (
        <div className='header_container flex jf-c al-c'>
            <div className='header_info full-w flex wrap jf-sb'>
                <div className='box_fill'></div>
                <div className='header_second_section flex column'>
                    <img className='logo_header autoM' src={logoV} alt="logo trading sin fronteras" />
                    <h1 className='center'>Aprende Trading desde cero a nivel avanzado con una <span>estrategia rentable</span>!!</h1>
                    <div className='flex row wrap jf-c autoM'>
                        <YellowBtn>Tomar curso!</YellowBtn>
                        <PrimaryBtn>Habla con nosotros</PrimaryBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;