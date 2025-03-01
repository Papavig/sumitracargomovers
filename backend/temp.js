require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const MONGO_URI = process.env.MONGO_URI; // Load from .env

if (!MONGO_URI) {
    console.error("MongoDB URI is missing! Check your .env file.");
    process.exit(1);
}

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const adminSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const Admin = mongoose.model('Admin', adminSchema);

async function insertAdmin() {
    const hash = await bcrypt.hash('admin123', 10); // Hash password

    const admin = new Admin({
        username: 'admin',
        password: hash, // Store hashed password
    });

    await admin.save();
    console.log('✅ Admin inserted successfully!');
    mongoose.connection.close();
}

insertAdmin().catch(err => console.error(err));
