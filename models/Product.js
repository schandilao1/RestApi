const moogoose = require('mongoose');

const productSchema = new moogoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "dell", "nokia", "asus", "lenova", "rolex"],
            message: `{values} is not supported`
        }
    },
    price: {
        type: Number,
        required: [true, "Price Must Be Provided"]
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
})

module.exports = moogoose.model('ourProduct', productSchema);