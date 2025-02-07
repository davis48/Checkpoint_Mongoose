require('dotenv').config()
require('./Database');
const person = require('./Person.model');


/**
 * Asynchronously finds a person by ID, edits their favorite foods, and saves the updated person.
 * 
 * @async
 * @function findEditSave
 * @returns {Promise<void>} - A promise that resolves when the person is found and updated successfully.
 * @throws {Error} - Throws an error if the person is not found or if there is an issue with saving the updated person.
 */
async function findEditSave() {
    try {
       let p = await person.findById("67a3595a2a400cf7cb17d017")
       p.favoriteFoods.push('Hamburger');
       let Created = await p.save();
        console.log('Person found Successfully', Created);
    } catch (error) {
        console.log(error);
    }


}
findEditSave();

// Person found Successfully {
//     _id: new ObjectId('67a3595a2a400cf7cb17d017'),
//     nom: 'Bob Doe',
//     age: 28,
//     favoriteFoods: [ 'Steak', 'Ice cream', 'Chocolate', 'Hamburger' ],
//     __v: 1
//   }