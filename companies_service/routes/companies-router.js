const express = require('express');
const {CompanyController} = require('../controllers/CompanyController')
const router = express.Router();

router.get('/', CompanyController.checkServiceRunning)
router.get('/all' , CompanyController.getCompanies)
router.get('/:id', CompanyController.getCompanyById);
router.put('/:id', CompanyController.updateCompany)//admins
router.delete('/:id', CompanyController.deleteCompany)//admins
router.post('/', CompanyController.createCompany)

module.exports = router