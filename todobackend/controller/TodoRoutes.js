const express = require('express');
const Task = require('../model/TodoModel');
const router = express.Router();

//GET all tasks without pagination
router.get('/getall-todo', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({
            tasks,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET all tasks with pagination
router.get('/getall-todobypage', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // default to page 1
        const limit = parseInt(req.query.limit) || 5; // default to 5 tasks per page
        const skip = (page - 1) * limit;
        const tasks = await Task.find().skip(skip).limit(limit);
        const totalTasks = await Task.countDocuments();
        res.status(200).json({
            tasks,
            totalPages: Math.ceil(totalTasks / limit),
            currentPage: page,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET a single task by ID (MongoDB ID field generated for each task record)
router.get('/gettodo-byid/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new task
router.post('/create-todo', async (req, res) => {
    const { assignedTo, status, dueDate, priority, description } = req.body;
    const task = new Task({ assignedTo, status, dueDate, priority, description });
    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT (update) a task
router.put('/updatetodo-byid/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE a task
router.delete('/delete-todo/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
