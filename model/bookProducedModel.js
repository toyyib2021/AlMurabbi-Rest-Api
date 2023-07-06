const mongoose = require('mongoose')

const bookProducedSchema = mongoose.Schema(
    {
        bookName: {
            type: String,
            required: true
        },
        quantityAdd: {
            type: Number,
            required: true,
            integer: true
        },
        dateAdded: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const BookProduced = mongoose.model('BookProduced', bookProducedSchema);

module.exports = BookProduced;
