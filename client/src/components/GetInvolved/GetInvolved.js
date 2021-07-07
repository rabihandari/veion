import React  from 'react'
import { Grid, Container, Typography } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import useStyles from './styles'
import OutlinedButton from '../shared/Buttons/Outlined/OutlinedButton';

const HowItWorks = (props) => {
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <Container>
                <Grid container alignItems="center" justify="space-around" spacing={3}>
                    <Grid item>
                        <Typography variant='h4'>Ready to take your start up to the next level?</Typography>
                    </Grid>
                    <Grid item>
                        <OutlinedButton theme="primary" endIcon={<ArrowForwardIcon/>}>Contact Us</OutlinedButton>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default HowItWorks