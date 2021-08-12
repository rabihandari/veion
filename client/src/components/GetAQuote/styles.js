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
    servicesContainer:{
        padding: '40px 0px'
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
        [theme.breakpoints.down('xs')]: {
            fontSize: '28px',
            fontWeight: '500',
        },
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
    },
    sectionTitle: {
        marginBottom: '10px',
    },
    serviceTitle: {
        padding: '10px 0px'
    },
    'MuiSlider-markLabel':{
        top: 26,
        color: '#eaeaea8a',
        position: 'absolute',
        fontSize: '0.875rem',
        transform: 'translateX(-50%)',
        fontFamily: '"DM Sans",sans-serif',
        fontWeight: 400,
        lineHeight: 1.43,
        whiteSpace: 'nowrap',
    },
    'MuiSlider-markLabelActive':{
        color: theme.palette.common.white,
    },
    pdfContainer: {
        padding: '10px 0px',
        marginBottom: '20px'
    },
    pdfHolder: {
        position: 'relative',
        width: '100%',
        height: '100px',
        border: `1px dashed rgb(255 255 255 / 15%)`,
        '&:hover': {
            border: `1px dashed ${theme.palette.primary.dark}`,
        }
    },
    pdfHolderHovered: {
        position: 'relative',
        width: '100%',
        height: '100px',
        backgroundColor: '',
        backgroundImage: 'linear-gradient(180deg, #1c262b 0%, #1c262b66 100%)',
    },
    pdfInput: {
        position: 'absolute',
        margin: '0',
        padding: '0',
        width: '100%',
        height: '100%',
        outline: 'none',
        opacity: '0',
        cursor: 'pointer',
        zIndex: '2'
    },
    pdfTextHolder: {
        position: 'absolute',
        width: '100%',
        fontSize: '14',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }
}))