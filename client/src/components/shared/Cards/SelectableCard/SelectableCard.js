import { Card } from '@material-ui/core'

import useStyles from './styles'

const SelectableCard = (props) => {
    const classes = useStyles()
  
    return (
        <Card {...props} className={props.selected ? classes.cardSelected : classes.card}>
            <div>
                {props.children}
            </div>
        </Card>
    );
}

export default SelectableCard;
