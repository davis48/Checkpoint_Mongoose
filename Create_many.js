require('dotenv').config()
require('./Database');
const person = require('./Person.model');

// Create and Save a new Contact
arrayOfPeoples = [
    {nom: 'Alice Doe', age: 30, favoriteFoods: ['Burger', 'Fries', 'Coke']},
    {nom: 'Bob Doe', age: 28, favoriteFoods: ['Steak', 'Ice cream', 'Chocolate']},
    {nom: 'Charlie Doe', age: 32, favoriteFoods: ['Pizza', 'Chocolate', 'Bread']},
 
]
/**
 * Inserts an array of people into the database.
 * 
 * This function attempts to insert multiple person documents into the database
 * using the `insertMany` method. If the insertion is successful, it logs a 
 * success message to the console. If an error occurs, it catches the error 
 * and logs it to the console.
 * 
 * @function
 * @throws Will log an error message if the insertion fails.
 */
function arrayOfPeople() {
    try {
        person.insertMany(arrayOfPeoples);

          console.log('Person created successfully');
    } catch (error) {
        console.log(error);
    }


}
arrayOfPeople();