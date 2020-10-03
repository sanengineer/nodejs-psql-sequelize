const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const app = express();
const PORT = process.env.PORT || 8080;

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

//parse request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync();

// Code Force Drop Table Content And Resync
// .sync({
//   force: true,
// })
// .then(() => {
//   console.log(`\x1b[91mDrop And Resync DB\x1b[91m`);
//   console.log("");
// });

//create simple route
app.get("/", (req, res) => {
  res.json({
    message: "welcome to rest api",
  });
});

// app.require("./app/routes/tutorial.route");
require("./app/routes/tutorial.routes")(app);

// create port

app.listen(PORT, () => {
  console.log(
    `🚀\x1b[93mServer is running on port\x1b[39m\x1b[91m http://localhost:${PORT}\x1b[39m 🐘\x1b[93mwith PostgreSQL.\x1b[39m`
  );
  console.log("👇\x1b[93mdebugging message: \x1b[39m");
  console.log("");
});
