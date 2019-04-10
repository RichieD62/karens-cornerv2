var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BlogSchema = new Schema({

    name: {
        type: String
    },

    address: {
        type: String
    },

    city: {
        type: String
    },

    state: {
        type: String
    },

    zip: {
        type: Number
    },

    restaurantPicture: {
        type: String
    },

    meal: {
        type: String
    },

    mealRating: {
        type: Number
    },

 
    mealDescription: {
        type: String
    },

    server: {
        type: String
    },

    serviceRating: {
        type: Number
    },

    serviceDescription: {
        type: String
    },

    restuarantStyle: {
        type: String
    },

    ambianceRating: {
        type: Number
    },

    ambianceDescription: {
        type: String
    },

    totalNumber: {
        type: Number
    }

})

var Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;