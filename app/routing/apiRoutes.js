module.exports = PORT => {
  let express = require("express");
  let data = require("../data/friends");
  let app = express();
  // let PORT = 3000;

  app.use(express.json()); // for parsing application/json
  app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  app.use(express.static(__dirname + "/public"));

  app.get("/api/friends", (req, res) => {
    console.log("inside api/friends");
    res.json(data);
  });

  app.post("/api/friends", (req, res) => {
    console.log(req.body);
    data.friends.push(req.body);
    data.friends.forEach(user => {
      console.log(`${user.name} ${user.scores} `);
    });
    return res.json(req.body);
  });

  // app.listen(PORT, () => {
  //   console.log(`Listening on port http://localhost:${PORT}`);
  // });
};
