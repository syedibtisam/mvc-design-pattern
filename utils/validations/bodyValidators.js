const { validationResult, body } = require("express-validator");


const createValidationCheck = field => body(field).notEmpty().withMessage(`${field} is required`);

const fieldValidation = {
    "username": createValidationCheck('username'),
    "password": createValidationCheck('password'),
    "fullname": createValidationCheck('fullname')
}

exports.resultsValidator = (req) => {
    const messages = []
    if (!validationResult(req).isEmpty()) {
        const errors = validationResult(req).array()
        for (const i of errors) {
            messages.push(i)
        }
    }
    return messages
}

exports.validator = (fields) => {
    let arr = [];
    for (let i = 0; i < fields.length; i++) {
        arr.push(fieldValidation[fields[i]]);
    }
    return arr;
}