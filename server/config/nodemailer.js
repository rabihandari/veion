import nodemailer from 'nodemailer';
import handlebars from 'handlebars';
import * as fs from 'fs';
import * as path from 'path';
 
export const sendCV = async (data, cv_path) => {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.GMAIL_USER, 
            pass: process.env.GMAIL_PASS, 
        },
    });

    // Compiling activation html template
    const filePath = path.join(path.resolve(), 'templates/jobApplication.html');
    const source = fs.readFileSync(filePath, 'utf-8').toString();
    const template = handlebars.compile(source);
    const replacements = {
        job: data.job,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
    };
    const htmlToSend = template(replacements);

    // send mail with defined transport object
    await transporter.sendMail({
        from: `Veion Support <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        subject: 'Job Applicaiton', 
        html: htmlToSend,
        attachments: [
            {   
                filename: 'Job Application.pdf',
                path: path.join(path.resolve(), cv_path)
            },
        ]
    });
}

export const sendMail = async (name, email, subject, message) => {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.GMAIL_USER, 
            pass: process.env.GMAIL_PASS, 
        },
    });

    // send mail with defined transport object
    await transporter.sendMail({
        from: `${name} <${email}>`, // sender address
        to: process.env.GMAIL_USER, // list of receivers
        subject: subject, // Subject line
        html: `<h3><b>Email: </b>${email}</h3>` + '<br/>' + message, // html body
    });
}
 
export const sendQuote = async (data, quote_path=null) => {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.GMAIL_USER, 
            pass: process.env.GMAIL_PASS, 
        },
    });

    // Compiling activation html template
    const filePath = path.join(path.resolve(), 'templates/quoteApplication.html');
    const source = fs.readFileSync(filePath, 'utf-8').toString();
    const template = handlebars.compile(source);
    const replacements = {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        companyName: data.companyName,
        subject: data.subject,
        services: JSON.parse(data.services).join(', '),
        budgetRange: data.budgetRange,
    };
    const htmlToSend = template(replacements);

    // send mail with defined transport object
    if (quote_path){
        await transporter.sendMail({
            from: `Veion Support <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            subject: 'Quote Applicaiton', 
            html: htmlToSend,
            attachments: [
                {   
                    filename: 'Quote Application.pdf',
                    path: path.join(path.resolve(), quote_path)
                },
            ]
        });
    }else{
        await transporter.sendMail({
            from: `Veion Support <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            subject: 'Quote Applicaiton', 
            html: htmlToSend,
        });
    }
}

