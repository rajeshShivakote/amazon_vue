const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OwnerScheme = new Schema({
    name: String,
    about: String,
    photo: String
})

module.exports = mongoose.model('Owner', OwnerScheme);