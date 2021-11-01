const mongoose = require('mongoose');

const testSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    }
})

const Test = mongoose.model('Test', testSchema);

module.exports = Test;