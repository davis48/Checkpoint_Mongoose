require('dotenv').config()
require('./Database');
const person = require('./Person.model');


/**
 * Asynchronously deletes multiple documents from the 'person' collection where the 'nom' field is 'Doe'.
 * Logs a success message with the result if the deletion is successful.
 * Logs an error message if an error occurs during the deletion process.
 *
 * @async
 * @function findManyRemove
 * @returns {Promise<void>} A promise that resolves when the operation is complete.
 */
async function findManyRemove() {
    try {
       let p = await person.deleteMany({ nom: 'Doe' })
        console.log('Data deleted Successfully', p);
    } catch (error) {
        console.log(error);
    }


}
findManyRemove();

// Database connection successful
// Data deleted Successfully { acknowledged: true, d