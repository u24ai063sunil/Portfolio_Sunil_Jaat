const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/', contactController.createContact);
router.get('/', contactController.getAllContacts);
router.patch('/:id/read', contactController.markAsRead);

module.exports = router;
