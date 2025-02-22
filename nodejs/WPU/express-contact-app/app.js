const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { loadContact, findContact } = require("./views/utils/contact");
const app = express();
const port = 3000;

// Gunakan EJS
app.set("view engine", "ejs");

// Third-Party Middleware
app.use(expressLayouts);

//Built in middleware
app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.render("index", { layout: "layouts/main-layout", nama: "Muhamad Aqil Maulana", title: "Halaman Home" });
});

app.get("/about", (_req, res) => {
  res.render("about", { layout: "layouts/main-layout", title: "Halaman About" });
});

app.get("/contact", (_req, res) => {
  const contacts = loadContact();
  res.render("contact", { layout: "layouts/main-layout", title: "Halaman Contact", contacts });
});

app.get("/contact/nama/:nama", (req, res) => {
  const contact = findContact(req.params.nama);
  res.render("detail", { layout: "layouts/main-layout", title: "Halaman Detail", contact });
});

app.use("/", (_req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
