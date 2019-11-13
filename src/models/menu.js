var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MenuSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
});
var menuModel = mongoose.model("menu", MenuSchema);
module.exports = menuModel;
