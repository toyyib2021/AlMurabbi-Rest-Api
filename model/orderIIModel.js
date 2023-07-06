const mongoose = require('mongoose')

const orderIISchema = mongoose.Schema(
    {
        schoolName: {
            type: String,
            required: [true, "Please enter suchool name"]
        },
        schoolPhone: {
            type: String,
            required: true
        },
        orderId: {
            type: Number,
            required: true,
            integer: true
        },
        balance: {
            type: Number,
            required: true,
            integer: true
        },
        paid: {
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


const OrderII = mongoose.model('OrderII', orderIISchema);




module.exports = OrderII;
