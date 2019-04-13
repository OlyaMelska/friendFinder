let express = require("express");
let app = express();
let apiRoutes = require("./app/routing/apiRoutes");
let htmlRoutes = require("./app/routing/htmlRoutes");

let PORT = 3030;

app.use("./app/routing/apiRoutes", apiRoutes);
app.use("./app/routing/htmlRoutes", htmlRoutes);
// apiRoutes(PORT);
// htmlRoutes(PORT);

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
