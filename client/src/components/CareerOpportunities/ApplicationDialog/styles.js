import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    divider: {
        borderColor: '#ffffff38',
    },
    textField: {
        marginBottom: '10px',
    },
    formContainer: {
        padding: '0px 0px 40px 0px'
    },
    cvContainer: {
        padding: '10px 0px'
    },
    errorText: {
        color: 'red',
        margin: '20px 0px',
        fontSize: '14px'
    },
    cvHolder: {
        position: 'relative',
        width: '100%',
        height: '100px',
        border: `1px dashed #B3B4B5`,
        '&:hover': {
            border: `1px dashed ${theme.palette.primary.dark}`,
        }
    },
    cvInput: {
        position: 'absolute',
        margin: '0',
        padding: '0',
        width: '100%',
        height: '100%',
        outline: 'none',
        opacity: '0',
        cursor: 'pointer',
        zIndex: '2'
    },
    cvTextHolder: {
        position: 'absolute',
        width: '100%',
        fontSize: '14',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }
}))