const express = require("express");
const app = express();
require("./db/connection");
const theamRoute = require("./routes/theamRoute");
const cors = require("cors");
const port = 4000;

app.use(express.json);
app.use(cors());
app.use(theamRoute);

app.use("/uploads", express.static("./uploads"));

app.listen(port, () => {
  console.log("Server is Running on Port 4000");
});
