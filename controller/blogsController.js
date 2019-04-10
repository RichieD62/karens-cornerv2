var db = require("../model/blogs.js")
var express = require("express")
var router = express.Router()

router.post('/api/newBlog', (req, res) => {
    var newBlog = req.body

    db.create(newBlog)
        .then(function (dbBlog) {
            res.json(dbBlog)
        })
        .catch(function (error) {
            res.json(error)
        })
})

router.get('/api/blogs', (req, res) => {
    db.find({})
        .then((dbResults) => {
            res.send(dbResults)
        })
        .catch((error) => {
            res.json(error)
        })
})

module.exports = router