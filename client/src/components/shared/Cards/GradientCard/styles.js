import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    card: {
        backgroundColor: 'transparent',
        backgroundImage: 'linear-gradient(180deg, #1c262b 0%, #131A1400 100%)',
        padding: '40px',
        transition: 'background-image 1s ease-in-out',
        borderRadius: '15px',
        "&:hover": {
            backgroundImage: 'linear-gradient(180deg, #1c262b 0%, #1c262b66 100%)',
        },
        cursor: 'pointer'
    },
}))