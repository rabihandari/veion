import React from 'react';

import Header from '../components/Header/Header'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import VRMS from '../components/VRMS/VRMS'
import WhatWeDo from '../components/WhatWeDo/WhatWeDo'

const Home = () => {
    return(
        <>
            <Header />
            <HowItWorks/>
            <WhatWeDo />
            <VRMS />
        </>
    );
}

export default Home;