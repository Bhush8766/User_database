const mongoose = require('mongoose');

mongoose.connect("mongoose.connect("mongoose.connect("mongodb+srv://bhush123:myP%40ssword123@cluster0.mongodb.net/userData?retryWrites=true&w=majority");

const userSchema = mongoose.Schema({
    image: String,
    email: String,
    name: String
})

module.exports = mongoose.model('user', userSchema);
