import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    circle: {
        borderRadius: '50px',
        borderWidth: '1px',
        borderStyle: 'solid',
        width: '60px',
        height: '60px',
        display: 'block',
        position: 'relative',
        borderColor: theme.palette.primary.dark,
    },
    number: {
        position: 'absolute',
        fontSize: '30px',
        textAlign: 'center',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: theme.palette.primary.dark,
    },
    blueLine: {
        width: '300px',
        height: '1px',
        backgroundColor: theme.palette.primary.dark,
        transform: 'scale(0)',
        animationTimingFunction: 'ease',
        animationDuration: '.6s',
        animationIterationCount: '1',
        animationDirection: 'normal',
        animationFillMode: 'forwards',
        animationPlayState: 'running',
        animationName: '$myEffect',
        [theme.breakpoints.down('md')]: {
            width: '200px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '160px',
        },
        [theme.breakpoints.down('xs')]: {
            height: '170px',
            animationName: '$myEffectVertical',
        },
    },
    verticalBlueLine: {
        height: '300px',
        width: '1px',
        backgroundColor: theme.palette.primary.dark,
        transform: 'scale(0)',
        animationTimingFunction: 'ease',
        animationDuration: '.6s',
        animationIterationCount: '1',
        animationDirection: 'normal',
        animationFillMode: 'forwards',
        animationPlayState: 'running',
        animationName: '$myEffect',
        [theme.breakpoints.down('md')]: {
            height: '200px',
        },
        [theme.breakpoints.down('xs')]: {
            height: '170px',
            animationName: '$myEffectVertical',
        },
    },
    grayLine: {
        width: '150px',
        height: '1px',
        backgroundColor: '#cfcfcf',
        transform: 'scale(0)',
        animationTimingFunction: 'ease',
        animationDuration: '.5s',
        animationIterationCount: '1',
        animationDirection: 'normal',
        animationFillMode: 'forwards',
        animationPlayState: 'running',
        animationName: '$myEffect',
        [theme.breakpoints.down('md')]: {
            width: '50px',
        },
        [theme.breakpoints.down('xs')]: {
            animationName: '$myEffectVertical',
        }
    },
    verticalGrayLine: {
        width: '1px',
        height: '150px',
        backgroundColor: '#cfcfcf',
        transform: 'scale(0)',
        animationTimingFunction: 'ease',
        animationDuration: '.5s',
        animationIterationCount: '1',
        animationDirection: 'normal',
        animationFillMode: 'forwards',
        animationPlayState: 'running',
        animationName: '$myEffect',
        [theme.breakpoints.down('md')]: {
            height: '50px',
        },
        [theme.breakpoints.down('xs')]: {
            animationName: '$myEffectVertical',
        }
    },
    "@keyframes myEffect": {
        "0%": {
            transform: 'scale(0,.3)',
            transformOrigin: '0 50%'
        },
        "100%": {
            transform: 'scale(1)',
            transformOrigin: '0 50%'
        }
    },
    "@keyframes myEffectVertical": {
        "0%": {
            transform: 'scale(0,.3)',
            transformOrigin: '50% 0'
        },
        "100%": {
            transform: 'scale(1)',
            transformOrigin: '50% 0'
        }
    },
    stepsContainer: {
        [theme.breakpoints.down('md')]: {
            margin: 'auto'
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '40px'
        }
    },
    stepDescriptionContainer: {
        padding: '40px 0px',
        width: '320px',
        [theme.breakpoints.down('md')]: {
            width: '220px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '180px',
        },
        [theme.breakpoints.down('xs')]: {
            width: 'auto',
            padding: '0px 0px',
            marginTop: '35px'
        }
    },
    stepTitle: {
        textAlign: 'center',
        maxWidth: '300px',
        margin: 'auto',
        fontSize: '20px',
        fontWeight: '500',
        [theme.breakpoints.down('md')]: {
            width: '200px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '180px',
        },
        [theme.breakpoints.down('xs')]: {
            width: 'auto',
            textAlign: 'start',
        }
    },
    stepDesc: {
        margin: 'auto',
        maxWidth: '300px',
        marginTop: '20px',
        [theme.breakpoints.down('md')]: {
            width: '200px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '180px',
        },
        [theme.breakpoints.down('xs')]: {
            width: 'auto',
        }
    }
}))
