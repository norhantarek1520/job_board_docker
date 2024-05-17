const Jobs = require('../models/JobModel');
class JobController{

     

  static async createJob(req, res, next) {
    try {
      
      const newJob = new Jobs(req.body);
      const savedJob = await newJob.save();
      res.status(201).json({ message: "Job created successfully", data: savedJob });
    } catch (err) {
      res.status(500).json("Error in create this job")
    }
  }

  static async getAllJobs(req, res, next) {
    const limit = parseInt(req.query.limit || 20, 10); // Ensure numeric limit
    const page = Math.max(1, parseInt(req.query.page || 1, 10)); // Handle negative or zero page
    const skip = (page - 1) * limit;
    try {
      const jobs = await Jobs.find().skip(skip).limit(limit);
      res.status(200).json({ result: jobs.length, page: page, data: jobs })
    } catch (err) {
      res.status(500).json("Error")
    }
  }

  static async getJob(req, res, next) {
    const id = req.params.id;
    try {
      const job = await Jobs.findById(id);
      if (!job) {
        return res.status(404).json({ message: `No Job found with id: ${id}` });
      }
      res.status(200).json({ data: job });
    } catch (err) {
      res.status(500).json("Error in geting this job")
    }
  }

  static async updateJob(req, res, next) {
    const id = req.params.id;
    try {
      const updatedJob = await Jobs.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedJob) {
        return res.status(404).json({ message: `No Job found with id: ${id}` });
      }
      res.status(200).json({ message: "Job updated successfully", data: updatedJob });
    } catch (err) {
      next(err); // Pass error to error handling middleware
    }
  }

  static async deleteJob(req, res, next) {
    const id = req.params.id;
    try {
      const deletedJob = await Jobs.findByIdAndDelete(id);
      if (!deletedJob) {
        return res.status(404).json({ message: `No Job found with id: ${id}` });
      }
      res.status(204).json({ message: "Job deleted successfully" });
    } catch (err) {
      next(err); // Pass error to error handling middleware
    }
  }

  static checkServiceRunning(req, res) {
    res.send('Hello World! - from jobs service');
  }

}


module.exports = { JobController }