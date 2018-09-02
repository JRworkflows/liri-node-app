var tweets = {
    tweets: "my-tweets"
}
var spotifyThisSong = {
    spotifyThisSong: "spotify-this-song"
}
var movieThis = {
    movieThis: "movie-this"
}
var doWhatItSays = {
    doWhatItSays: "do-what-it-says"
}
console.log('this is loaded');
exports.twitter = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};
exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET,
    // tweets: tweets,
    // spotifyThisSong: spotifyThisSong,
    // movieThis: movieThis,
    // doWhatItSays: doWhatItSays
};
exports.twitter = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};