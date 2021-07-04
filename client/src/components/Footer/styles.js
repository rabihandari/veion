import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    mainContainer: {
        position: 'relative',
        display: 'block',
        backgroundColor: theme.palette.secondary.light,
    },
    container: {
        padding: '20px 20px'
    },
    copyright: {
        color: 'white'
    }
}))