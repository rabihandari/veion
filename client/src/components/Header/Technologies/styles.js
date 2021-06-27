import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    container: {
        padding: '120px 0px',
        [theme.breakpoints.down('md')]: {
            padding: '40px 0px'
        },
    },
    logo: {
        opacity: '0.5',
        margin: 'auto',
        display: 'block',
        padding: '20px 0px'
    }
}))