import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    container: {
        padding: '120px 0px',
        [theme.breakpoints.down('sm')]: {
            padding: '40px 0px',
            marginBottom: '40px'
        },
        '&:hover':{
            cursor: 'grab'
        },
        '&:active':{
            cursor: 'grabbing'
        }
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