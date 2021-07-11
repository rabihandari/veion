import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

import HeaderV2 from '../components/HeaderV2/HeaderV2'
import FooterV2 from '../components/FooterV2/FooterV2';
import CareersIntroduction from '../components/CareersIntroduction/CareersIntroduction';
import CareerBenefits from '../components/CareerBenefits/CareerBenefits';
import CareerOpportunities from '../components/CareerOpportunities/CareerOpportunities';
import SingleButton from '../components/shared/Sections/SingleButton/SingleButton';

const Careers = () => {
    
    useEffect(() => {
        AOS.init({
            duration : 1000,
            once: true
        });
    }, [])
    
    return(
        <>
            <HeaderV2 title="Careers"/>
            <CareersIntroduction />
            <CareerBenefits />
            <CareerOpportunities />
            <SingleButton title="Interested in finding out more? Get in touch" actionTitle="Contact Us" action={() => {}}/>
            <FooterV2 />
        </>
    );
}

export default Careers;