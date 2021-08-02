import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    mainContainer: {
        padding: '100px 0px 0px 0px',
        backgroundColor: theme.palette.secondary.light,
        [theme.breakpoints.down('xs')]: {
            padding: '60px 0px',
        }
    },
    container: {
    },
    title: {
        fontWeight: '700'
    },
    cardsContainer: {
        padding: '80px 0px',
        [theme.breakpoints.down('xs')]: {
            padding: '40px 0px',
        }
    },
    cardContainer: {
        margin: '10px 0px',
    },
    cardImage: {
        maxWidth: '35px'
    },
    cardTitle: {
        fontWeight: '700',
        [theme.breakpoints.down('1050')]: {
            textAlign: 'center'
        },
        [theme.breakpoints.down('600')]: {
            textAlign: 'start'
        },
        [theme.breakpoints.down('425')]: {
            textAlign: 'center'
        }
    },
    cardBody: {
        marginTop: '5px',
        fontSize: '16px',
        [theme.breakpoints.down('1050')]: {
            textAlign: 'center'
        },
        [theme.breakpoints.down('600')]: {
            textAlign: 'start'
        },
        [theme.breakpoints.down('425')]: {
            textAlign: 'center'
        }
    }
}))