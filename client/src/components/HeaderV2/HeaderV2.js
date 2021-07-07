import React from 'react';
import { Container, Typography } from '@material-ui/core'

import useStyles from './styles';

const HeaderV2 = ({ title }) => {
    const classes = useStyles();
    
    return(
        <div className={classes.mainContainer}>
            <div className={classes.overlay}></div>
            <Container>
                <Typography variant="h2" className={classes.title}>{title}</Typography>
            </Container>
        </div>
    );
}

export default HeaderV2;