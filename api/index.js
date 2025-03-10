require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3500;

const connectDb = async () => {
 try {
  await mongoose.connect(process.env.DATABASE_URI);
 } catch (err) {
  console.log(err);
 }
};

connectDb();

app.use(cors());
app.use(express.urlencoded({ extended: false })); // for form data
app.use(express.json());

app.use("/", require("../routes/task"));

mongoose.connection.once("open", () => {
 console.log("connected to mongodb!");
 app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
