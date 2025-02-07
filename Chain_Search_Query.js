require('dotenv').config()
require('./Database');
const person = require('./Person.model');


/**
 * Asynchronously performs a chained search query on the `person` collection.
 * 
 * The query searches for persons whose `favoriteFoods` array contains 'Burritos'.
 * The results are sorted by the `nom` field in ascending order, limited to 2 results,
 * and the `age` field is excluded from the returned documents.
 * 
 * @async
 * @function chainSearchQuery
 * @returns {Promise<void>} Logs the found persons or an error message to the console.
 */
async function chainSearchQuery() {
    try {
       let p = await person.find({ favoriteFoods: { $elemMatch: { $eq: 'Burritos' } }})
       .sort({nom: 1})
         .limit(2)
         .select('-age')
         .exec();
        console.log('Person found Successfully', p);
    } catch (error) {
        console.log(error);
    }


}
chainSearchQuery();

// Database connection successful
// Person found Successfully [
//   {
//     _id: new ObjectId('67a491725e69744b0c58db0e'),
//     nom: 'Alice Doe',
//     favoriteFoods: [ 'Burger', 'Fries', 'Coke', 'Burritos' ],
//     __v: 0
//   },
//   {
//     _id: new ObjectId('67a491725e69744b0c58db10'),
//     nom: 'Charlie Doe',
//     favoriteFoods: [ 'Pizza', 'Chocolate', 'Bread', 'Burritos' ],
//     __v: 0
//   }
