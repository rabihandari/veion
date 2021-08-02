import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.secondary.light,
        padding: '80px 0px'
    },
    title: {
        fontWeight: '700',
        padding: '20px'
    },
    desc: {
        fontSize: '22px',
        color: 'white',
        padding: '20px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '18px',
        }
    },
    valuesContainer: {
        padding: '20px 20px',
        marginTop: '100px',
        [theme.breakpoints.down('xs')]: {
            marginTop: '50px',
        }
    },
    valueTitle: {
        color: theme.palette.primary.dark,
        fontWeight: '700'
    },
    valueDesc: {
        color: 'white',
        marginTop: '10px',
    },
    statContainer: {
        marginBottom: '20px', 
        [theme.breakpoints.down('md')]: {
            textAlign: 'center'
        }
    }
}))