import { Button } from '@material-ui/core'

import useStyles from './styles'

const OutlinedButton = (props) => {
    const classes = useStyles()
  
    return (
        <Button {...props} className={classes.button} variant='contained' color="primary">{props.children}</Button>
    );
}

export default OutlinedButton;
