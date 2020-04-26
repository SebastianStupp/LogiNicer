const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  clientname: String,
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
