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

module.exports = router