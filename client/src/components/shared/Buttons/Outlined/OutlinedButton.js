import { Button } from '@material-ui/core'

import useStyles from './styles'

const OutlinedButton = (props) => {
    const classes = useStyles()
  
    return (
        <Button className={props.theme === "primary" ? classes.buttonPrimary : classes.buttonDefault} {...props} variant='outlined'>{props.children}</Button>
    );
}

export default OutlinedButton;
