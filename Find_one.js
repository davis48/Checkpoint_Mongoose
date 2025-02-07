require('dotenv').config()
// Initialize the database connection
// The Mongoose model for the 'Person' collection
const person = require('./Person.model');
const person = require('./Person.model');


/**
 * Asynchronously finds one person in the database whose favorite food is 'Pizza'.
 * 
 * @async
 * @function findoneperson
 * @returns {Promise<void>} Logs the found person or an error to the console.
 * @throws Will log an error to the console if the database query fails.
 */
async function findoneperson() {
    try {
       const p = await person.findOne({
            favoriteFoods: { $elemMatch: { $eq: 'Pizza' } }
        })

          console.log('Person found Successfully', p);
    } catch (error) {
        console.log(error);
    }


}
findoneperson();

// Person found Successfully {
//     _id: new ObjectId('67a355e117297bcca7836b1b'),
//     nom: 'John Doe',
//     age: 25,
//     favoriteFoods: [ 'Pizza', 'Pasta', 'Salad' ],
//     __v: 0
//   }