import Validator from 'validator';

export default function Validation(data) {

    if (data.name.length === 0) {
        return { isValid: false, error: "Name field is required" };
    } else if (data.email.length === 0) {
        return { isValid: false, error: "Email Address field is required" };
    } else if (!Validator.isEmail(data.email)) {
        return { isValid: false, error: "Email Address field is invalid" };
    } else if (data.subject.length === 0) {
        return { isValid: false, error: "Subject field is required" };
    } else if (data.message.length === 0) {
        return { isValid: false, error: "Message field is required" };
    } else {
        return { isValid: true, error: "" };
    }

    
};