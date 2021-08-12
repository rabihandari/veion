import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    mainContainer: {
        padding: '100px 0px 0px 0px',
        backgroundColor: theme.palette.secondary.dark,
        [theme.breakpoints.down('xs')]: {
            padding: '60px 0px',
        }
    },
    container: {
    },
    title: {
        fontWeight: '700',
        [theme.breakpoints.down('xs')]: {
            fontSize: '34px'
        },
    },
    cardTitleContainer: {
        minHeight: '64px',
        display: 'flex',
        alignItems: 'center'
    },
    cardsContainer: {
        padding: '80px 0px',
        [theme.breakpoints.down('xs')]: {
            padding: '40px 0px',
        }
    },
    cardTitle: {
        marginLeft: '25px',
        fontWeight: '700'
    },
    cardImage: {
        maxWidth: '35px'
    },
    cardBody: {
        marginBottom: '20px', 
        marginTop: '10px',
        fontSize: '16px',
        height: '144px',
    }
}))