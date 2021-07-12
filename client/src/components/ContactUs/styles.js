import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    mainContainer: {
        backgroundColor: theme.palette.secondary.light
    },
    container: {
        maxWidth: '1200px',
        padding: '80px 20px',
        [theme.breakpoints.down('xs')]: {
            padding: '40px 20px',
        }
    },
    infoItemContainer: {
        display: 'flex',
        padding: '30px 0px',
        alignItems: 'center'
    },
    infoItemText: {
        fontSize: '22px',
        color: 'white',
        fontFamily: 'system-ui'
    },
    icon: {
        color: theme.palette.primary.dark,
        fontSize: '40px',
        marginRight: '20px'
    },
    cardContainer: {
        padding: '50px',
        marginTop: '-150px',
        maxWidth: '500px',
        [theme.breakpoints.down('sm')]: {
            margin: 'auto',
            padding: '30px 15px',
        }
    },
    card: {
        borderRadius: '10px',
    },
    card2: {
        borderRadius: '10px',
        backgroundColor: 'transparent'
    },
    titleContainer: {
        marginBottom: '40px',
    },
    title: {
        fontWeight: '700',
        fontFamily: 'system-ui',
        marginBottom: '10px',
    },
    input: {
        marginBottom: '20px'
    },
    submit: {
        color: 'white',
        backgroundColor: theme.palette.primary.dark,
        textTransform: 'none'
    },
    error: {
        color: 'red'
    }
}))