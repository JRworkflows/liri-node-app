require("dotenv").config();
require("fs").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api")
var Twitter = require("twitter")
var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);
// var params = {screen_name: 'jjmo311'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//     if (!error) {
//       console.log(tweets);
//     }
//     console.log(tweets);
//   });
var song = process.argv[2]
spotify.search({ type: 'track', query: song, limit: 1 }, function(err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data.tracks.items[0].artists[0].name);
});