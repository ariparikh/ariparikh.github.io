
$(document).on('click', 'input', function () {
    $("#login").show();
  })

// token javascript sdk key 5a584131ea917ba9b748c21c40a7ca0c1250dfab

_500px.init({
    sdk_key: '5a584131ea917ba9b748c21c40a7ca0c1250dfab'
  });

$('#login').click(function() {
	_500px.login();
});

 // When a successful login to 500px is made, they fire off the 'authorization_obtained' event
 _500px.on('authorization_obtained', function() {
    // Successful OAuth login!
 
    // hide .sign-in-view
    $('.sign-in-view').hide ()
        // show .image-results-view
 	$('.image-results-view').show()


 	// check if navigator geolocation is available from the browser
  	// if (navigator.geolocation) {
    // if it is use the getCurrentPosition method to retrieve the Window's location
    	// navigator.geolocation.getCurrentPosition(function(position) {
     //  		var lat = position.coords.latitude;
     //  		var long = position.coords.longitude;

     //  		console.log('lat: ', lat);
     //  		console.log('long: ', long);

		   //  // Feel free to adjust the search radius as you see fit
		  	// var radius = '25mi';

		  	var searchOptions = {
			    term: 'Smokey Eye', // We only want makeup photos
			    only: "Fashion",
			    sort: "highest_rating",
			    image_size: 3 // This isn't neccessary but by default the images are thumbnail sized
			  };

		 	 _500px.api('/photos/search', searchOptions, function(response) {
		    	if (response.data.photos.length === 0) {
		      	alert('No photos found!');
		   	 } else {
		      // Handle the successful response here
		      console.log(response);
			
		    /// iterate over photos
		      response.data.photos.forEach(function (photo){
				console.log(photo)
				 var img = '<img src = '+photo.image_url[0]+' >'
				 $('.images').append(img)

				})
		    }
		  });
  
  });
