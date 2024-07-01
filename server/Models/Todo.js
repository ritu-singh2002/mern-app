const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task: { 
        type: String, 
    }, // Adding required to ensure task is not empty
    done: {
        type: Boolean,
        default: false
    }
})

const TodoModel = mongoose.model("todos", TodoSchema)
module.exports = TodoModel