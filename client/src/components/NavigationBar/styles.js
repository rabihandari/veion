import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    mainContainer: {
        position: 'fixed',
        zIndex: '5',
        width: '100%',
        transition: '0.3s'
    },
    container: {
        padding: '20px 20px',
        [theme.breakpoints.down('xs')]: {
            padding: '10px 20px',
        }
    },
    navLink: {
        color: 'white',
        padding: '10px 15px 5px 15px',
        cursor: 'pointer',
        fontSize: '14.5px'
    },
    navDivider: {
        backgroundColor: 'white',
        transition: 'all 0.2s linear',
        margin: 'auto'
    },
    quoteButton: {
        color: 'white',
        border: '1px solid #ffffffb8',
        padding: '5px 10px',
        borderRadius: '50px',
        fontSize: '12.5px',
        textTransform: 'none',
        fontWeight: '500',
        marginTop: '5px',
        marginLeft: '10px',
        '&:hover': {
            border: '1px solid #ffffff73',
        },
    },
    drawerPaper: {
        width: '75%'
    },
    listContainer: {
        backgroundColor: '#212121',
        height: '100%',
    },
    listItem: {
        padding: '10px 20px'
    },
    logoContainer: {
        padding: '20px 20px',
        marginTop: '20px',
        textAlign: 'center' ,
    }
}))