const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 4000;

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: String, required: true },
  location: { type: String, required: false },
  description: { type: String, required: false },
}, { timestamps: true });
const Company = mongoose.model('Companies', companySchema);

mongoose.connect("mongodb://companies_db:27017/companiesdb", { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((e) => console.error('Connection error', e.message));


app.use(bodyParser.json());

app.get('/api/companies/all', async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving companies');
  }
});
app.post('/api/companies', async (req, res) => {
  const newCompany = new Company(req.body);
  try {
    const savedCompany = await newCompany.save();
    res.status(201).json(savedCompany);
  } catch (error) {
    console.error(error);
    res.status(400).send('Error creating company');
  }
});
app.get('/api/companies/:id', async (req, res) => {
  try {
    const companies = await Company.findById(req.params.id);
    res.json(companies);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving companies');
  }
});
app.get('/api/companies',(req, res) =>{
    res.send('Hello World! - from category service');
})
app.delete('/api/companies/:id' , async (req, res, next) => {
  const company = await Company.findOneAndDelete({ _id: req.params.id })
  res.status(204).json({ "message": "company deleted successfully " })
}) 

app.listen(port, () => console.log(`Server listening on port ${port}`));
