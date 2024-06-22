// models/student.js

const mongoose = require('mongoose');

const ngoSchema = new mongoose.Schema({
    essay: { verified: String, remarks: String },
    panCard: { verified: String, remarks: String },
    aadharCard: { verified: String, remarks: String },
    markSheet: { verified: String, remarks: String },
    familyIncome: { verified: String, remarks: String },
    parentAccount: { verified: String, remarks: String },
    studentAccount: { verified: String, remarks: String },
    feeReceipt: { verified: String, remarks: String },
    feeStructure: { verified: String, remarks: String },
    casteCertificate: { verified: String, remarks: String },
    lastYearFee: { verified: String, remarks: String },
    capRound: { verified: String, remarks: String },
    studentLoan: { verified: String, remarks: String },
    studentId: { type: String, unique: true, required: true }
});

const NgoVerification = mongoose.model('ngoVerification', ngoSchema);


module.exports = NgoVerification;
