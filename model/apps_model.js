const mongoose = require("mongoose");

const appSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
});
const App = mongoose.model("App", appSchema);

module.exports = App;
