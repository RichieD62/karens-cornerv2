const express = require("express");
const app = express();
const exphbs = require("express-handlebars")
const bodyParser = require('body-parser')
var db = require("./model/blogs.js")


app.use("/public", express.static(__dirname + "/public/"));


let PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars")

//Handlebars Routes
//home
app.get("/", (req, res) => {
    res.render("home")
})
//New Blog
app.get("/newBlog", (req, res) => {
    res.render("blog")
})
//View Blogs
app.get("/viewBlogs", (req, res) => {
    res.render("reviewBlogs")
})
//New Restaurants
app.get("/restaurants", (req, res) => {
    res.render("restaurants")
})


//POST Route from New Blog Page to Database
app.post('/newBlog', (req, res) => {
    var newBlog = req.body

    db.create(newBlog)
        .then(function (dbBlog) {
            res.json(dbBlog)
        })
        .catch(function (error) {
            res.json(error)
        })
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const mongoose = require('mongoose')
const dbName = "karensCornerDB"
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/" + dbName;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT)
})