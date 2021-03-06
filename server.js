const express = require("express");
const app = express();
const cors = require('cors');
const routes = require("./routes");
require("dotenv").config();

//Define Port
const port = process.env.PORT || 5000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api", routes);

//Start the api server
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
