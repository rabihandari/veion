import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

import HeaderV2 from '../components/HeaderV2/HeaderV2'
import FooterV2 from '../components/FooterV2/FooterV2';
import ContactUs from '../components/ContactUs/ContactUs';

const Careers = () => {
    
    useEffect(() => {
        AOS.init({
            duration : 1000,
            once: true
        });
    }, [])
    
    return(
        <>
            <HeaderV2 title="Contact Us"/>
            <ContactUs />
            <FooterV2 />
        </>
    );
}

export default Careers;