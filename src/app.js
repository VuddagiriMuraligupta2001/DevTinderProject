const express = require("express");

const connectDB = require("./config/database");

const app = express();
const User = require("./models/user");
const bcrypt = require("bcrypt");
const { validateSignUpData } = require("./utils/validations");
app.use(express.json());

app.post("/signUp", async (req, res) => {
  try {
    validateSignUpData(req);
    const { firstName, lastName, emailId, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });
    await user.save();
    res.send("data saved to db");
  } catch (err) {
    res.status(400).send("Error saving the user: " + err.message);
  }
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    console.log(userEmail);
    const user = await User.find({ emailId: userEmail });

    if (user.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  console.log(userId);
  console.log(req.body);
  try {
    const user = await User.findByIdAndDelete({ _id: userId });
    res.send("user deleted successfully");
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;
  const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];

  console.log(req.body);
  try {
    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );
    if (!isUpdateAllowed) {
      throw new Error("update not allowed");
    }
    if (data?.skills.length > 10) {
      throw new Error("skills should be less than 10");
    }
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
      runValidators: true,
    });
    res.send("user updated sucessfully");
  } catch (err) {
    res.status(400).send("Update failed: " + err.message);
  }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

connectDB()
  .then(() => {
    console.log("DB connected");
    app.listen(7000, () => {
      console.log("Server is running");
    });
  })
  .catch((err) => {
    console.error("DB not connected");
  });
