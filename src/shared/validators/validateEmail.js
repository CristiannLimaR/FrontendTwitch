export const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
}

export const emailValidateMessage = 'Please enter a valid email address'