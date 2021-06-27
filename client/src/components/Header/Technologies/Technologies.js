import React from 'react'
import { Grid } from '@material-ui/core'

import useStyles from './styles'

import ReactImage from '../../../images/react.png'
import DockerImage from '../../../images/docker.png'
import NodeImage from '../../../images/node.png'
import MaterialUiImage from '../../../images/materialui.png'
import MongoDBImate from '../../../images/mongodb.png'

const technologies = [
    {
        image: ReactImage,
        title: 'React'
    },
    {
        image: DockerImage,
        title: 'Docker'
    },
    {
        image: NodeImage,
        title: 'Node Js'
    },
    {
        image: MaterialUiImage,
        title: 'Material UI'
    },
    {
        image: MongoDBImate,
        title: 'Mongo DB'
    },
]

const Technologies = () => {
    const classes = useStyles()
  
    return (
        <Grid container className={classes.container} justify="center" spacing={5}>
            {technologies.map(technology => (
                <Grid item md={2} key={technology.title}>
                    <img src={technology.image} alt={technology.title} height="50" className={classes.logo}/>
                </Grid>
            ))}
        </Grid>
    );
}

export default Technologies;
