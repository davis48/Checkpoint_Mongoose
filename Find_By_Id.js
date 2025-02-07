require('dotenv').config()
require('./Database');
const person = require('./Person.model');


/**
 * Asynchronously finds a person by their ID.
 *
 * @async
 * @function findPersonById
 * @returns {Promise<void>} Logs the found person or an error to the console.
 * @throws Will log an error to the console if the person cannot be found.
 */
async function findPersonById() {
    try {
       const p = await person.findById("67a3595a2a400cf7cb17d017")

          console.log('Person found Successfully', p);
    } catch (error) {
        console.log(error);
    }


}
findPersonById();

// Person found Successfully {
//     _id: new ObjectId('67a3595a2a400cf7cb17d017'),
//     nom: 'Bob Doe',
//     age: 28,
//     favoriteFoods: [ 'Steak', 'Ice cream', 'Chocolate' ],
//     __v: 0
//   }