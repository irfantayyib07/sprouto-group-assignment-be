const Task = require("../model/Task");

const getAllTasks = async (req, res) => {
 try {
  const tasks = await Task.find();
  if (!tasks.length) {
   return res.status(404).json({ message: "No tasks found" });
  }
  res.json(tasks);
 } catch (error) {
  res.status(500).json({ message: "Server error", error });
 }
};

const getTaskById = async (req, res) => {
 try {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) {
   return res.status(404).json({ message: "Task not found" });
  }
  res.json(task);
 } catch (error) {
  res.status(500).json({ message: "Server error", error });
 }
};

const createTask = async (req, res) => {
 try {
  const { title, description } = req.body;

  if (!title) {
   return res.status(400).json({ message: "Title is required" });
  }

  const newTask = await Task.create({ title, description });

  res.status(201).json({ message: `New task '${title}' created`, task: newTask });
 } catch (error) {
  res.status(500).json({ message: "Server error", error });
 }
};

const updateTask = async (req, res) => {
 try {
  const { id } = req.params;
  const { title, description, status } = req.body;

  const updatedTask = await Task.findByIdAndUpdate(
   id,
   { title, description, status },
   { new: true, runValidators: true },
  );

  if (!updatedTask) {
   return res.status(404).json({ message: "Task not found" });
  }

  res.json({ message: "Task updated successfully", task: updatedTask });
 } catch (error) {
  res.status(500).json({ message: "Server error", error });
 }
};

const deleteTask = async (req, res) => {
 try {
  const { id } = req.params;
  const deletedTask = await Task.findByIdAndDelete(id);

  if (!deletedTask) {
   return res.status(404).json({ message: "Task not found" });
  }

  res.json({ message: "Task deleted successfully" });
 } catch (error) {
  res.status(500).json({ message: "Server error", error });
 }
};

module.exports = {
 getAllTasks,
 getTaskById,
 createTask,
 updateTask,
 deleteTask,
};
