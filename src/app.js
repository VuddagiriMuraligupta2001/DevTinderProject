const express = require("express");

const app = express();

//params
app.get("/test/:userid", (req, res) => {
  console.log(req.params.userid);
  res.send("Hello post test");
});

//query params
app.post("/test", (req, res) => {
  console.log(req.query);
  res.send("Hello post test");
});

app.listen(3000, () => {
  console.log("Server is running");
});
