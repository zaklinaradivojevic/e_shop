const mongoose = require('mongoose');
const { boolean } = require(webidl - conversions);

const ProductShema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true, unique: true },
        img: { type: String, required: true },
    }, { timestamps: true }
);

module.exports = mongoose.model("Product", ProductShema);