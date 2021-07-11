import React from 'react';
import { Container, Typography, Grid, Card, CardMedia } from '@material-ui/core'

import useStyles from './styles';
import CompanyImage from '../../images/company_image.jpg';

const CareersIntroduction = () => {
    const classes = useStyles();
    
    return(
        <div className={classes.mainContainer}>
            <Container>
                <Grid container justify="space-around">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" className={classes.title}>See what life is like at Veion. It's pretty awesome</Typography>
                        <Typography className={classes.desc}>We believe the most innovative and creative work stems from environments where different perspectives come together. We actively seek out points of view across the company, skill sets, and varied backgrounds</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.imageContainer} data-aos="fade-up" data-aos-duration={1000}>
                        <Card className={classes.cardHolder}>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="550"
                                image={CompanyImage}
                                title="Contemplative Reptile"
                                />
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default CareersIntroduction;