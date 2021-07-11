import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    mainContainer: {
        padding: '100px 0px 0px 0px',
        backgroundColor: theme.palette.secondary.dark,
        [theme.breakpoints.down('xs')]: {
            padding: '80px 0px',
        }
    },
    container: {
        maxWidth: '1100px'
    },
    title: {
        fontWeight: '700'
    },
    cardTitleContainer: {
        minHeight: '64px',
        display: 'flex',
        alignItems: 'center'
    },
    cardsContainer: {
        padding: '60px 0px'
    },
    cardImage: {
        maxWidth: '60px'
    }
}))