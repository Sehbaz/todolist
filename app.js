const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["buy food", "cook food", "eat food"];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("EN-US", options);
  res.render("list", {
    kindOfDay: day,
    newListItems: items
  });
});

app.post("/", (req, res) => {
  let newTodo = req.body.newItem;
  items.push(newTodo);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("server is running!");
});
