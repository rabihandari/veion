import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    card: {
        backgroundColor: 'transparent',
        padding: '30px',
        transition: 'background-image 1s ease-in-out',
        borderRadius: '5px',
        "&:hover": {
            backgroundImage: 'linear-gradient(180deg, #1c262b 0%, #1c262b66 100%)',
        },
        cursor: 'pointer',
        textAlign: 'center',
        border: `1px solid rgb(255 255 255 / 15%)`,
    },
    cardSelected: {
        backgroundColor: 'transparent',
        backgroundImage: 'linear-gradient(180deg, #1c262b 0%, #1c262b66 100%)',
        padding: '30px',
        transition: 'background-image 1s ease-in-out',
        borderRadius: '5px',
        cursor: 'pointer',
        textAlign: 'center',
        border: `1px solid ${theme.palette.primary.dark}`
    },
}))