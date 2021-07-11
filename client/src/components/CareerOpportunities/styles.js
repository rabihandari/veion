import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    mainContainer: {
        padding: '100px 0px',
        backgroundColor: theme.palette.secondary.dark,
        [theme.breakpoints.down('xs')]: {
            padding: '80px 0px',
        }
    },
    title: {
        fontWeight: '700'
    },
    opportunitiesContainer: {
        padding: '30px 0px'
    },
    job: {
        padding: '30px 0px'
    },
    divider: {
        backgroundColor: '#f4f4f41c'
    }
}))