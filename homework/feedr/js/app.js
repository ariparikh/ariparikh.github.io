// API's:
// New York Times
// https://developer.nytimes.com/

// Guardian:
// http://open-platform.theguardian.com/explore/

// NewsApi.org
// https://newsapi.org/

// Handlebars templating:
var source = $('#article-template').html();
var template = Handlebars.compile(source);



// 1. Setup AJAX requests to fetch data from each news source
$.ajax({
	type: 'GET',
	url: 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=d78fd67d2c1343e3a2ad175548a36b66',
	success: formatNytResponse 
})

$.ajax({
	type: 'GET',
	url: 'https://content.guardianapis.com/search?api-key=1c16c9b4-4742-456e-8057-318f671756ca',
	success: formatGuardianResponse 
})

$.ajax({
	type: 'GET',
	url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b58dd813f91948d69fde5758e08f1343',
	success: formatNewsApiResponse 
})

// 2. Set up functions to handle each of the above AJAX requests:
// - Use Array's .map method to transform the response into an array of objects that you will pass to the Handlebars template
// - Check out the id=article-template in index.html to see what properties the template expects
// - To properly format article dates, use new Date() and the .toLocaleDateString() method
// Note: not all articles will have all the expected properties :D

function formatNytResponse(response) {
	// console.log(response)
	var articles = response.results.map(function(article) {
			
			var image

			if (article.multimedia[0]) {
				image = article.multimedia[0].url
			} else {
				image = 'http://pbs.twimg.com/profile_images/942784892882112513/qV4xB0I3_reasonably_small.jpg'
			}
			
			var date = new Date(article.created_date)

			return {
				title: article.title,
				date: date.toLocaleDateString(),
				image: image,
				type: article.section,
				link: article.url,
			}
	})

	// console.log(articles)

var articleTemplates = template(articles)
$('#main').append(articleTemplates)

}

function formatGuardianResponse(response) {
	// console.log(response)
	var articles = response.response.results.map(function(article) {
		
		var image = 'https://cdn-images-1.medium.com/max/1200/1*GIZ2AUpS5C451Cn0sFaytQ.png'
		
		var date = new Date(article.webPublicationDate)

		return {
			title: article.webTitle,
			date: date.toLocaleDateString(),
			image: image,
			type: article.type,
			link: article.webUrl,
		}
	})

// console.log(articles)

var articleTemplates = template(articles)
$('#main').append(articleTemplates)

}

function formatNewsApiResponse(response) {
	// console.log(response)
	var articles = response.articles.map(function(article) {
		
		var date = new Date(article.publishedAt)

		return {
			title: article.title,
			date: date.toLocaleDateString(),
			image: article.urlToImage,
			link: article.url,
		}
	})

//console.log(articles)

var articleTemplates = template(articles)
$('#main').append(articleTemplates)

}



