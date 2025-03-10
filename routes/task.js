const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/taskController");

router.route("/tasks").get(tasksController.getAllTasks).post(tasksController.createTask);

router
 .route("/tasks/:id")
 .get(tasksController.getTaskById)
 .put(tasksController.updateTask)
 .delete(tasksController.deleteTask);

module.exports = router;
