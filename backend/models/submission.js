const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        index: true 
    },
    mobileNumber: { 
        type: String, 
        required: true 
    },
    pickupLocation: { 
        type: String, 
        required: true 
    },
    dropLocation: { 
        type: String, 
        required: true 
    },
    movingDate: { 
        type: Date, 
        required: true, 
        index: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now, 
        index: true 
    }
});

module.exports = mongoose.model('Submission', submissionSchema);
