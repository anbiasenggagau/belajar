const mongoose = require('mongoose')

const Posts = mongoose.model('Post', {
    name: {
        type: String,
        required: true
    }
})

module.exports = Posts