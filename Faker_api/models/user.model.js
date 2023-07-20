const mongoose = require('mongoose')



const UserSchema = new mongoose.Schema(
    {
        first:{
            type: String
        },
        last: {
            type: String
        }
    }
)

const User = mongoose.model('User', UserSchema)

module.exports = User

// module.exports.user = [
//     {password: "password"},
//     {email: "email"},
//     {phoneNumber: "phoneNumber"},
//     {lastName: "lastName"},
//     {firstName: "firstName"},
//     {_id: "id"}
// ]