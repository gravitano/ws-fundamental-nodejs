const express = require("express");
const router = express.Router();
const users = require("../data/users.json");

router.get("/", (req, res) => {
  res.json({
    status: true,
    message: "OK",
    data: users
  });
});

router.get("/:id", (req, res) => {
  const id = +req.params.id;
  // es6
  // const {id} = req.params
  const user = users.find(user => user.id === id);
  if (user) {
    return res.json({
      status: true,
      message: "User found",
      data: user
    });
  }
  res.statusCode = 404;
  res.json({
    status: true,
    message: "User not found"
  });
});

module.exports = router;
