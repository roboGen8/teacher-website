var express = require("express");
var chalk = require("chalk");
var path = require("path");

var app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "/public/")));
app.use(
  "/css",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "/node_modules/jquery/dist"))
);
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { list: ["a", "b"], title: "Teacher Website" });
});

app.listen(port, () => {
  console.log(`listening on port ${chalk.green(port)}`);
});
