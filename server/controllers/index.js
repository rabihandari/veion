import CV_Validator from '../validators/CV.js';
import { sendCV } from '../config/nodemailer.js';
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