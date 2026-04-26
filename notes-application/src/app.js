const express = require('express')
const notemodel = require('./model/note.model')

const app = express()

app.use(express.json())

app.post('/notes', async (req, res) => {

    const data = req.body;
    await notemodel.create({
        title: data.title,
        description: data.description
    })

    res.status(200).json({
        message: "note created successfully"
    })

})

app.get('/notes', async (req, res) => {
    // const notes = await notemodel.findOne({title:"hello2"})
    const notes = await notemodel.find()   //it is used to always return an array of objects even if there is only one object in the database


    res.status(200).json({
        message: "notes fetched successfully",
        notes: notes
    })

})

app.delete('/notes/:id', async (req, res) => {
    const id = req.params.id;
    await notemodel.findByIdAndDelete({ _id: id })

    res.status(200).json({
        message: "note deleted successfully"
    })
})

app.patch('/notes/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body.description;
    await notemodel.findByIdAndUpdate({ _id: id }, { description: data })

    res.status(200).json({
        message: "note updated successfully"
    })

})


module.exports = app;