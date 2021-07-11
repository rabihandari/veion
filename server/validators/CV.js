import Validator from 'validator';

export default function Validation(data) {

    if (data.firstName.length === 0) {
        return { isValid: false, error: "First Name field is required" };
    } else if (data.lastName.length === 0) {
        return { isValid: false, error: "Last Name field is required" };
    } else if (data.email.length === 0) {
        return { isValid: false, error: "Email Address field is required" };
    } else if (!Validator.isEmail(data.email)) {
        return { isValid: false, error: "Email Address field is invalid" };
    } else if (data.phoneNumber.length === 0) {
        return { isValid: false, error: "Phone Number field is required" };
    } else if (!Validator.isMobilePhone(data.phoneNumber)) {
        return { isValid: false, error: "Phone Number field is invalid" };
    } else {
        return { isValid: true, error: "" };
    }

    
};