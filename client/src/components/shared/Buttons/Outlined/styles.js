import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    buttonDefault: {
        color: 'white',
        border: '2px solid #FFFFFF2B',
        borderRadius: '50px',
        padding: '15px 30px',
        fontWeight: '700',
        '&:hover': {
            border: '2px solid #ffffff73',
        },
    },
    buttonPrimary: {
        color: theme.palette.primary.dark,
        border: `1px solid ${theme.palette.primary.dark}`,
        borderRadius: '50px',
        padding: '15px 30px',
        fontWeight: '700',
        transition: '0.3s',
        '&:hover': {
            color: 'white',
            backgroundColor: theme.palette.primary.dark,
            
        },
    },
}))