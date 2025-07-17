const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ Middleware
app.use(cors());               // Allow cross-origin requests
app.use(express.json());       // Parse JSON bodies


const todoRoutes = require('./routes/todoRoutes');
app.use('/api/todos', todoRoutes);

// ✅ Test Route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from backend 👋' });
});

// ✅ MongoDB + Server Setup
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,          // ✅ deprecated but doesn't break things
  useUnifiedTopology: true,       // ✅ deprecated too, but safe for now
})
.then(() => {
  console.log('MongoDB connected ✅');
  app.listen(PORT, () => console.log(`Server running on port ${PORT} 🔥`));
})
.catch(err => console.log(err));
