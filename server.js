const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req,res) => {
    res.send('Welcome to airbnb api!');
});
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/properties', require('./routes/propertyRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));

// const PORT = process.env.PORT || 7000;
app.listen(3000, () => console.log(`Server running on port 3000`));
