const express = require("express");
const app = express();
const PORT = 5000;
const mongoDB = require("./db/dbConnect");
const userMoodel = require("./db/user");
mongoDB();

app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await userMoodel.create({
      username: username,
      password: password,
    });
    console.log(result);
    res.status(201).json({
      message: "Registered Successfully",
    });
  } catch (error) {
    res.status(404).json({
      message: "Not Registered",
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userMoodel.findOne({
      username,
    });

    if (!user) {
      return res.status(404).json({
        message: "Not matched",
      });
    }
    if (user.password !== password) {
      res.status(404).json({
        message: "Password Not matched",
      });
    }
    res.status(200).json({
      message: "login Suceessfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Unsuccessful",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
