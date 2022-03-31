const express = require("express");

let Contacts = require("./contact");
let contacts = new Contacts();
const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);

let allMidelWere = [express.static("public")];

app.use(allMidelWere);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { datas: contacts.all });
});
app.get("/new", (req, res) => {
  res.render("add");
});
app.post("/new", (req, res) => {
  contacts.addContact(req.body.name, req.body.phone);
  res.redirect("/");
});
app.get("/find", (req, res) => {
  let { name: uname } = req.query;
  let cont = contacts.findContact(uname);
  res.render("index", { datas: cont });
});
app.get("/delete", (req, res) => {
  let { name: uname } = req.query;
  contacts.deleteContact(uname);
  res.redirect("/");
});

let PORT = process.env.PORT || 1000;
app.listen(PORT, (err) => {
  if (err) {
    console.log("--------Faild to Run---------");
    console.log(err);
  } else {
    console.log(`Running - http://localhost:${PORT}`);
  }
});
