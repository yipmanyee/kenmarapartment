const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kenmarSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    timestamps: true
});

const Kenmar = mongoose.model('Kenmar', kenmarSchema);

module.exports = Kenmar;