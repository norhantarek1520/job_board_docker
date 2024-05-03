const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Applications = new Schema(
    {
        userId: { type: String, required: true },
        jobId: { type: String, required: true },
        emial : {type : String},
        name :{type :String},
        status: {
            type: String,
            required: true,
            enum: ['accepted', 'waiting', 'refused'],
            default: 'waiting', 
          }
    },
    { timestamps: true },
)

module.exports = mongoose.model('Applications', Applications);