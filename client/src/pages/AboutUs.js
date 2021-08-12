import React from 'react';
import { useHistory } from 'react-router-dom';

import HeaderV2 from '../components/HeaderV2/HeaderV2'
import FooterV2 from '../components/FooterV2/FooterV2';
import WhoAreWe from '../components/WhoAreWe/WhoAreWe';
import WebSolutions from '../components/WebSolutions/WebSolutions';
import DevelopmentStack from '../components/DevelopmentStack/DevelopmentStack';
import SingleButton from '../components/shared/Sections/SingleButton/SingleButton';

const AboutUs = () => {
    const history = useHistory();
    
    
    return(
        <>
            <HeaderV2 title="About Us"/>
            <WhoAreWe />
            <WebSolutions />
            <DevelopmentStack />
            <SingleButton title="Ready to take your startup to the next level?" actionTitle="Contact Us" action={() => { history.push('/contact-us') }}/>
            <FooterV2 />
        </>
    );
}

export default AboutUs;