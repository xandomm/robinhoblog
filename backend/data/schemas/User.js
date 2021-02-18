const { Schema } = require('mongoose');
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const UserSchema = new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String
    }
},{
    timestamps: true
}
);


module.exports = UserSchema;
