import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";

import HeaderV2 from '../components/HeaderV2/HeaderV2';
import WhatWeDoV2 from '../components/WhatWeDoV2/WhatWeDoV2';
import WeProvide from '../components/WeProvide/WeProvide';
import SingleButton from '../components/shared/Sections/SingleButton/SingleButton';
import FooterV2 from '../components/FooterV2/FooterV2';

const Home = () => {
    const history = useHistory()

    useEffect(() => {
        AOS.init({
            duration : 1000,
            once: true
        });
    }, [])
    
    return(
        <>
            <HeaderV2 title="What We Do"/>
            <WeProvide />
            <WhatWeDoV2 />
            <SingleButton title="Ready to take your start up to the next level?" actionTitle="Contact Us" action={() => { history.push('/contact-us') }}/>
            <FooterV2 />
        </>
    );
}

export default Home;