var path = require("path");
var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/home.html"))
})

router.get("/newBlog", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/blog.html"))
})

router.get("/viewBlogs", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/reviewBlogs.html"))
})

router.get("/restaurants", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/restaurants.html"))
})

module.exports = router