import React from 'react';
import { Container, Grid, Typography, Divider } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';


import useStyles from './styles';
import SocialMedia from '../shared/SocialMedia/SocialMedia';

const FooterV2 = () => {
    const classes = useStyles();
    
    return(
        <div className={classes.mainContainer}>
            <Container className={classes.container} >
                <Grid container alignItems="baseline" justify='space-between'>
                    <Grid item xs={12} md={4} className={classes.sectionContainer}>
                        <Typography className={classes.sectionTitle}>About Us</Typography>
                        <Divider className={classes.divider} />
                        <Typography variant="body2">Veion is a global software engineering company dedicated to add value to your business. Because of our vast knowledge and highly talented expertise we are able to offer solutions that meet your objective well within your target budget.</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.sectionContainer}>
                        <Typography className={classes.sectionTitle}>Contact Us</Typography>
                        <Divider className={classes.divider} />
                        <Grid container className={classes.contactUsItem}>
                            <MailOutlineIcon className={classes.icon}/>
                            <Typography variant="body2">support@veion.com</Typography>
                        </Grid>
                        <Grid container className={classes.contactUsItem}>
                            <ChatBubbleOutlineIcon className={classes.icon}/>
                            <Typography variant="body2">+961 71 076 827</Typography>
                        </Grid>
                        <Grid container className={classes.contactUsItem}>
                            <LocationOnOutlinedIcon className={classes.icon}/>
                            <Typography variant="body2">Lebanon, Aley</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.sectionContainer}>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography className={classes.sectionTitle}>Social Media</Typography>
                                <Divider className={classes.divider} />
                                <SocialMedia />
                            </Grid>
                            <Grid item>
                                <Typography className={classes.copyright}>Copyright @ 2021</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default FooterV2;