// import { log } from "util";


var twitterKeys = require ("./keys.js")
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');



var userInput = process.argv[2];


console.log (userInput)
switch(userInput){
    case("myTweets"): myTweets()
    break;
    case("spotify-this-song"): mySpotify()
    break;
    case("movie-this"): movieThis()
    break;
    case("do-what-it-says"): doWhatItSays()

}





function myTweets(){
console.log ("twitter logic")
    var client = new Twitter({
        consumer_key: '',
        consumer_secret: '',
        access_token_key: '',
        access_token_secret: ''
      });
       
      var params = {screen_name: 'mayaramnarine'};
      client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            console.log(tweets);
         }
      });
} 





function mySpotify(){


var spotify = new Spotify({
    id: "aeb690eebc5c44658abe1774f0bc5fcd",
    secret: "a55ff5d5068b41859ce9ecd26236a84c"
  });
   
  spotify.search({ type: 'track', query: 'The Sign Ace of Base' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data.tracks.items[0].artists[0].name); 
  console.log(data.tracks.items[0].name);
  console.log(data.tracks.items[0].preview_url);
  console.log(data.tracks.items[0].album.name);
  });
}






function movieThis(){
    request('omdb', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
}

if(movieThis){
    movieThis = "Mr. Nobody"
};

var queryUrl = "http://www.omdbapi.com/?t=" + movieThis + "&y=&plot=short&apikey=trilogy";
request(queryUrl, function(error, response, body) {
    console.log(JSON.parse(body).Title);
    console.log(JSON.parse(body).Year);
    console.log(JSON.parse(body).imdbRating);
    console.log(JSON.parse(body).Country);
    console.log(JSON.parse(body).Language);
    console.log(JSON.parse(body).Plot);
    console.log(JSON.parse(body).Actors);   
});


