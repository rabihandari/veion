import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    title: {
        fontWeight: '700',
        fontSize: '78px',
        [theme.breakpoints.down('md')]: {
            fontSize: '58px',
        }
    },
    secure: {
        fontWeight: '700',
        fontSize: '16px'
    }
}))