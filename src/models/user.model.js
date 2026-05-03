import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String
}, {
    versionKey= false
})

const User = mongoose.model("User", userSchema)

export { User }