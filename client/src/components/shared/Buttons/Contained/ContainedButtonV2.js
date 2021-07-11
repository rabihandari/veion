import { Button } from '@material-ui/core'

import useStyles from './styles'

const OutlinedButton = (props) => {
    const classes = useStyles()
  
    return (
        <Button className={classes.buttonV2}  {...props} variant='contained' color="primary">{props.children}</Button>
    );
}

export default OutlinedButton;
