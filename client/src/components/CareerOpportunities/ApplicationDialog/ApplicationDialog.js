import React, { useState, useEffect, useContext } from 'react';
import { Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, DialogContentText, Grid } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { applyJob } from '../../../api';
import LinearIndeterminate from '../../shared/LinearIndeterminate/LinearIndeterminate';
import CheckIcon from '@material-ui/icons/Check';

import useStyles from './styles';
import AppContext from '../../../Context/AppContext';

const ApplicationDialog = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const appContext = useContext(AppContext);
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phoneNumber: '', cv: null });
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChange = (event) => {
        if (event.target.name === 'cv'){
            const file = event.target.files[0];
            if (!isFileValid(file)){
                setForm({ ...form, cv: null });
                return;
            }
            setForm({ ...form, cv: file });
        } else {
            setForm({ ...form, [event.target.name]: event.target.value });
        }
    }


    const isFileValid = (file) => {
        const ext = file.name.substring(file?.name?.lastIndexOf('.') + 1);
        if (file.size > 1000000 ){
            setError('* Your file\'s size must not exceed 1mb');
            return false;
        } else if (ext !== 'pdf'){
            setError('* Your file should be a PDF');
            return false;
        } 
        setError('');
        return true;
    }

    function isFormValid() {
        if (form.firstName.length === 0){
            return false;
        } else if (form.lastName.length === 0) {
            return false;
        } else if (form.email.length === 0) {
            return false;
        } else if (form.phoneNumber.length === 0) {
            return false;
        } else if (form.cv === null) {
            return false;
        }
        return true;
    }

    const submitForm = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('job', props.job.title);
        formData.append('firstName', form.firstName);
        formData.append('lastName', form.lastName);
        formData.append('email', form.email);
        formData.append('phoneNumber', form.phoneNumber);
        formData.append("cv", form.cv);

        
        // Request...
        setLoading(true);
        applyJob(formData).then(() => {
            props.handleClose();
            setLoading(false);
            appContext.setAlert({ open: true, message: 'Application Sent!', severity: 'success' })
        }).catch(error => {
            setError(error?.response?.data?.message);
            setLoading(false);
            appContext.setAlert({ open: true, message: error?.response?.data?.message, severity: 'error' })
        })


      };

    useEffect(() => {
        setForm({ firstName: '', lastName: '', email: '', phoneNumber: '', cv: null });
    }, [props.open]);
    
    return (
        <Dialog
            fullScreen={fullScreen}
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="responsive-dialog-title"
            PaperProps={{
                style: {
                    backgroundColor: theme.palette.secondary.light
                }
            }}
        >
            {isLoading && <LinearIndeterminate/>}
            <DialogTitle id="responsive-dialog-title">
                Job Application
                <Typography variant="body2">{props.job.title}</Typography>
            </DialogTitle>
            
            <form noValidate autoComplete="off" onSubmit={submitForm} encType="multipart/form-data">
                
                <DialogContent dividers classes={{ dividers: classes.divider }}>
                    <DialogContentText style={{ color: '#45b1f5' }}>
                        Your Details
                    </DialogContentText>
                    <Grid container justify="space-evenly" spacing={2} className={classes.formContainer}>
                        <Grid item xs={12} sm={6}>
                            <TextField label="First Name" name='firstName' onChange={handleChange} className={classes.textField} value={form.firstName} fullWidth/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Last Name" name='lastName' onChange={handleChange} className={classes.textField} value={form.lastName} fullWidth/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Email Address" name='email' onChange={handleChange} className={classes.textField} value={form.email} fullWidth/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Phone Number" name='phoneNumber' onChange={handleChange} className={classes.textField} value={form.phoneNumber} fullWidth/>
                        </Grid>
                    </Grid>
                    <DialogContentText style={{ color: '#45b1f5' }}>
                        Your CV (pdf)
                    </DialogContentText>
                    <div className={classes.cvContainer}>
                        <div className={classes.cvHolder}>
                            <input type="file" name='cv' onChange={handleChange} className={classes.cvInput}/>
                            <div className={classes.cvTextHolder}>
                                {!form.cv ?
                                    <Typography variant='body2' style={{ textAlign: 'center' }}>Click here to add your CV.</Typography>
                                :
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <CheckIcon style={{ color: 'green', marginRight: '10px' }} />
                                        <Typography variant='body2' style={{ textAlign: 'center' }}>{form.cv?.name}</Typography>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    {error &&
                        <Typography className={classes.errorText}>{error}</Typography>
                    }
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={props.handleClose} color="primary">
                        Discard
                    </Button>
                    <Button color="primary" type="submit" disabled={!isFormValid()}>
                        Apply
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}

export default ApplicationDialog;