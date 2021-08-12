import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    mainContainer: {
        padding: '100px 0px',
        backgroundColor: theme.palette.secondary.dark,
        [theme.breakpoints.down('xs')]: {
            padding: '40px 0px',
        }
    },
    title: {
        fontWeight: '700',
        [theme.breakpoints.down('xs')]: {
            fontSize: '34px'
        },
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