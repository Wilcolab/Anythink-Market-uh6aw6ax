const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory list of tasks
let tasks = [
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box",
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure"
];

// GET request to root
app.get('/', (req, res) => {
  res.send('Hello World');
});

// POST request to add a task
app.post('/tasks', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ message: "Task text is required" });
  }
  tasks.push(text);
  res.json({ message: "Task added successfully" });
});

// GET request to return all tasks
app.get('/tasks', (req, res) => {
  res.json({ tasks });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
