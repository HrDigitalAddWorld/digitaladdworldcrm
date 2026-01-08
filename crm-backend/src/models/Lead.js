const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide lead name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: [true, 'Please provide phone number']
  },
  company: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'qualified', 'proposal', 'won', 'lost'],
    default: 'new'
  },
  value: {
    type: Number,
    default: 0
  },
  source: {
    type: String,
    enum: ['Website', 'Referral', 'LinkedIn', 'Cold Call', 'Email Campaign', 'Trade Show', 'Other'],
    default: 'Other'
  },
  notes: {
    type: String,
    trim: true
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  convertedToCustomer: {
    type: Boolean,
    default: false
  },
  convertedDate: {
    type: Date
  },
  expectedCloseDate: {
    type: Date
  }
}, {
  timestamps: true
});

leadSchema.index({ name: 'text', email: 'text', company: 'text' });
leadSchema.index({ status: 1 });

module.exports = mongoose.model('Lead', leadSchema);