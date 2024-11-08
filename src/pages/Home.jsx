import React from 'react';
import Header from '../components/header/Header';
import HeadBand from '../components/generals/HeadBand';
import FormSection from '../components/form_section/FormSection';
import Services from '../components/services/Services';
import ProposalSection from '../components/proposal/ProposalSection';
import Metrics from '../components/metrics/Metrics';

const Home = () => {
    return (
        <div className='home_container flex column'>
            <Header />
            <HeadBand />
            <FormSection />
            <Services />
            <ProposalSection />
            <Metrics />
        </div>
    );
};

export default Home;