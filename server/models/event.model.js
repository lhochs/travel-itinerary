const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({
    // date: {type: Date},
    // time: {type: Number},
    eventName: {
        type : String,
        required: [true, "name of the event or activity must be entered!"],
        minLength: [3, "event name must be at least 3 characters long"]
    },
    description: {
        type: String,
        required: [true, "a description must be entered!"],
        minLength: [3, "event description must be at least 3 characters long"]
    },
    website: {
        type: String,
        required: [true, "something must be entered"],
        minLength: [2, "if not applicable, enter 'N/A'"]
    },
    phone: {
        type: String,
        required: [true, "something must be entered"],
        minLength: [2, "If not applicable, enter 'N/A'"]
    },
    address: {
        type: String,
        required: [true, "something must be entered"],
        minLength: [2, "If not applicable, enter 'N/A'"]
    }
}, 
{ timestamps: true }
);

module.exports = mongoose.model('Event', EventSchema);