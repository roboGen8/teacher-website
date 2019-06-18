const express = require("express");
const contentRouter = express.Router();

//temporary databse
const contents = [
  {
    title: "python",
    author: "Gen",
    read: false
  },
  {
    title: "java",
    author: "Weihang",
    read: false
  },
  {
    title: "Angular",
    author: "Nestor",
    read: false
  },
  {
    title: "SQL",
    author: "Xueming",
    read: false
  }
];

contentRouter.route("/").get((req, res) => {
  res.render("contentListView", {
    nav: [
      { link: "contents", title: "contents" },
      { link: "/authors", title: "Authors" }
    ],
    title: "contents",
    contents
  });
});

contentRouter.route("/:id").get((req, res) => {
  const { id } = req.params;
  res.render("contentView", {
    nav: [
      { link: "/contents", title: "Contents" },
      { link: "/authors", title: "Authors" }
    ],
    title: "contents",
    content: contents[id]
  });
});

module.exports = contentRouter;
