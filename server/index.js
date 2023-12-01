const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://krishikesh369:yzCiQmQtfE6ncU8x@cluster0.zrgjhaj.mongodb.net/?retryWrites=true&w=majority');



// Check MongoDB connection
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Use task routes
app.use('/api', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
