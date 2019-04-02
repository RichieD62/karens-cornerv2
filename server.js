const express = require("express");
const app = express();

app.use("/public", express.static(__dirname + "/public/"));

const bodyParser = require('body-parser')

let PORT = process.env.PORT || 3000;

let htmlRoute = require("./controller/htmlRoutes")
let blogController = require("./controller/blogsController")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(htmlRoute);
app.use(blogController);


const mongoose = require('mongoose')
const dbName = "karensCornerDB"
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/" + dbName;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT)
})