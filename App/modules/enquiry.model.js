let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let enquirySchema = new Schema({
    sName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    sPhone: {
        type: String,
        required: true
    },
    sMessage: {
        type: String,
        required: true
    }
});

let enquiryModel = mongoose.model('Enquiry', enquirySchema);

module.exports = enquiryModel;
