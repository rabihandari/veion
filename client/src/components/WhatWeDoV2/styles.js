import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.secondary.dark,
        padding: '60px 0px'
    },
    title: {
        fontWeight: '700',
        padding: '20px 0px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '34px'
        },
    },
    image: {
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '256px',
        width: '384px',
        [theme.breakpoints.down('md')]: {
            height: 'auto',
            width: '100%',
        },
    },
    itemsContainer: {
        padding: '40px 0px'
    },
    itemTitle: {
        fontWeight: '700'
    },
    itemDescContainer: {
        padding: '20px 5px'
    }
}))