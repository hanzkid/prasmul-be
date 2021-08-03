const mongoose = require("mongoose")

const schema = mongoose.Schema({
    courses: { type: String, required: true },
    image_url: { type: String, required: true },
    price: { type: Number, required: true },
})

module.exports = mongoose.model("Course", schema)