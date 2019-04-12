let express = require("express");
let app = express();
let PORT = 3000;

let options = {
  root: "../public",
  dotfiles: "deny",
  headers: {
    "x-timestamp": Date.now(),
    "x-sent": true
  }
};

app.get("/", (req, res) => {
  res.sendFile("home.html", options, err => {
    if (err) {
      next(err);
    } else {
    }
  });
});

app.get("/survey", (req, res) => {
  res.sendFile("survey.html", options, err => {
    if (err) {
      next(err);
    } else {
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
