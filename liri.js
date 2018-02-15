


var twitterKeys = require ("./keys.js")
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');



var userInput = process.argv[2];

if (userInput == "movie-this"){
  movieThis()
}

if (userInput == "spotify-this-song"){
  mySpotify()
}

if (userInput == "my-tweets"){
  myTweets()
}
//  myTweets()

//  doWhatItSays()






function myTweets(){

    var client = new Twitter({
         consumer_key: 'DhqLaqJYzj7hHPuHLJ2MXQ37x',
          consumer_secret: 'r6luQXmEktDrhggtj7kiOLDDwn6nxqYkwqIm362uz9OPSR2Y46',
          access_token_key: '962771941969899520-ZbRYL0QrJa9louaKYEDDwTBOhE6KWIF',
          access_token_secret: 'BAAqBiom9fhpP3DWuflVzymJ4uM4S4xgszaQxfZ0wXiUk',
      });
       
      var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets[0].text);
  }
});
}






function mySpotify(){
    
var spotify = new Spotify({
    id: "aeb690eebc5c44658abe1774f0bc5fcd",
    secret: "a55ff5d5068b41859ce9ecd26236a84c"
  });
   
  spotify.search({ type: 'track', query: process.argv[3] }, function(err, data) {
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

var queryUrl = "http://www.omdbapi.com/?t=" + process.argv[3] + "&y=&plot=short&apikey=trilogy";
request(queryUrl, function(error, response, body) {
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Year: " + JSON.parse(body).Year);
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value)
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);   
})

}