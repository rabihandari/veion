import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    title: {
        fontWeight: '700',
        fontSize: '68px',
        [theme.breakpoints.down('md')]: {
            fontSize: '48px',
        }
    },
    secure: {
        fontWeight: '700',
        fontSize: '16px'
    }
}))