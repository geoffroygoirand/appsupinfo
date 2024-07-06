const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaveSchema = new Schema({
  start_at: { type: Date, required: true },
  end_at: { type: Date, required: true },
  type: { type: String, enum: ['CP', 'CF', 'A'], required: true },
  employeeId: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const Leave = mongoose.model('Leave', leaveSchema);
module.exports = Leave;
