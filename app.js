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

const nav = [
  { link: "contents", title: "contents" },
  { link: "/authors", title: "Authors" }
];

const contentRouter = require("./src/routes/contentRoutes")(nav);

app.use("/contents", contentRouter);

app.get("/", (req, res) => {
  res.render("index", {
    nav: [
      { link: "contents", title: "contents" },
      { link: "/authors", title: "Authors" }
    ],
    title: "Teacher Website"
  });
});

app.listen(port, () => {
  console.log(`listening on port ${chalk.green(port)}`);
});
