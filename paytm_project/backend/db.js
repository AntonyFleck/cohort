const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://anirudhardesai:vhZ38ZpPkpdE09pQ@cluster0.zqbdupz.mongodb.net/paytm")

const User=mongoose.model('User',{
    username: String,
    password: String,
    firstName: String,
    lastName: String
})

const Account=mongoose.model('Account',{
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

module.exports={
    User,
    Account
}