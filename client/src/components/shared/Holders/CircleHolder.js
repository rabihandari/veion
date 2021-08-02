import React from 'react';

import useStyles from './styles'

const CircleHolder = (props) => {
    const classes = useStyles()
  
    return (
        <div {...props} className={classes.holderContainer}>
            <div className={classes.contentContainer}>
                {props.children}
            </div>
        </div>
    );
}

export default CircleHolder;
