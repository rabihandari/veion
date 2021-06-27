import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    button: {
        color: 'white',
        border: '2px solid #FFFFFF2B',
        borderRadius: '50px',
        padding: '15px 30px',
        fontWeight: '700',
        '&:hover': {
            border: '2px solid #ffffff73',
        },
    },
}))