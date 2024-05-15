const mongoose = require('mongoose')

const googleUserSchema = new mongoose.Schema({
    fullName : {
        type : String,
    },
    email : String,
    googleId : String,
    picture : String
})

module.exports = mongoose.model("google-user",googleUserSchema)