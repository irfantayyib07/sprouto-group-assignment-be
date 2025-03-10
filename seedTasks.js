require("dotenv").config();
const mongoose = require("mongoose");
const Task = require("./model/Task");
const { DUMMY_TASKS } = require("./dummyTasks");

const connectDb = async () => {
 try {
  await mongoose.connect(process.env.DATABASE_URI, {});
  console.log("Connected to MongoDB");

  await Task.deleteMany();
  const insertedTasks = await Task.insertMany(DUMMY_TASKS);

  console.log(`Inserted ${insertedTasks.length} tasks successfully!`);
  mongoose.connection.close();
 } catch (err) {
  console.error("Error connecting to MongoDB:", err);
  mongoose.connection.close();
 }
};

connectDb();
