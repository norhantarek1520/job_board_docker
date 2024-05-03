const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Jobs = new Schema(
    {
        title: { type: String, required: true },
        job_type: { type: String, required: true },
        salary: { type: Number, required: true },

        description: { type: String, required: false , default : "No Job Description"},
        location: { type: String, required: false },
        qualifications: { type: String, required: false },
        vacancy: { type: String, required: false , default : 1},

        deadline: {
            type: Date,      
            default: () => {
              const today = new Date(); // Get the current date
              const oneMonthFromToday = new Date(today.getTime() + (30 * 24 * 60 * 60 * 1000)); // Add one month in milliseconds
              return oneMonthFromToday;
            },
        },
        postedAt: { 
            type: Date,
            default: Date.now, 
        },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Jobs', Jobs)