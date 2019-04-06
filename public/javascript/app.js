$(document).ready(function () {

    $("#submitButton").click(function(event) {
        event.preventDefault();
        event.stopImmediatePropagation()
        console.log("Button Clicked")

        var name = $("#restaurantName").val().trim()
        var address = $("#address").val().trim()
        var city = $("#city").val().trim()
        var state = $("#state").val().trim()
        var zip = $("#zip").val().trim()
        var meal = $("#meal").val().trim()
        var mealRating = $("#mealRating").val()
        var mealDescription = $("#mealDescription").val()
        var server = $("#server").val()
        var serviceRating = $("#serviceRating").val()
        var serviceDescription = $("#serviceDescription").val()
        var restaurantStyle = $("#restaurant").val()
        var ambianceRating = $("#ambianceRating").val()
        var ambianceDescription = $("#ambianceDescription").val()

        var newBlogObject = {
            name: name,
            address: address,
            city: city,
            state: state,
            zip: zip,
            meal: meal,
            mealRating: mealRating,
            mealDescription: mealDescription,
            server: server,
            serviceRating: serviceRating,
            serviceDescription: serviceDescription,
            restaurantStyle: restaurantStyle,
            ambianceRating: ambianceRating,
            ambianceDescription: ambianceDescription
        }


        $.ajax({
            type: 'POST',
            url: '/api/newBlog',
            data: newBlogObject,
            success: function(res) {
                console.log(res)
            },
            error: function(error) {
                console.log("ERROR! You did a bad job")
                console.log(error)
            }
        })

    })

})