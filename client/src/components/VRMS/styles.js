import { makeStyles } from '@material-ui/core'
import BackgroundImage from '../../images/vrms_bg.png'

export default makeStyles((theme) => ({
    mainContainer: {
        position: 'relative',
        display: 'block',
        padding: '50px 0px',
        backgroundImage: `url(${BackgroundImage});`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
    },
    container: {
        maxWidth: '1800px',
        [theme.breakpoints.down('xs')]: {
            padding: '0px 30px'
        }
    },
    title: {
        fontWeight: '700',
    },
    subTitle: {
        padding: '5px 0px'
    },
    desc: {
        marginTop: '20px',
    },
    featuresContainer: {
        padding: '40px 0px',
        maxWidth: '300px'
    },
    tickIcon: {
        color: 'green'
    },
    actionButton: {
        marginRight: '20px',
        padding: '10px 20px',
    }
}))