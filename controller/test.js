
const Test = require('../models/test.js');

const createTest = async (req, res) => {

    console.log(req.body.title);
    const newTest = Test({
        title: req.body.title
    });

    try {
        var value = await newTest.save();
        res.status(200).json({
            code: 200,
            data: value,
        })

    } catch (error) {
        res.status(400).json({
            code: 400,
            message: error.message
        })
    }
}

module.exports = {
    createTest
}