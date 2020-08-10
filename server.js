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

// if (process.env.NODE_ENV === "production") {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, "client/build")));
//   // Handle React routing, return all requests to React app
//   app.get("*", (request, response) => {
//     response.sendFile(path.join(__dirname, "client/build", "index.html"));
//   });
// }
if (process.env.NODE_ENV !== "production") require("dotenv").config();
require("./db/mongoose");

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Welcome to the backend. Please add some Params!");
});

app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
});
