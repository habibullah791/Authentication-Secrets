import mongoose from "mongoose";
import encrypt from "mongoose-encryption";


// Environment Variable
var secret = process.env.SOME_LONG_UNGUESSABLE_STRING;

// Schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})


//  Encrypting The Password Filed
userSchema.plugin(encrypt, { secret: secret , encryptedFields: ['password'] });

// Creating User Model
const User = mongoose.model("User", userSchema);

export default User;