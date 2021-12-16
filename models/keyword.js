const mongoose = require('mongoose');

const keywordSchema = mongoose.Schema(
    {
        keyword: [
            {
                title: String,
                content: String,
            }
        ]
    },
    { versionKey: false },
)

const KeyWord = mongoose.model('KeyWord', keywordSchema);

module.exports = KeyWord;