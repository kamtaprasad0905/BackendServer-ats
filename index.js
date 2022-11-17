const express = require("express");
const dotenv = require("dotenv");
const routes = require("./src/routes/routes");
const cors = require("cors");
const connection = require("./src/config/dbconnection");
const bodyParser = require("body-parser");
const app = express();
dotenv.config();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;
app.use("/", routes);
connection();

app.listen(PORT, () => {
  console.log("server is running", PORT);
});
