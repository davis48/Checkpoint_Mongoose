require('dotenv').config()
require('./Database');
const person = require('./Person.model');


/**
 * Creates a new person and saves it to the database.
 * The person has a name, age, and a list of favorite foods.
 * Logs a success message if the person is created successfully,
 * otherwise logs an error message.
 */
function createPerson() {
    try {
        const newPerson = new person({
            nom: 'John Doe',
            age: 25,
            favoriteFoods: ['Pizza', 'Pasta', 'Salad']
          });
          newPerson.save();
          console.log('Person created successfully');
    } catch (error) {
        console.log(error);
    }


}
