import React, { useRef } from 'react'
import { Container, useTheme, useMediaQuery } from '@material-ui/core'
import Particles from 'react-particles-js';

import useStyles from './styles'
import Heading from './Heading/Heading'
import Features from './Features/Features'
import Technologies from './Technologies/Technologies'

const Header = () => {
    const classes = useStyles()
    const featuresRef = useRef(null);
  
    return (
        <div className={classes.mainContainer}>
            <div className={classes.overlay}></div>
            <div className={classes.headingContainer}>
                <HeaderParticles />
                <Container>
                    <Heading featuresRef={featuresRef} />
                </Container>
            </div>
            <div className={classes.featuresContainer} ref={featuresRef}>
                <Container>
                    <Features/>
                </Container>
            </div>
            <div className={classes.technologiesContainer}>
                <Container>
                    <Technologies/>
                </Container>
            </div>
        </div>
    );
}

const HeaderParticles = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return(
        <Particles
            params={{
                particles: {
                    number: {
                        value: matches ? 20 : 50
                    },
                    size: {
                        value: 3
                    },
                    color: {
                        value: theme.palette.primary.main
                    },
                    links: {
                        color: theme.palette.primary.main,
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        speed: 1
                    }
                },
                interactivity: {
                    detect_on: 'window',
                    events: {
                        onhover: {
                            enable: true,
                            mode: "grab"
                        },
                    },
                    modes: {
                        grab: {
                            distance: 200,
                            line_linked: {
                                opacity: 0.5
                            }
                        }
                    }
                    
                },
                
            }}
            canvasClassName={classes.particlesContainer}
        />
    );
}

export default Header;
