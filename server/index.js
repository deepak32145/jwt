const express = require("express");
const app = express();

app.listen(4000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server started successfully");
  }
});
