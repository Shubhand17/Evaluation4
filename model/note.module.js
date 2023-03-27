const mongoose = require("mongoose")

//note Schema
const noteSchema = mongoose.Schema({
    title: String,
    body: String,
    device: String,
    no_of_comments: Number
},
{
    versionKey : false
}
)

const NoteModel = mongoose.model("note" , noteSchema)

module.exports ={
    NoteModel
}