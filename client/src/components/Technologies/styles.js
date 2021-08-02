import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    mainContainer: {
        backgroundColor: theme.palette.secondary.light,
        padding: '80px 0px',
        [theme.breakpoints.down('sm')]: {
            padding: '40px 0px',
            marginBottom: '40px'
        },
    },
    container: {
        '&:hover':{
            cursor: 'grab'
        },
        '&:active':{
            cursor: 'grabbing'
        }
    },
    title: {
        color: 'white',
        marginBottom: '40px',
        fontWeight: '700'
    },
    carouselContainer: {
        padding: '40px 0px'
    },
    imageContainer: {
        width:'auto',
        height: '100px'
    },
    logo: {
        opacity: '0.5',
        width: 'auto',
        height: '100%',
        objectFit: 'contain'
    }
}))