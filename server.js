let express = require("express");
let app = express();
let apiRoutes = require("./app/routing/apiRoutes");
let htmlRoutes = require("./app/routing/htmlRoutes");
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

let PORT = process.env.PORT || 3030;

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
