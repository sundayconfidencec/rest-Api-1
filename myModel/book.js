const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
    Title: {
        type: String,
        require: true
    },
    Author: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        require: true
    }
})

const bookModel = mongoose.model("BOOK", bookSchema)
module.exports = bookModel;