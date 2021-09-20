const mongoose = require('mongoose');

const ProductShema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true, unique: true },
        img: { type: String, required: true },
        categories: { type: Arrey },
        size: { type: String },
        color: { type: String },
        price: { type: Number, required: true },
    }, { timestamps: true }
);

module.exports = mongoose.model("Product", ProductShema);