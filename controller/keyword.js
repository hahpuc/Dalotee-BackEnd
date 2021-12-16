const KeyWord = require('../models/keyword');
const StatusCode = require('../common/StatusCode.js');


const createKeyWord = async (req, res) => {

    try {
        var list = req.body.keyword;

        var keyword = [];
        for (var value in list) {
            keyword.push({
                title: list[value].title,
                content: list[value].content,
            });
        }

        const newKeyWord = new KeyWord({
            keyword: keyword
        });

        await newKeyWord.save()
        res.status(StatusCode.SuccessStatus).json({
            code: StatusCode.SuccessStatus,
            message: "Create new keyword successfully",
            data: newKeyWord,
        })
    } catch (error) {
        res.status(StatusCode.PayloadIsInvalid).json({
            code: StatusCode.PayloadIsInvalid,
            error: error.message
        });
    }
}

const getKeyWordById = async (req, res) => {
    try {
        const keyword = await KeyWord.findById(req.params.id)
        res.status(StatusCode.SuccessStatus).json({
            code: StatusCode.SuccessStatus,
            data: keyword,
        })
    } catch (error) {
        res.status(StatusCode.ResourceNotFound).json({
            code: StatusCode.ResourceNotFound,
            error: error.message
        });
    }
}

const getAllKeyWord = async (req, res) => {
    try {
        const keyword = await KeyWord.find()
        res.status(StatusCode.SuccessStatus).json({
            code: StatusCode.SuccessStatus,
            data: keyword,
        })
    } catch (error) {
        res.status(StatusCode.ResourceNotFound).json({
            code: StatusCode.ResourceNotFound,
            error: error.message
        });
    }
}

module.exports = {
    createKeyWord,
    getKeyWordById,
    getAllKeyWord
}
