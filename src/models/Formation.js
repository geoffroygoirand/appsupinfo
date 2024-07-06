// models/Formation.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formationSchema = new Schema({
  title: { type: String, required: true },
  start_at: { type: Date, required: true },
  end_at: { type: Date, required: true },
  employeeId: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const Formation = mongoose.model('Formation', formationSchema);
module.exports = Formation;
