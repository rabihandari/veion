import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    mainContainer: {
        padding: '120px 0px',
        backgroundColor: theme.palette.secondary.light,
        [theme.breakpoints.down('xs')]: {
            padding: '80px 0px',
        }
    },
    title: {
        fontWeight: '700',
        [theme.breakpoints.down('xs')]: {
            fontSize: '28px'
        },
    },
    desc: {
        fontSize: '20px',
        color: 'white',
        padding: '20px 0px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '16px',
        }
    },
    imageContainer: {
        marginTop: '-200px',
        zIndex: '1',
        [theme.breakpoints.down('sm')]: {
            marginTop: '20px',
        }
    },
    cardHolder: {
        borderRadius: '20px',
    }
}))