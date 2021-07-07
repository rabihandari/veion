import React from 'react';
import { Grid, Typography } from '@material-ui/core'

import useStyles from './styles'

const FullImageDescription = ({ icon, image, title, description, reversed }) => {
    const classes = useStyles()
  
    return (
        <Grid container alignItems="center" direction={reversed ? "row" : "row-reverse"} className={classes.container}>
            <Grid item xs={12} md={6}>
                <div style={{ padding: '40px' }}>
                    <img src={image} alt={title} className={classes.image}/>

                </div>
            </Grid>
            <Grid item xs={12} md={6} className={classes.infoContainer}>
                <Grid container alignItems="center" style={{ flexWrap: 'nowrap' }}>
                    {icon &&
                        <img src={icon} alt={title} height="50" className={classes.icon}/>
                    }
                    <Typography variant="h4">{title}</Typography>
                </Grid>
                <Typography variant="body1" style={{ marginTop: '20px' }}>{description}</Typography>
            </Grid>
        </Grid>
    );
}

export default FullImageDescription;
