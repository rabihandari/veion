import { Card } from '@material-ui/core'

import useStyles from './styles'

const GradientCard = (props) => {
    const classes = useStyles()
  
    return (
        <Card {...props} className={classes.card}>{props.children}</Card>
    );
}

export default GradientCard;
