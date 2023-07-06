const mongoose = require('mongoose')

const customerSchema = mongoose.Schema(
    {
      schoolName: {
            type: String,
            required: [true, "Please enter suchool name"],
            unique: true
        },
        schoolRepName: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        schoolPhoneNumber: {
            type: String,
            required: true,
        },
        repPhoneNumber: {
          type: String,
          required: false,
        },
        image: {
          type: String,
          required: false,
        }
    },
    {
        timestamps: true
    }
)


const Customer = mongoose.model('Customer', customerSchema);




module.exports = Customer;
