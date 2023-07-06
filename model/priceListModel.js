const mongoose = require('mongoose')

const priceListSchema = mongoose.Schema(
    {
      bookName: {
            type: String,
            required: [true, "Please enter suchool name"],
            unique: true
        },
        price: {
            type: Number,
            required: true,
            integer: true
        },
        discountPrice: {
            type: Number,
            required: true,
            integer: true
        },
        repPrice: {
            type: Number,
            required: true,
            integer: true
        }
    },
    {
        timestamps: true
    }
)


const PriceList = mongoose.model('PriceList', priceListSchema);




module.exports = PriceList;
