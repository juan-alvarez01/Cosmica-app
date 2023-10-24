const express = require('express');
const upload = require('../../multer/multer');

const catalogController = require('../controllers/catalogController');

const router = express.Router();

router.get('/', catalogController.listProducts);
router.post('/', upload.single('image'), catalogController.createProduct);

module.exports = router; 