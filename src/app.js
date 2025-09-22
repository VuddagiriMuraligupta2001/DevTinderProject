const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Hello use test");
});

app.get("/test", (req, res) => {
  res.send("Hello get test");
});

app.post("/test", (req, res) => {
  res.send("Hello post test");
});

app.use("/test", (req, res) => {
  res.send("Hello use test");
});

app.listen(3000, () => {
  console.log("Server is running");
});
