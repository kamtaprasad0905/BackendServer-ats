const mongoose = require("mongoose");
// const autoIncrement = require("mongoose-auto-increment");
const employSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});
// autoIncrement.initialize(mongoose.connection);
// employSchema.plugin(autoIncrement.plugin, "employee");
// console.log(autoIncrement);
const employee = mongoose.model("employee", employSchema);

module.exports = employee;
