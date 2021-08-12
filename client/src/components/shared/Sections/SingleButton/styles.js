import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.secondary.light,
        padding: '80px 0px',
        [theme.breakpoints.down('xs')]: {
            padding: '60px 0px',
        }
    },
    title: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '24px',
            textAlign: 'center'
        },
    }
}))