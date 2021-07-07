import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    container: {
        backgroundColor: '#1c1c1c'
    },
    image: {
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
    },
    infoContainer: {
        padding: '80px',
        [theme.breakpoints.down('xs')]: {
            padding: '30px',
        }
    },
    icon: {
        padding: '10px 0px',
        marginRight: '20px'
    }
}))