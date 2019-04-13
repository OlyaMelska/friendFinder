let express = require("express");
let router = express.Router();
let path = require("path");

let options = {
  root: "./app/public",
  dotfiles: "deny",
  headers: {
    "x-timestamp": Date.now(),
    "x-sent": true
  }
};

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("INSIDE HTML ROUTES");
  next();
});

router.get("/", (req, res) => {
  res.sendFile("home.html", options, err => {
    if (err) {
      next(err);
    } else {
    }
  });
});

router.get("/survey", (req, res) => {
  res.sendFile("survey.html", options, err => {
    if (err) {
      next(err);
    } else {
    }
  });
});

module.exports = router;
