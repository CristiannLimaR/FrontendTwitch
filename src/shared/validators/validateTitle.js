export const validateTitle = (title) => {
    return title.length >= 3 && title.length <=30
}

export const validateTitleMessage = 'The title must be between 3 and 30 characters'