const express = require("express");
const contentRouter = express.Router();

function router(nav) {
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
      nav,
      title: "contents",
      contents
    });
  });

  contentRouter.route("/:id").get((req, res) => {
    const { id } = req.params;
    res.render("contentView", {
      nav,
      title: "contents",
      content: contents[id]
    });
  });
  return contentRouter;
}

module.exports = router;
