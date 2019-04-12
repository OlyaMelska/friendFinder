let express = require("express");
let data = require("../data/friends");
let app = express();
let PORT = 3000;
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

let friends = [
  {
    name: "Ahmed",
    photo:
      "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  }
];

app.get("/api/friends", (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
