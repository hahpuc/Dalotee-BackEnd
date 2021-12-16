const mongoose = require('mongoose');

const { ObjectID } = mongoose.Schema.Types;


const cardSchema = mongoose.Schema(
    {
        name: String,
        number: Number,
        images: [
            {
                imageUrl: { type: String },
                cloudinary_id: String
            }
        ],

        category: { type: ObjectID, ref: "Category", },
        keyword: { type: ObjectID, ref: "KeyWord", },

        content: String,
        prophecy: String,
        advice: String,
    },
    { versionKey: false },
)

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;