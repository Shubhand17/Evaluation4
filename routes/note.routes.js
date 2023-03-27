const express = require("express")
const { NoteModel } = require("../model/note.module")

const noteRouter = express.Router()

noteRouter.get("/", async (req, res) => {
    try {
        const notes = await NoteModel.find()
        res.status(200).send(notes)
    }
    catch (err) {
        res.send(400).send({ "msg": err.message })
    }
})

noteRouter.post("/add", async (req, res) => {
    try {
        const note = new NoteModel(req.body)
        await note.save()
        res.status(200).send({ "msg": "Notes has been added" })
    }
    catch (err) {
        res.status(400).send({ "msg": "err message" })
    }
})


module.exports = {
    noteRouter
}