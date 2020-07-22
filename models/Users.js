const mongoose =require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema ({
    firstName: String,
    lastName: String,
    email: String,
    age: Number,
    password: String,
    role: String,
    confirmPassword: Boolean
}); 

module.exports = mongoose.model('User', UserSchema);