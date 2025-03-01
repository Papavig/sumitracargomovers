const Blog = require('../models/blog');

// Public endpoints
exports.getAllBlogs = async (req, res) => {
    try {
        const { search, sortBy, order } = req.query;
        let query = {};
        let sortOptions = {};

        // Search functionality
        if (search) {
            query = {
                $or: [
                    { title: new RegExp(search, 'i') },
                    { content: new RegExp(search, 'i') },
                    { author: new RegExp(search, 'i') }
                ]
            };
        }

        // Sorting
        if (sortBy) {
            sortOptions[sortBy] = order === 'desc' ? -1 : 1;
        } else {
            sortOptions = { date: -1 }; // Default sort by date desc
        }

        const blogs = await Blog.find(query)
            .sort(sortOptions)
            .select('-__v');

        res.json(blogs);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching blogs' });
    }
};

exports.getBlogBySlug = async (req, res) => {
    try {
        const blog = await Blog.findOne({ slug: req.params.slug })
            .select('-__v');

        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        res.json(blog);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching blog' });
    }
};

// Admin endpoints
exports.createBlog = async (req, res) => {
    try {
      const { title, content, image, author, date } = req.body;
      const slug = title.toLowerCase().replace(/\s+/g, "-"); // Generate slug
  
      const newBlog = new Blog({ title, content, image, author, date, slug });
      await newBlog.save();
  
      res.status(201).json({ message: "Blog created successfully", blog: newBlog });
    } catch (error) {
      res.status(500).json({ message: "Error creating blog", error });
    }
  };

exports.updateBlog = async (req, res) => {
    try {
        const { title, content, imageUrl, author } = req.body;
        const blogId = req.params.id;

        // Validation
        if (!title || !content || !imageUrl || !author) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                title,
                content,
                imageUrl,
                author
            },
            { new: true, runValidators: true }
        );

        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        res.json(blog);
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ error: 'A blog with this title already exists' });
        } else {
            res.status(500).json({ error: 'Error updating blog' });
        }
    }
};

exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);

        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting blog' });
    }
};
