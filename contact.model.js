let mongoose = require('mongoose');
let validator = require('validator');
/**
 * Contact Schema
 * 
 * This schema defines the structure of a contact document in the database.
 * 
 * @property {String} nom - The last name of the contact. This field is required.
 * @property {String} prenom - The first name of the contact. This field is required.
 * @property {String} email - The email address of the contact. This field is required, unique, and must be a valid email format. Default value is 'abcd@hjk.com'.
 * @property {String} telephone - The telephone number of the contact. This field is required, unique, and must be a 10-digit number.
 */
let contactSchema = new mongoose.Schema({
    nom : {
        type : String,
        required : true,
    },
    prenom : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
        default: 'abcd@hjk.com',
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')}
        }
    },
    telephone : {
        type : String,
        required : true,
        unique : true,
        match : /^(\d{10})$/,
    }

})

let Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;