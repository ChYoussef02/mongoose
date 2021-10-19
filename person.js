const mongoose = require('mongoose');
const  Schema  = mongoose;

var personSchema = new Schema ({
    name: {type: String,required: true},
  age: Number,
  favoriteFoods: [String]
}); 
var Person = mongoose.model('Person', personShema);

module.exports = Person;