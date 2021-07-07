import React from 'react';

import HeaderV2 from '../components/HeaderV2/HeaderV2';
import WhatWeDoV2 from '../components/WhatWeDoV2/WhatWeDoV2';
import WeProvide from '../components/WeProvide/WeProvide';
import GetInvolved from '../components/GetInvolved/GetInvolved';

const Home = () => {
    return(
        <>
            <HeaderV2 title="What We Do"/>
            <WeProvide />
            <WhatWeDoV2 />
            <GetInvolved />
        </>
    );
}

export default Home;