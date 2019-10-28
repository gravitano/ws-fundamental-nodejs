const getRoute = (req, res) => {
  let route = "";
  switch (req.url) {
    case "/":
      route = "index";
      break;
    case "/contact":
      route = "contact";
      break;
    case "/about":
      route = "about";
      break;
    default:
      res.statusCode = 404;
      route = "404";
      break;
  }
  return route;
};

module.exports.getRoute = getRoute;
