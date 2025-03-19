require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const rateLimiter = require('./middleware/rateLimiter');
const submissionRoutes = require('./routes/submission');
const authRoutes = require('./routes/auth');
const blogRoutes = require('./routes/blog'); 

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(rateLimiter);

// Routes
app.use('/api', submissionRoutes);
app.use('/api', authRoutes);
app.use('/api', blogRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something broke!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});