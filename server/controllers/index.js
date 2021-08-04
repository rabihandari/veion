import CV_Validator from '../validators/CV.js';
import ContactUsValidator from '../validators/ContactUs.js';
import QuoteVildator from '../validators/Quote.js';
import { sendCV, sendMail as contactUs, sendQuote } from '../config/nodemailer.js';
import fs from 'fs';
import path from 'path';

export const applyJob = async (req, res) => {
    const data = req.body
    const { isValid, error } = CV_Validator(data);

    if (!isValid) 
        return res.status(405).json({ message: error })

    // Send Job Appilcation as an email...
    try{
        sendCV(data ,`/temp/${req.file.filename}`).then(() => {
            // Deleting temp CV
            fs.unlinkSync(path.resolve(`${process.cwd()}/temp/${req.file.filename}`));
        })
        
        res.status(201).json({ success: true });
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong!' });
    }
}


export const sendMail = async (req, res) => {
    const { name, email, subject, message } = req.body;
    const { isValid, error } = ContactUsValidator(req.body);

    if (!isValid){
        return res.status(405).json({ message: error })
    }

    try {
        contactUs(name, email, subject, message);
        res.status(201).json({ message: 'Successfully sent message' });
        
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!' });
    }

}



export const getQuote = async (req, res) => {
    const data = req.body
    const { isValid, error } = QuoteVildator(data);

    if (!isValid) 
        return res.status(405).json({ message: error })

    // Send Quote as an email...
    try{
        try{
            const fileName = req.file.filename;
            sendQuote(data ,`/temp/${fileName}`).then(() => {
                // Deleting temp Quote
                fs.unlinkSync(path.resolve(`${process.cwd()}/temp/${fileName}`));
            })
        } catch(error){
            sendQuote(data)
        }
        
        res.status(201).json({ success: true });
    } catch(error) {
        res.status(500).json({ message: 'Something went wrong!' });
    }
}

