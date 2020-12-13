let mongoose = require('mongoose')
let config = require('../config/dbConfig')

mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true });

let blogItem_scm = new mongoose.Schema({
    postId: String,
    count: Number
});

let blogItem_mod = mongoose.model('blogItem_mod',blogItem_scm);

module.exports = blogItem_mod