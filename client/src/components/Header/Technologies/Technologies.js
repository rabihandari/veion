import React from 'react'
import { Grid, useMediaQuery } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useTheme } from '@material-ui/core/styles'
import { Section } from 'react-scroll-section';

import useStyles from './styles'

import ReactImage from '../../../images/react.png';
import DockerImage from '../../../images/docker.png';
import NodeImage from '../../../images/node.png';
import MaterialUiImage from '../../../images/materialui.png';
import MongoDBImage from '../../../images/mongodb.png';
import DjangoImage from '../../../images/django.png';
import FlutterImage from '../../../images/flutter.png';
import AndroidStudioImage from '../../../images/android_studio.png';
import xcodeImage from '../../../images/xcode.png';
import postgresImage from '../../../images/postgres.png';

const technologies = [
    {
        image: ReactImage,
        title: 'React'
    },
    {
        image: MongoDBImage,
        title: 'Mongo DB'
    },
    {
        image: NodeImage,
        title: 'Node Js'
    },
    {
        image: AndroidStudioImage,
        title: 'Android Studio'
    },
    {
        image: xcodeImage,
        title: 'X Code'
    },
    {
        image: MaterialUiImage,
        title: 'Material UI'
    },
    {
        image: DockerImage,
        title: 'Docker'
    },
    {
        image: DjangoImage,
        title: 'Django'
    },
    {
        image: FlutterImage,
        title: 'Flutter'
    },
    {
        image: postgresImage,
        title: 'Postgres'
    },
]

const Technologies = () => {
    const classes = useStyles()
    const matchesXs = useMediaQuery(useTheme().breakpoints.down('xs'));
    const matchesMd = useMediaQuery(useTheme().breakpoints.down('sm'));
    const matchesLg = useMediaQuery(useTheme().breakpoints.down('md'));
    const itemsPerSlide = getItemsPerSlide(matchesXs, matchesMd, matchesLg);

    const technologylists = getTechnologiesLists();
    
    return (
        <Section id="technologies">
            <Carousel showIndicators={false} showThumbs={false} showStatus={false} className={classes.container} emulateTouch={true}>
                {technologylists.map((technologyList, index) => (
                    <Grid container justify="center" spacing={5} key={index} >
                        {technologyList.map(technology => (
                            <Grid item xs={4} sm={3} md={2} key={technology.title} className={classes.imageContainer}>
                                <img src={technology.image} alt={technology.title} className={classes.logo} />
                            </Grid>
                        ))}
                    </Grid>
                ))}
            </Carousel>
        </Section>
    );

    function getItemsPerSlide(matchesXs, matchesMd, matchesLg) {
        if (matchesXs) return 2;
        if (matchesMd) return 3;
        if (matchesLg) return 4;
        else return 5
    }

    function getTechnologiesLists() {
        const technologylists = []
        for (let i = 0; i < Math.ceil(technologies.length/itemsPerSlide); i++){
            let technologylist = []
            for (let j = 0; j < itemsPerSlide; j++){
                let tech = technologies[j + (i*itemsPerSlide)];
                if (tech) technologylist.push(tech)
            }
            technologylists.push(technologylist)
        }
        return technologylists;
    }
}

export default Technologies;
