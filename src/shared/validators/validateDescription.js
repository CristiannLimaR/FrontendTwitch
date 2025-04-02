export const validateDescription = (description) => {
    return description.length >= 10 && description.length <= 200
}


export const descriptionValidateMessage = 'The description must be between 10 and 200 characters.'