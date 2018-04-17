// Coinbase BTC URL: https://api.coinbase.com/v2/prices/BTC-USD/buy

// Create instance of XMLHTTPRequest
// var httpRequest = new XMLHttpRequest();

// // Set a custom function to handle the response
// httpRequest.onreadystatechange = responseMethod;

// httpRequest.open('GET', 'https://api.coinbase.com/v2/prices/BTC-USD/buy');

// httpRequest.send();

// function responseMethod() {

//   // Check if our state is "DONE"
//   if (httpRequest.readyState === XMLHttpRequest.DONE) {

//     // If our request was successful we get a return code/status of 200
//     if (httpRequest.status === 200) {

//       // Handle a successful request
//       console.log(httpRequest);
//       var response = JSON.parse(httpRequest.response)
//       console.log(response)
//       console.log(response.data.amount)
      
//       // update DOM here!
      
//// option1: vanilla js
//       document.querySelector('#btc-value').innerHTML = response.data.amount
//// option 2: jquery library
//       $('#btc-value').append(response.data.amount)

//     } else {

//       // Error handling for when a request fails
//       console.log('There was a problem with the request.');

//     }
//   }
// }


//// option 3: AJAX! :) object, method, fuction -> type, url, success
$.ajax({
  type: 'GET',
  url: 'https://api.coinbase.com/v2/prices/BTC-USD/buy',
  success: function(response) {
    console.log(response)
    $('#btc-value').append(response.data.amount)
  }
})


