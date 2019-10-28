const express = require("express");
const app = express();
const port = 3000;
const router = express.Router();

// route-level middleware
// a middleware function with no mount path.
// This code is executed for every request to the router
router.use(function(req, res, next) {
  console.log("Time:", Date.now());
  next();
});

router.get("/me", function(req, res, next) {
  res.send("User page");
});

app.get("/", (req, res) => {
  res.send("Home!");
});

app.use("/user", router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
