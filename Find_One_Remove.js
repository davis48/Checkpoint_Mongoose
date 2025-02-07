require('dotenv').config()
require('./Database');
const person = require('./Person.model');


/**
 * Asynchronously finds and removes a person document from the database by its ID.
 * 
 * @async
 * @function findOneRemove
 * @returns {Promise<void>} - A promise that resolves when the person document is deleted.
 * @throws {Error} - Throws an error if the deletion fails.
 */
async function findOneRemove() {
    try {
       let p = await person.findOneAndDelete({ _id: "67a355e117297bcca7836b1b" })
        console.log('Person deleted Successfully', p);
    } catch (error) {
        console.log(error);
    }


}
findOneRemove();

// Person deleted Successfully {
//     _id: new ObjectId('67a355e117297bcca7836b1b'),
//     nom: 'John Doe',
//     age: 20,
//     favoriteFoods: [ 'Pizza', 'Pasta', 'Salad' ],
//     __v: 0
//   }