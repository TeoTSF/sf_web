import React from 'react';
import Header from '../components/header/Header';
import HeadBand from '../components/generals/HeadBand';
import FormSection from '../components/form_section/FormSection';

const Home = () => {
    return (
        <div className='home_container flex column'>
            <Header />
            <HeadBand />
            <FormSection />
        </div>
    );
};

export default Home;