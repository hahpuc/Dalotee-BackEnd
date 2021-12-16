const Card = require('../models/card.js');
const StatusCode = require('../common/StatusCode.js');
const cloudinary = require('../utils/cloudinary.js');


const createCard = async (req, res) => {
    try {

        let pictureFiles = req.files;
        if (!pictureFiles)
            return res.status(StatusCode.PayloadIsInvalid).json({
                code: StatusCode.PayloadIsInvalid,
                error: "No picture attached!"
            });

        var images = [];
        for (const picture of pictureFiles) {
            const uploadResponse = await cloudinary.uploader.upload(picture.path, { folder: "TarotCard/" + req.body.name })

            images.push({
                imageUrl: uploadResponse.url,
                cloudinary_id: uploadResponse.public_id
            })
        }


        const newCard = new Card({
            name: req.body.name,
            images: images,
            category: req.body.category,
            keyword: req.body.keyword,
            content: req.body.content,
            prophecy: req.body.prophecy,
            advice: req.body.advice,
            number: req.body.number,
        });

        await newCard.save()
        res.status(StatusCode.SuccessStatus).json({
            code: StatusCode.SuccessStatus,
            message: "Create new card successfully",
            data: newCard,
        })
    } catch (error) {
        res.status(StatusCode.PayloadIsInvalid).json({
            code: StatusCode.PayloadIsInvalid,
            error: error.message
        });
    }
}

const getCardByID = async (req, res) => {
    try {
        const card = await Card.findById(req.params.id).populate('category').populate('keyword');
        res.status(StatusCode.SuccessStatus).json({
            code: StatusCode.SuccessStatus,
            data: card,
        })
    } catch (error) {
        res.status(StatusCode.ResourceNotFound).json({
            code: StatusCode.ResourceNotFound,
            error: error.message
        })
    }
}

const getAllCard = async (req, res) => {
    try {
        const cards = await Card.find().populate('category').populate('keyword');
        res.status(StatusCode.SuccessStatus).json({
            code: StatusCode.SuccessStatus,
            data: cards,
        })
    } catch (error) {
        res.status(StatusCode.ResourceNotFound).json({
            code: StatusCode.ResourceNotFound,
            error: error.message
        })
    }
}

module.exports = {
    createCard,
    getCardByID,
    getAllCard,
}
