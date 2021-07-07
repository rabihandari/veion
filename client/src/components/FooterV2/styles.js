import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    mainContainer: {
        position: 'relative',
        display: 'block',
        backgroundColor: theme.palette.secondary.dark,
        padding: '40px 0px',
        [theme.breakpoints.down('sm')]: {
            padding: '20px 0px',
        }
    },
    container: {
        padding: '20px 20px'
    },
    sectionContainer: {
        padding: '20px 40px',
        [theme.breakpoints.down('sm')]: {
            padding: '20px 10px',
        }
    },
    sectionTitle: {
        color: 'white',
        padding: '0px 10px',
        fontSize: '18px'
    },
    divider: {
        backgroundColor: '#2d2d2d',
        margin: '20px 0px',
    },
    contactUsItem: {
        marginTop: '15px'
    },
    icon: {
        color: '#FFFFFF96',
        marginRight: '15px'
    },
    copyright: {
        padding: '10px 0px',
        marginTop: '40px'
    }
}))