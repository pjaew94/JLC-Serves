const { Schema, model } = require('mongoose');

const DonationSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    donator: {
        type: String,
        required: true
    },
    message: {
        type: String
    },
    location: {
        type: String
    },
    comment: [
        {
            message: {
                type: String,
                required: true
            },
            user: {
                type: String,
                ref: 'users'
            },
            status: {
                type: String,
                ref: 'users'
            }
        }
    ]
});

module.exports = Donation = model('donation', DonationSchema);