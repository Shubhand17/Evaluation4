const mongoose = require("mongoose")
const connection = mongoose.connect("mongodb+srv://shubham:shubham@cluster0.9w1kghu.mongodb.net/evaluation_4?retryWrites=true&w=majority")
module.exports = {
    connection
}