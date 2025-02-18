export const validateLogin = payload => {
    if (!payload || typeof payload !== 'object') {
        return {isValid: false, message: 'Payload inválido'};
    }

    const {username, password} = payload;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(username);
    const isPasswordValid = typeof password === 'string' && password.length > 7;

    if (!isEmailValid || !isPasswordValid) {
        return false;
    }

    return true;
};
