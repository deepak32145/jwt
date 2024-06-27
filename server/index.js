const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");

app.listen(4000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server started successfully");
  }
});

mongoose
  .connect("mongodb://127.0.0.1:27017/jwt_demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Db connected successfull");
  })
  .catch((err) => {
    console.log("error in connecting DB", err);
  });

app.use(
  cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/", authRoutes);
