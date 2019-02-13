const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        required: true,
        unique: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
});

mongoose.model('User', userSchema);