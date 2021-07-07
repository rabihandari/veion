import { makeStyles } from '@material-ui/core';
import backgroundImage from '../../images/overlay-2.jpg'; 

export default makeStyles((theme) => ({
    mainContainer: {
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#181818;',
        [theme.breakpoints.down('xs')]: {
            minHeight: '250px',
            padding: '60px 20px 20px 20px',
        }
    },
    overlay: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        opacity: '0.03',
        position: 'absolute',
        top: '0',
        left: '0',
        height: '100%',
        width: '100%'
    },
    title: {
        fontWeight: '700'
    },
}))