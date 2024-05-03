const express = require('express');
const {CategoryController} = require('../controllers/CategoryController')
const router = express.Router();

router.get('/', CategoryController.checkServiceRunning)
router.get('/allCategories' , CategoryController.getAllCategories)
router.get('/:id', CategoryController.getCategory);
router.put('/:id', CategoryController.updateCategory)//admins
router.delete('/:id', CategoryController.deleteCategory)//admins
router.post('/', CategoryController.createCategory)

module.exports = router