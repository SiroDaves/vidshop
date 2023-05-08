const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    parent: { type: Number, required: false },
    title: { type: String, required: true, unique: true },
    description: { type: String, required: false },
    icon: { type: String, required: false },
    created_at: { type: Date, default: Date.now }
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;