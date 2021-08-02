import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    borderlessCard: {
        backgroundColor: 'transparent',
        padding: '40px',
        borderRadius: '10px',
        transition: '0.3s',
        height: '300px',
    },
    card: {
        backgroundColor: 'transparent',
        padding: '40px',
        border: `3px solid ${theme.palette.secondary.light}`,
        borderRadius: '10px',
        transition: '0.3s',
        '&:hover': {
            border: `3px solid ${theme.palette.primary.dark}`,
        },
        height: '300px',
    },
}))