import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    mainContainer: {
        position: 'relative',
        display: 'block'
    },
    overlay: {
        backgroundColor: 'transparent',
        backgroundImage: 'radial-gradient(at top left, #45d1f5a3 0%, #00000000 25%)',
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: '0',
        zIndex: '-1'
    },
    headingContainer: {
        position: 'relative',
        backgroundSize: 'contain',
        backgroundPosition: 'top center',
        backgroundRepeat: 'repeat-x',
        padding: '220px 0px',
        [theme.breakpoints.down('md')]: {
            padding: '140px 20px 100px 20px',
        },
    },
    featuresContainer: {
        [theme.breakpoints.down('md')]: {
            padding: '0px 20px',
        },
    },
    technologiesContainer: {
        [theme.breakpoints.down('md')]: {
            padding: '0px 20px',
        },
    },
    particlesContainer: {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '0',
        aspectRatio: 'unset'
    }
}))