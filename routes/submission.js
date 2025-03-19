const express = require('express');
const router = express.Router();
const submissionController = require('../controllers/submissionController');
const authenticateToken = require('../middleware/auth');

router.post('/submit-form', submissionController.createSubmission);
router.get('/admin/submissions', authenticateToken, submissionController.getSubmissions);
router.get('/admin/export', authenticateToken, submissionController.exportCSV);
router.delete('/admin/submissions/:id', submissionController.deleteSubmission);

module.exports = router;