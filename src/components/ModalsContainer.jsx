import React from 'react';
import LoginPage from '../pages/login/LoginPage';
import RedirectModal from './redirectModal/RedirectModal';

const ModalsContainer = () => {
    return (
        <>
            <LoginPage />
            <RedirectModal />
        </>
    );
};

export default ModalsContainer;