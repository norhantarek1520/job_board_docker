const express = require('express');
const {JobController} = require('../controllers/JobControllers');
const router = express.Router();

router.get('/', JobController.checkServiceRunning)
router.get('/allJobs' , JobController.getAllJobs)
router.get('/:id', JobController.getJob);
router.post('/', JobController.createJob)
router.put('/:id', JobController.updateJob)
router.delete('/:id', JobController.deleteJob)
module.exports = router