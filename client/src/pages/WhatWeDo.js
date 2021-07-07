import React from 'react';

import HeaderV2 from '../components/HeaderV2/HeaderV2';
import WhatWeDoV2 from '../components/WhatWeDoV2/WhatWeDoV2';
import WeProvide from '../components/WeProvide/WeProvide';
import GetInvolved from '../components/GetInvolved/GetInvolved';
import FooterV2 from '../components/FooterV2/FooterV2';

const Home = () => {
    return(
        <>
            <HeaderV2 title="What We Do"/>
            <WeProvide />
            <WhatWeDoV2 />
            <GetInvolved />
            <FooterV2 />
        </>
    );
}

export default Home;