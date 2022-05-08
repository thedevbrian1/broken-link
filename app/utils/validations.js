export function validateName(name) {
    if (typeof name !== "string" || name.length < 2) {
        return 'Name must be at least 2 characters long';
    }
}

export function validateEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailRegex)) {
        return 'Invalid email address';
    }
}

export function validateMessage(message) {
    if (typeof message !== "string") {
        return 'Message must be a string';
    }
}

export function validateAirtime(airtime) {
    if (typeof  airtime !== "number") {
        return 'Amount must be a number';
    } else if (airtime < 5) {
        return 'Amount must be at least Ksh 5';
    } else if (airtime > 10000) {
        return 'Amount must be less than Ksh 10000';
    }
}
