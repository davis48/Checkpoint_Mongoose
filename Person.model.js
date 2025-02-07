let mongoose = require('mongoose');
let personSchema = new mongoose.Schema({
    nom : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : true,
    },
    favoriteFoods : []
})

let Person = mongoose.model('Person', personSchema);

module.exports = Person;