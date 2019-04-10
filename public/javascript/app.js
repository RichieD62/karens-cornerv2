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
        var restaurantPicture = $("#restaurantPicture").val().trim()
        var meal = $("#meal").val().trim()
        var mealRating = $("#mealRating").val()
        var mealDescription = $("#mealDescription").val()
        var server = $("#server").val()
        var serviceRating = $("#serviceRating").val()
        var serviceDescription = $("#serviceDescription").val()
        var restaurantStyle = $("#restaurant").val()
        var ambianceRating = $("#ambianceRating").val()
        var ambianceDescription = $("#ambianceDescription").val()
        var totalNumber = parseInt(mealRating) + parseInt(serviceRating) + parseInt(ambianceRating);
        
        console.log(totalNumber)

        var newBlogObject = {
            name: name,
            address: address,
            city: city,
            state: state,
            zip: zip,
            restaurantPicture: restaurantPicture,
            meal: meal,
            mealRating: mealRating,
            mealDescription: mealDescription,
            server: server,
            serviceRating: serviceRating,
            serviceDescription: serviceDescription,
            restaurantStyle: restaurantStyle,
            ambianceRating: ambianceRating,
            ambianceDescription: ambianceDescription,
            totalNumber: totalNumber
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

    $.ajax({
        type: 'GET',
        url: '/api/blogs',
        success: function(data) {
            for (var i=0; i<data.length; i++) {
                console.log(data[i].totalNumber)
                $("#resultsArea").prepend(
                    `<div class="card" style="width: 25rem;">
                    <div class="card-body">
                        <div class=cardImages>
                        <img src="${data[i].restaurantPicture}" class="card-img-top" alt="${data[i].name}" style="width: 100px; height: 100px">
                    </div>
                        
                        <h5 class="card-title">${data[i].name}</h5>
                        <p class="card-text">${data[i].totalNumber}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>`
                )
            }
        },
        error: function(err){
            console.log(err)
        }
    })

})