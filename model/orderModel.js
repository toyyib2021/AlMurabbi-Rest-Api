const mongoose = require('mongoose')

const orderSchema = mongoose.Schema(
    {
        bookName: {
            type: String,
            required: [true, "Please enter suchool name"],
        },
        quantity: {
            type: Number,
            required: true,
            integer: true
        },
        unitPrice: {
            type: Number,
            required: true,
            integer: true
        },
        amount: {
            type: Number,
            required: true,
            integer: true
        },
        orderId: {
            type: Number,
            required: true,
            integer: true
        },
        returned: {
            type: Number,
            required: true,
            integer: true
        },
        orderDate: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)


const Order = mongoose.model('Order', orderSchema);




module.exports = Order;
