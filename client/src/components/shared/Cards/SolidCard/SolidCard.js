import { Card } from '@material-ui/core'

import useStyles from './styles'

const SolidCard = (props) => {
    const classes = useStyles()
  
    return (
        <Card {...props} className={props.borderless ? classes.borderlessCard : classes.card}>{props.children}</Card>
    );
}

export default SolidCard;
