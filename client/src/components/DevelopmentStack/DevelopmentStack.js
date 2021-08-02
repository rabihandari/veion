import React from 'react';
import { Typography, Grid, Container } from '@material-ui/core';

import useStyles from './styles';
import CircleHolder from '../shared/Holders/CircleHolder';

import DatabaseIcon from '../../images/ic_database.svg';
import OSIcon from '../../images/ic_os.svg';
import BackendIcon from '../../images/ic_backend.svg';
import FrontendIcon from '../../images/ic_frontend.svg';
import VCSIcon from '../../images/ic_vcs.svg';
import VirtualIcon from '../../images/ic_virtual.svg';

const stack = [
    {
        image: DatabaseIcon,
        title: 'Database',
        body: 'MySQL, MariaDB, PostgreSQL, MSSQL, Oracle, MongoDB, Redis',
    },
    {
        image: OSIcon,
        title: 'OS and platforms',
        body: 'Linux (Ubuntu, Centos), Windows',
    },
    {
        image: BackendIcon,
        title: 'Backend Frameworks',
        body: 'Node.js, Express.js, Socket.IO, MeteorJS, Django, Spring.io, RESTFull',
    },
    {
        image: FrontendIcon,
        title: 'Frontend Frameworks',
        body: 'ReactJS, Angular, VueJS, Vanilla, JS, Material-UI',
    },
    {
        image: VCSIcon,
        title: 'Version Control System',
        body: 'GIT, GitLab, GitHub, Bitbucket',
    },
    {
        image: VirtualIcon,
        title: 'Virtualization/Container system',
        body: 'Docker, Docker Swarm, Kubernetes, Ansible',
    },
]

const DevelopmentStack = () => {
    const classes = useStyles();
    
    return(
        <div className={classes.mainContainer}>
            <Container className={classes.container}>
                <Typography variant="h3" className={classes.title}>Our Development Stack</Typography>
                <Grid container justify="space-around" className={classes.cardsContainer} spacing={5}>
                    {stack.map((stackItem, index) => (
                        <Grid item xs={12} sm={5} key={stackItem.title} className={classes.cardContainer}>
                            <Grid container alignItems="center" justify="center" spacing={3}>
                                <Grid item>
                                    <CircleHolder>
                                        <img src={stackItem.image} alt="lock" height="40" className={classes.cardImage}/>
                                    </CircleHolder>
                                </Grid>
                                <Grid item xs={8} >
                                    <div>
                                        <Typography variant="h5" className={classes.cardTitle}>{stackItem.title}</Typography>
                                        <Typography variant="body1" className={classes.cardBody}>{stackItem.body}</Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default DevelopmentStack;