const express = require('express');
const { createProperty, getProperties } = require('../controllers/propertyController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

const router = express.Router();

router.post('/', protect, upload.array('images', 5), createProperty);
router.get('/', getProperties);

module.exports = router;
