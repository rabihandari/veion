import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

import HeaderV2 from '../components/HeaderV2/HeaderV2'
import FooterV2 from '../components/FooterV2/FooterV2';
import ContactUsSection from '../components/ContactUs/ContactUs';

const ContactUs = () => {
    
    useEffect(() => {
        AOS.init({
            duration : 1000,
            once: true
        });
    }, [])
    
    return(
        <>
            <HeaderV2 title="Contact Us"/>
            <ContactUsSection />
            <FooterV2 />
        </>
    );
}

export default ContactUs;