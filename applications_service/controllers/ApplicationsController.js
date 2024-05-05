const Applications = require('../models/ApplicationsModel')

class ApplicationsController{

    static createApplication = async (req, res) => {   
    try {
      const application = await Applications.create({
        jobId: req.body.jobId, 
        userId : req.body.userId,
        name :req.body.name,
        emial: req.body.emial 

        })
        res.status(201).json(application);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    };
   static getApplications = async (req, res) => {
      try {
        const applications = await Applications.find();
        res.status(200).json(applications);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    };
   static getApplication = async (req, res) => {
      try {
        const application = await Applications.findById(req.params.id);
        if (!application) {
          return res.status(404).json({ message: 'Application not found' });
        }
        res.status(200).json(application);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    };


  
    static checkServiceRunning(req, res) {
      res.send('Hello World! - from Applications service');
    }
  
  }
  
  
  module.exports = { ApplicationsController }

