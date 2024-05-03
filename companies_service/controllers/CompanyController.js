const mongoose = require('mongoose');

const Companies = mongoose.model('Companies'); // Assuming 'Companies' model is already defined

class CompanyController{

    static handleError = (err, res) => {
        console.error(err);
        res.status(500).json({ message: 'Error occurred' });
    };
  
  // Create a new company (Create)
  static createCompany = async (req, res) => {
    try {
      // Validate input data (using a library like Joi or custom validation)
      const { name, owner, description, location } = req.body;
  
      // Check for required fields
      if (!name || !owner || !description) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
  
      // Create a new company instance
      const company = new Companies({ name, owner, description, location });
  
      // Save the company to the database
      const savedCompany = await company.save();
  
      res.status(201).json(savedCompany);
    } catch (err) {
      handleError(err, res);
    }
  };
  
  // Get all companies (Read)
  static getCompanies = async (req, res) => {
    try {
      const companies = await Companies.find();
      res.status(200).json(companies);
    } catch (err) {
      handleError(err, res);
    }
  };
  
  // Get a specific company by ID (Read)
  static getCompanyById = async (req, res) => {
    try {
      const companyId = req.params.id;
      const company = await Companies.findById(companyId);
  
      if (!company) {
        return res.status(404).json({ message: 'Company not found' });
      }
  
      res.status(200).json(company);
    } catch (err) {
      handleError(err, res);
    }
  };
  
  // Update a company (Update)
  static updateCompany = async (req, res) => {
    try {
      const companyId = req.params.id;
      const updates = req.body; // Update data (use a validation library to ensure valid updates)
  
      const company = await Companies.findByIdAndUpdate(companyId, updates, { new: true });
  
      if (!company) {
        return res.status(404).json({ message: 'Company not found' });
      }
  
      res.status(200).json(company);
    } catch (err) {
      handleError(err, res);
    }
  };
  
  // Delete a company (Delete)
  static deleteCompany = async (req, res) => {
    try {
      const companyId = req.params.id;
  
      const company = await Companies.findByIdAndDelete(companyId);
  
      if (!company) {
        return res.status(404).json({ message: 'Company not found' });
      }
  
      res.status(200).json({ message: 'Company deleted successfully' });
    } catch (err) {
      handleError(err, res);
    }
  };
  static checkServiceRunning(req, res) {
    res.send('Hello World! - from Company service');
  }
}
module.exports ={CompanyController}

