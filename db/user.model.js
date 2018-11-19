const mongoose = require('./connection');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    _id         : Schema.Types.ObjectId,
    first_name  : String,
    last_name   : String,
    email       : String
});

module.exports = mongoose.model('User', UserSchema);
