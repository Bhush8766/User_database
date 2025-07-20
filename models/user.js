const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://bhush8766:Bhush%402328%40@cluster0.yawkujz.mongodb.net/userData?retryWrites=true&w=majority");

const userSchema = mongoose.Schema({
    image: String,
    email: String,
    name: String
})

module.exports = mongoose.model('user', userSchema);
