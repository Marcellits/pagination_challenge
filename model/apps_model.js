const mongoose = require("mongoose");

const appSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { versionKey: false }
);
const App = mongoose.model("App", appSchema);

module.exports = App;
