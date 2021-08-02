import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    holderContainer: {
        padding: '15px',
        position: 'relative',
        width: '75px',
        height: '75px',
        borderRadius: '50%',
        border: `5px solid #1d8ed5`,
        backgroundImage: `linear-gradient(0deg, #025f9a, #0264a2 51%, #0075bf)`
    },
    contentContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
}))