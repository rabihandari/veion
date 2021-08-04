import React, { useState, useContext } from 'react';
import { Container, Grid, TextField, Typography, Button, useTheme, useMediaQuery, Slider } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import { FileDrop } from 'react-file-drop';

import useStyles from './styles'
import { getQuote } from '../../api';
import AppContext from '../../Context/AppContext';
import SelectableCard from '../shared/Cards/SelectableCard/SelectableCard';
import WebsiteIcon from '../../images/ic_website.svg';
import MobileIcon from '../../images/ic_mobile.svg';
import UIUXIcon from '../../images/ic_uiux.svg';
import SoftwareIcon from '../../images/ic_software.svg';

const services = [
    {
        icon: WebsiteIcon,
        title: 'Website Development',
    },
    {
        icon: MobileIcon,
        title: 'Mobile Application',
    },
    {
        icon: UIUXIcon,
        title: 'UI/UX Design',
    },
    {
        icon: SoftwareIcon,
        title: 'Software Development',
    },
]

const marks = [
    {
      value: 5,
      label: '5K $',
    },
    {
      value: 25,
      label: '25K $',
    },
    {
      value: 50,
      label: '50K $',
    },
    {
      value: 100,
      label: '100K $',
    },
  ];

const GetAQuote = () => {
    const classes = useStyles();
    const appContext = useContext(AppContext);
    const [form, setForm] = useState({ name: '', email: '', companyName: '', phoneNumber: '', subject: '', services: [], budgetRange: '5K$', pdfFile: null });
    const [error, setError] = useState('');
    const [pdfError, setPdfError] = useState('');
    const [isLoading, setLoading] = useState(false);
    const matches = useMediaQuery(useTheme().breakpoints.down('sm'));

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleChangeFile = (file) => {
        setPdfError('');
        if (!isFileValid(file)){
            setForm({ ...form, pdfFile: null });
            return;
        }
        setForm({ ...form, pdfFile: file });
    }

    const isFileValid = (file) => {
        const ext = file.name.substring(file?.name?.lastIndexOf('.') + 1);
        if (file.size > 1000000 ){
            setPdfError('Your file\'s size must not exceed 1mb');
            return false;
        } else if (ext !== 'pdf'){
            setPdfError('Your file should be a PDF');
            return false;
        } 
        setError('');
        return true;
    }

    const addToSelected = (title) => () => {
        if(form.services.includes(title)){
            setForm({...form, services: form.services.filter(service => service !== title)})
        }else{
            setForm({...form, services: [...form.services, title]})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!isFormValid()) return;

        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('email', form.email);
        formData.append('companyName', form.companyName);
        formData.append('phoneNumber', form.phoneNumber);
        formData.append('subject', form.subject);
        formData.append('services', JSON.stringify(form.services));
        formData.append("budgetRange", form.budgetRange);
        formData.append("pdfFile", form.pdfFile);


        setLoading(true);
        getQuote(formData).then(() => {
            setForm({ name: '', email: '', companyName: '', phoneNumber: '', subject: '', services: '', budgetRange: '5K$', pdfFile: null });
            setLoading(false);
            appContext.setAlert({ open: true, message: 'Quote sent! We will get back to you with in 24 hours', severity: 'success' });
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
        } else if (form.phoneNumber.length === 0) {
            setError('Please enter your phone number');
            return false;
        } else if (form.subject.length === 0) {
            setError('Please enter a subject');
            return false;
        } else if (form.companyName.length === 0) {
            setError('Please enter your company name');
            return false;
        } else if (form.services.length === 0) {
            setError('Please choose at least one service');
            return false;
        } else if (form.budgetRange.length === 0) {
            setError('Please choose your budget range');
            return false;
        }
        return true;
    }

    function valuetext(value) {
        return `${value} $`;
      }
      
      function valueLabelFormat(value) {
        return marks.findIndex((mark) => mark.value === value) + 1;
      }

    return(
        <div className={classes.mainContainer}>
            <Container className={classes.container}>
                <Grid container justify="space-evenly" alignItems="center" direction={matches ? "column-reverse" : "row"} spacing={5}>
                    <Grid item xs={12} md={8}>
                        <div className={classes.titleContainer}>
                            <Typography variant="h4" className={classes.title}>Start your project</Typography>
                            {error &&
                                <Typography variant="body2" className={classes.error}>{error}</Typography>
                            }
                        </div>
                        <form onSubmit={handleSubmit}>
                            <TextField fullWidth variant="outlined" color="primary" label="Name" name="name" value={form.name} onChange={handleChange} className={classes.input}/>
                            <TextField fullWidth variant="outlined" color="primary" label="Email" name="email" value={form.email} onChange={handleChange} className={classes.input}/>
                            <TextField fullWidth variant="outlined" color="primary" label="Phone Number" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} className={classes.input} type="number" />
                            <TextField fullWidth variant="outlined" color="primary" label="Company Name" name="companyName" value={form.companyName} onChange={handleChange} className={classes.input}/>
                            <TextField fullWidth variant="outlined" color="primary" label="Subject" name="subject" value={form.subject} onChange={handleChange} className={classes.input} multiline rows={4} style={{ marginBottom: '0px' }}/>
                            <div className={classes.servicesContainer}>
                                <Typography className={classes.sectionTitle}>Services</Typography>
                                <Grid container spacing={3}>
                                    {services.map(service => (
                                        <Grid item key={service.title} xs={12} md={6} onClick={addToSelected(service.title)}>
                                            <SelectableCard selected={form.services.includes(service.title)}>
                                                <img src={service.icon} alt={service.title} height="60" width="60"/>
                                                <Typography className={classes.serviceTitle}>{service.title}</Typography>
                                            </SelectableCard>
                                        </Grid>
                                    ))}
                                </Grid>
                            </div>
                            <div className={classes.servicesContainer}>
                                <Typography className={classes.sectionTitle}>Budget range</Typography>
                                <Slider
                                    defaultValue={5}
                                    valueLabelFormat={valueLabelFormat}
                                    getAriaValueText={valuetext}
                                    aria-labelledby="discrete-slider-restrict"
                                    onChange={(e, value) => setForm({...form, budgetRange:`${value === 0 ? 5 : value}K$`})}
                                    step={null}
                                    value={parseInt(form.budgetRange.split('K')[0])}
                                    classes={{markLabel:classes['MuiSlider-markLabel'], markLabelActive:classes['MuiSlider-markLabelActive']}}
                                    valueLabelDisplay="off"
                                    marks={marks}
                                />
                            </div>
                            <div className={classes.pdfContainer}>
                                <Typography className={classes.sectionTitle}>Additional Info - Optional (pdf):</Typography>
                                <FileDrop 
                                    className={classes.pdfHolder}
                                    draggingOverFrameClassName={classes.pdfHolderHovered}
                                    onDrop={(files, event) => handleChangeFile(files[0])}
                                >
                                    <input type="file" name='pdfFile' onChange={(e) => {handleChangeFile(e.target.files[0])}} className={classes.pdfInput}/>
                                    <div className={classes.pdfTextHolder}>
                                        {!form.pdfFile ?
                                            (!pdfError ? 
                                                <Typography variant='body2' style={{ textAlign: 'center' }}>Click or Drag your files here</Typography> 
                                            : 
                                                <Typography variant='body2' style={{ textAlign: 'center', color: 'red' }}>{pdfError}</Typography>
                                            )
                                            
                                        :
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <CheckIcon style={{ color: 'green', marginRight: '10px' }} />
                                                <Typography variant='body2' style={{ textAlign: 'center', color: 'white' }}>
                                                    {form.pdfFile?.name}
                                                </Typography>
                                            </div>
                                        }
                                    </div>
                                </FileDrop>
                            </div>
                            <Button type="submit" color="primary" variant="contained" fullWidth className={classes.submit} size="large">{isLoading ? 'Sending...' : 'Send'}</Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>  
        </div>
    );
}

export default GetAQuote;