import React, { useState, useContext } from 'react';
import { Container, Grid, TextField, Typography, Button, useTheme, useMediaQuery } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import useStyles from './styles'
import { sendMail } from '../../api';
import AppContext from '../../Context/AppContext';

const ContactUs = () => {
    const classes = useStyles();
    const appContext = useContext(AppContext);
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
    const matches = useMediaQuery(useTheme().breakpoints.down('sm'));

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!isFormValid()) return;

        setLoading(true);
        sendMail(form).then(() => {
            setForm({ name: '', email: '', subject: '', message: '' });
            setLoading(false);
            appContext.setAlert({ open: true, message: 'Successfully sent message!', severity: 'success' });
        }).catch(error => {
            setError(error?.response?.data?.message);
            setLoading(false);
        });


    }

    function isFormValid() {
        if (form.name.length === 0){
            setError('Please enter your name');
            return false;
        } else if (form.email.length === 0) {
            setError('Please enter your email address');
            return false;
        } else if (form.subject.length === 0) {
            setError('Please enter a subject');
            return false;
        } else if (form.message.length === 0) {
            setError('Please enter a message');
            return false;
        }
        return true;
    }

    return(
        <div className={classes.mainContainer}>
            <Container className={classes.container}>
                <Grid container justify="space-evenly" alignItems="center" direction={matches ? "column-reverse" : "row"} spacing={5}>
                    <Grid item md={4}>
                        <div className={classes.infoItemContainer}>
                            <MailOutlineIcon className={classes.icon}/>
                            <Typography variant="body2" className={classes.infoItemText}>support@veion.com</Typography>
                        </div>
                        <div className={classes.infoItemContainer}>
                            <ChatBubbleOutlineIcon className={classes.icon}/>
                            <Typography variant="body2" className={classes.infoItemText}>+961 71 076 827</Typography>
                        </div>
                        <div className={classes.infoItemContainer}>
                            <LocationOnOutlinedIcon className={classes.icon}/>
                            <Typography variant="body2" className={classes.infoItemText}>Lebanon, Aley</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ zIndex: '2' }}>
                        <div className={classes.titleContainer}>
                            <Typography variant="h4" className={classes.title}>Send us a message</Typography>
                            {error &&
                                <Typography variant="body2" className={classes.error}>{error}</Typography>
                            }
                        </div>
                        <form onSubmit={handleSubmit}>
                            <TextField fullWidth variant="outlined" color="primary" label="Name" name="name" value={form.name} onChange={handleChange} className={classes.input}/>
                            <TextField fullWidth variant="outlined" color="primary" label="Email" name="email" value={form.email} onChange={handleChange} className={classes.input}/>
                            <TextField fullWidth variant="outlined" color="primary" label="Subject" name="subject" value={form.subject} onChange={handleChange} className={classes.input}/>
                            <TextField fullWidth variant="outlined" color="primary" label="Message" name="message" value={form.message} onChange={handleChange} className={classes.input} multiline rows={6}/>
                            <Button type="submit" color="primary" variant="contained" fullWidth className={classes.submit} size="large">{isLoading ? 'Sending...' : 'Send'}</Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>  
        </div>
    );
}

export default ContactUs;