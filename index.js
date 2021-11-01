const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

const testRoutes = require('./routes/test.js');

const app = express();
dotenv.config();

app.use(express.json({ limit: '25mb', extended: true }));
app.use(express.urlencoded({
    extended: true
}));


app.use(cors());
app.use(morgan('short'));

app.use('', testRoutes);

app.get('/', (req, res) => {
    res.send("Hello to my Tarot API")
})

// MongoDB 
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log('Server running on PORT: ', PORT)))
    .catch((error) => console.log(error.message));


mongoose.set('useFindAndModify', false);