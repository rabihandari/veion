import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    button: {
        borderRadius: '50px',
        borderColor: '#000000C4',
        borderWidth: '8px',
        borderStyle: 'solid',
        padding: '15px 30px',
        fontWeight: '700',
    },
    buttonV2: {
        borderRadius: '50px',
        backgroundColor: theme.palette.primary.dark,
        color: 'white',
        padding: '12px 25px',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: theme.palette.primary.dark,
        fontWeight: '700',
        transition: '0.3s',
        '&:hover': {
            color: theme.palette.primary.dark,
            backgroundColor: 'transparent',
        }
    },
}))