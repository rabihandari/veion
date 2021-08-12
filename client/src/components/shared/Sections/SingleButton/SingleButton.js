import React  from 'react'
import { Grid, Container, Typography } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import useStyles from './styles'
import OutlinedButton from '../../Buttons/Outlined/OutlinedButton';

const SingleButton = ({ title, actionTitle, action }) => {
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <Container>
                <Grid container alignItems="center" justify="space-around" spacing={3}>
                    <Grid item>
                        <Typography variant='h4' className={classes.title}>{title}</Typography>
                    </Grid>
                    <Grid item>
                        <OutlinedButton theme="primary" endIcon={<ArrowForwardIcon/>} onClick={action}>{actionTitle}</OutlinedButton>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default SingleButton