import React from 'react';
import { Grid, Typography } from '@material-ui/core'

import useStyles from './styles'

const DoubleDescription = ({ icon1, title1, description1, icon2, title2, description2 }) => {
    const classes = useStyles()
  
    return (
        <Grid container alignItems="center" className={classes.container}>
            <Grid item xs={12} md={6} className={classes.infoContainer}>
                <Grid container alignItems="center">
                    {icon1 &&
                        <img src={icon1} alt={title1} height="50" className={classes.icon}/>
                    }
                    <Typography variant="h4">{title1}</Typography>
                </Grid>
                <Typography variant="body1" style={{ marginTop: '20px' }}>{description1}</Typography>
            </Grid>
            <Grid item xs={12} md={6} className={classes.infoContainer}>
                <Grid container alignItems="center">
                    {icon2 &&
                        <img src={icon2} alt={title2} height="50" className={classes.icon}/>
                    }
                    <Typography variant="h4">{title2}</Typography>
                </Grid>
                <Typography variant="body1" style={{ marginTop: '20px' }}>{description2}</Typography>
            </Grid>
        </Grid>
    );
}

export default DoubleDescription;
