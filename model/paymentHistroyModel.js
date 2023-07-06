const mongoose = require('mongoose')

const paymentHistroySchema = mongoose.Schema(
    {
        paidDate: {
            type: String,
            required: true
        },
        modifiedPaymmentDate: {
            type: String,
            required: true
        },
        orderId: {
            type: Number,
            required: true,
            integer: true
        },
        amount: {
            type: Number,
            required: true,
            integer: true
        }
    },
    {
        timestamps: true
    }
)

const PaymentHistroy = mongoose.model('PaymentHistroy', paymentHistroySchema);

module.exports = PaymentHistroy;
