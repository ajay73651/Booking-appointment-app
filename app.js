const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const sequelize = require("./util/database");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactUs = require("./routes/contact-us");
const success = require("./routes/success");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// Configure EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use("/admin", contactUs);
app.use("/admin", success);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

sequelize
  .sync()
  .then(() => {
    app.listen(4000);
  })
  .catch((err) => {
    console.error(err);
  });
