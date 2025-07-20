const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
");

const userSchema = mongoose.Schema({
    image: String,
    email: String,
    name: String
})

module.exports = mongoose.model('user', userSchema);
