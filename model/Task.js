const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
 {
  title: { type: String, required: true },
  description: { type: String },
  status: {
   type: String,
   enum: ["pending", "completed"],
   default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
 },
 { timestamps: true },
);

module.exports = mongoose.model("Task", taskSchema);
