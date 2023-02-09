const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        text: { type: String, required: true },
        tags: { type: String },
        createdAt: { type: Date, default: Date.now },
    }, 
)

module.exports = { postSchema }