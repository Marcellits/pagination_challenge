const express = require("express"),
  cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const App = require("./model/apps_model");

//middleware
app.use(cors());
app.use(express.json());

// calling the routes
const appRouter = require("./routes/apps_routes");
app.use(appRouter);

if (process.env.NODE_ENV !== "production") require("dotenv").config();
require("./db/mongoose");

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Welcome to the backend. Please add some Params!");
});

app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
});
