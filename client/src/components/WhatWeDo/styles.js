import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    mainContainer: {
        position: 'relative',
        padding: '100px 0px',
        [theme.breakpoints.down('xs')]: {
            padding: '40px 20px',
        }
    },
    cardTitleContainer: {
        minHeight: '64px',
        display: 'flex',
        alignItems: 'center'
    },
    title: {
        fontWeight: '700',
        [theme.breakpoints.down('xs')]: {
            fontSize: '34px'
        },
    },
    subTitle: {
        padding: '5px 0px'
    },
    container: {
        padding: '60px 0px'
    },
    cardImage: {
        maxWidth: '60px'
    }
}))