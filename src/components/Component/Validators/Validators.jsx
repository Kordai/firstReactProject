export const required = value => {
    if (value) return undefined
    return "Field is required!!!"
}

export const maxLengthCreator = (length) => value => {
    if (value.length > length) return `Max length is ${length} symbols!!!`
    return undefined
}