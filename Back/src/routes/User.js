const express = require('express');
const router = express.Router();

const { usersController } = require('../controllers/userController');
router.post('/', usersController.createUser);
module.exports = router;