// Mongoose schema for tasks

const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Todo text is required'],
    trim: true
  },
  isCompleted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true // auto add createdAt & updatedAt
});

module.exports = mongoose.model('Todo', todoSchema);
