var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DetailSchema = new Schema({
  bname: String,
  btype:String,
  pno: String,
  email: String,
  baddress: String,
  fyear:String,
  booksdate:String,
});

module.exports = mongoose.model('Details',DetailSchema);
