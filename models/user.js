const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

//this will automatically implement hashing and salting in the password
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
