const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://bhush8766:Bhush@2328@@cluster0.yawkujz.mongodb.net/");

const userSchema = mongoose.Schema({
    image: String,
    email: String,
    name: String
})

module.exports = mongoose.model('user', userSchema);
