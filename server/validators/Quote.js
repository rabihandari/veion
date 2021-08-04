import Validator from 'validator';

export default function Validation(data) {
    if (data.name.length === 0) {
        return { isValid: false, error: "Name field is required" };
    }else if (data.email.length === 0) {
        return { isValid: false, error: "Email Address field is required" };
    } else if (!Validator.isEmail(data.email)) {
        return { isValid: false, error: "Email Address field is invalid" };
    } else if (data.phoneNumber.length === 0) {
        return { isValid: false, error: "Phone Number field is required" };
    } else if (!Validator.isMobilePhone(data.phoneNumber)) {
        return { isValid: false, error: "Phone Number field is invalid" };
    }else if (data.subject.length === 0) {
        return { isValid: false, error: "Subject field is required" };
    }else if (data.companyName.length === 0) {
        return { isValid: false, error: "Company name field is required" };
    }else if (data.services.length === 0) {
        return { isValid: false, error: "Please select at least one service" };
    }else if (data.budgetRange.length === 0) {
        return { isValid: false, error: "Please select your budjet range" };
    } else {
        return { isValid: true, error: "" };
    }
};