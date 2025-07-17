// Logic: create, read, delete, update
const Todo = require('../models/todoModel');

// 📥 Create a new todo
const createTodo = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    const newTodo = await Todo.create({ text });
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create todo' });
  }
};

// 📤 Get all todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
};

// 🗑 Delete a todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Todo.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json({ message: 'Todo deleted ✅' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete todo' });
  }
};

// ✅ Toggle complete/incomplete
const toggleComplete = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    todo.isCompleted = !todo.isCompleted;
    await todo.save();

    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update todo' });
  }
};

module.exports = {
  createTodo,
  getTodos,
  deleteTodo,
  toggleComplete,
};
