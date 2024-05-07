const express = require('express');
const {ApplicationsController} = require('../controllers/ApplicationsController');
const router = express.Router();


router.get('/', ApplicationsController.checkServiceRunning)
router.get('/allApplications' , ApplicationsController.getApplications) //admins
router.get('/:id', ApplicationsController.getApplication);
router.post('/', ApplicationsController.createApplication)
router.delete('/:id' , ApplicationsController.deleteApplication)
module.exports = router