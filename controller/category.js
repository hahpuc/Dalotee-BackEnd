const Category = require('../models/category');
const StatusCode = require('../common/StatusCode.js');

const createCategory = async (req, res) => {
    const isExist = await Category.findOne({ name: req.body.name });
    if (isExist) {
        return res.status(StatusCode.ResourceNotFound).json({
            code: StatusCode.SuccessStatus,
            error: "Category is exist"
        })
    }

    const newCategory = Category({
        name: req.body.name
    });

    try {
        await newCategory.save()
        res.status(StatusCode.SuccessStatus).json({
            code: StatusCode.SuccessStatus,
            message: "Create new category successfully"
        })
    } catch (error) {
        res.status(StatusCode.PayloadIsInvalid).json({
            code: StatusCode.PayloadIsInvalid,
            error: error.message
        });
    }
}

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find()

        res.status(StatusCode.SuccessStatus).json({
            code: StatusCode.SuccessStatus,
            data: categories,
        })
    } catch (error) {
        res.status(StatusCode.ResourceNotFound).json({
            code: StatusCode.ResourceNotFound,
            error: error.message
        })
    }
}

module.exports = {
    createCategory,
    getCategories
}



