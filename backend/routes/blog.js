const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const authenticateToken = require('../middleware/auth');

// Public routes
router.get('/blogs', blogController.getAllBlogs);
router.get('/blogs/:slug', blogController.getBlogBySlug);

// Admin routes
// router.post('/admin/blogs', authenticateToken, blogController.createBlog);
// router.put('/admin/blogs/:id', authenticateToken, blogController.updateBlog);
// router.delete('/admin/blogs/:id', authenticateToken, blogController.deleteBlog);

router.post('/admin/blogs', blogController.createBlog);
router.put('/admin/blogs/:id', blogController.updateBlog);
router.delete('/admin/blogs/:id', blogController.deleteBlog);

module.exports = router;