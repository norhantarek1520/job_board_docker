const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Companies = new Schema(
    {
        name: { type: String, required: true },
        owner :{type :String , required : true},
        location :{type :String , required : false},
        description: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Companies', Companies)