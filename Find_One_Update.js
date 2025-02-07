require('dotenv').config()
require('./Database');
const person = require('./Person.model');


/**
 * Asynchronously finds a person by their name and updates their age.
 * 
 * This function uses the `findOneAndUpdate` method from Mongoose to find a person
 * with the name 'John Doe' and updates their age to 20. The updated document is 
 * returned and logged to the console.
 * 
 * @async
 * @function findOneUpdate
 * @returns {Promise<void>} A promise that resolves when the operation is complete.
 * @throws Will log an error to the console if the operation fails.
 */
async function findOneUpdate() {
    try {
       let p = await person.findOneAndUpdate({ nom: 'John Doe' }, { age: 20 }, { new: true })
        console.log('Person found Successfully', p);
    } catch (error) {
        console.log(error);
    }


}
findOneUpdate();

