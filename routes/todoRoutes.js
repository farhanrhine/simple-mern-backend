 // API endpoints (/api/todos)

 const express = require('express');
const {
  createTodo,
  getTodos,
  deleteTodo,
  toggleComplete,
} = require('../controllers/todoController');

const router = express.Router();

// 📥 Create a new todo
router.post('/', createTodo);

// 📤 Get all todos
router.get('/', getTodos);

// ❌ Delete todo by ID
router.delete('/:id', deleteTodo);

// ✅ Toggle complete/incomplete
router.put('/:id', toggleComplete);

module.exports = router;
