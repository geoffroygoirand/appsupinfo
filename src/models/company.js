// models/Entreprise.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  sectors: [{ type: String, required: true }],
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;
