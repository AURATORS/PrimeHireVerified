const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
// IMPORT ROUTES
// IMPORT ROUTES
const authRoutes = require('./routes/authRoutes');

// USE ROUTES
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 AURATORS Server is running on port ${PORT}`));
