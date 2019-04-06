const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const path = require("path")
let apiRoutes = require("./controller/blogsController")


app.use("/public", express.static(__dirname + "/public/"));

//HTML Routes
//home
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/views/home.html"));
})
//New Blog
app.get("/newBlog", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/views/blog.html"))
})
//View Blogs
app.get("/viewBlogs", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/views/reviewBlogs.html"))
})
//New Restaurants
app.get("/restaurants", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/views/restaurants.html"))
})



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(apiRoutes)

let PORT = process.env.PORT || 3000;

const mongoose = require('mongoose')
const dbName = "karensCornerDB"
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/" + dbName;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT)
})