const express = require("express");
const app = express();
const port = 3000;

const indexRouter = require("./routes");
const usersRouter = require("./routes/users");

// Home route
app.get("/", (req, res) => {
  res.json({
    status: true,
    message: "Hello World"
  });
});

// Users API
app.use("/users", usersRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
