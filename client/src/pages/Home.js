import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

import Header from '../components/Header/Header'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import VRMS from '../components/VRMS/VRMS'
import WhatWeDo from '../components/WhatWeDo/WhatWeDo'
import Footer from '../components/Footer/Footer';

const Home = () => {
    
    useEffect(() => {
        AOS.init({
            duration : 1000,
            once: true,
            
        });
    }, [])

    return(
        <>
            <Header />
            <HowItWorks/>
            <WhatWeDo />
            <VRMS />
            <Footer />
        </>
    );
}

export default Home;