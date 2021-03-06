let express = require("express");
let app = express();
let data = require("../data/friends");
let router = express.Router();
let path = require("path");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

router.use(function timeLog(req, res, next) {
  console.log("INSIDE API ROUTES");
  next();
});

router.get("/friends", (req, res) => {
  console.log("inside api/friends");
  res.json(data);
});

router.post("/friends", (req, res) => {
  console.log(req.body);
  data.friends.push(req.body);
  data.friends.forEach(user => {
    console.log(`${user.name} ${user.scores} `);
  });
  return res.json(req.body);
});

module.exports = router;
