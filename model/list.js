const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    ingredients:{type:Array,required:false}
  },
);

module.exports = mongoose.model("List",userSchema,"lists")