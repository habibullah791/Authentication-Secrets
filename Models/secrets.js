import mongoose from "mongoose";
import encrypt from "mongoose-encryption";


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
// Creating User Model
const User = mongoose.model("User", userSchema);

export default User;