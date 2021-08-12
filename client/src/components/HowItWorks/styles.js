import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    mainContainer: {
        position: 'relative',
        display: 'block',
        backgroundColor: theme.palette.secondary.light,
        padding: '100px 0'
    },
    title: {
        textAlign: 'center',
        fontWeight: '700',
        [theme.breakpoints.down('xs')]: {
            fontSize: '34px'
        },
    },
    subtitle: {
        textAlign: 'center',
        maxWidth: '800px',
        margin: 'auto',
        marginTop: '20px'
    },
    stepsContainer: {
        padding: '60px 0px 0px 0px',
        [theme.breakpoints.down('xs')]: {
            padding: '40px 0px',
        },
    }
}))