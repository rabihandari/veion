import React, { useEffect } from 'react';
import { Grid, Typography, Container } from '@material-ui/core'
import "aos/dist/aos.css";
import AOS from 'aos';

import useStyles from './styles'

import WebisteImage from '../../images/website_development_image.jpg';
import Mobilemage from '../../images/mobile_development_image.jpg';
import CustomImage from '../../images/custom_development_image.jpg';
import PlanningImage from '../../images/planning_image.jpg';
import CrossPlatformImage from '../../images/cross_platform_image.jpg';

const features = [
    {
        image: WebisteImage,
        title: 'Websites Development',
        description: 'Build your business idea website that easily expresses what you do. Combining our skilled engineers and the modern world technologies, we ensure the fastest, most secure, and finest websites'
    },
    {
        image: Mobilemage,
        title: 'Mobile Development',
        description: 'We are experts in a variety of mobile frameworks, and aim to lay the technical foundation of your company. We are obsessed with code quality and prefer to engineer a robust testing suite for every mobile application we build'
    },
    {
        image: CustomImage,
        title: 'Custom Development',
        description: 'We listen to your ideas and create custom software solutions from the ground up, designed especially for your business. Veion customers agree the our engineers and executives will do it right the first time'
    },
    {
        image: CustomImage,
        title: 'UI/UX Development',
        description: 'We care deeply about the experience of our end-users, and so should you. Great UI/UX will align the user’s goals with yours, increase conversion, and help foster an emotional connection with your product and brand'
    },
    {
        image: PlanningImage,
        title: 'DevOps Planning',
        description: 'We help businesses establish transparent and quick software delivery cycles, along with improving the quality of implemented solutions and setting up collaboration-driven, cross-functional teams'
    },
    {
        image: CrossPlatformImage,
        title: 'Cross-Platform Development',
        description: 'Our passionate developers are driven to make your venture a success with a powerful cross-platform app for the iPhone, Tablet, and Android. We\'ll work with you to craft a commanding presence on the App Store and Google Play'
    },
];

const WhatWeDoV2 = () => {
    const classes = useStyles()
  
    useEffect(() => {
        AOS.init({
            duration : 500,
            once: true
        });
    }, [])

    return (
        <div className={classes.container}>
            <Container>
                <Typography variant="h3" className={classes.title}>Our Services</Typography>
                <Grid container  spacing={5} className={classes.itemsContainer}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} className={classes.infoContainer} key={feature.title} data-aos="fade-up" data-aos-delay={(index+1) * 100}>
                            <img src={feature.image} alt={feature.title} className={classes.image}/>
                            <div className={classes.itemDescContainer}>
                                <Typography variant="h5" className={classes.itemTitle}>{feature.title}</Typography>
                                <Typography variant="body1" style={{ marginTop: '20px' }}>{feature.description}</Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default WhatWeDoV2;
