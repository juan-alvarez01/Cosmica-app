const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    image: String,
    name: String,
    game_producer: String,
    gender: String,
    description: String,
    release: String,
    age: Number,
    platform: String
});

const ProductsModel = mongoose.model('Products', productsSchema);
module.exports = ProductsModel;