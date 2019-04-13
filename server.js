let express = require("express");
let app = express();
let apiRoutes = require("./app/routing/apiRoutes");
let htmlRoutes = require("./app/routing/htmlRoutes");

let PORT = 3030;

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
