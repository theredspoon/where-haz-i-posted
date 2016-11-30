
// save FB data

/*
DATA IS AN ARRAY OF POST OBJECTS
{
  "data": [
    {
      "id": "10104589420935539_10107169508224929",
      "place": {
        "id": "114952118516947",
        "name": "San Francisco",
        "location": {
          "city": "San Francisco",
          "country": "United States",
          "latitude": 37.775,
          "longitude": -122.418,
          "state": "CA"
        }
      },
      "message": "Querying the Facebook Graph API."
    }
  ],
  "paging": {
    "next": "https://graph.facebook.com/v2.8/10104589420935539/feed?fields=id,place,message&since=1448932833&format=json&with=location&access_token=EAACEdEose0cBAG0ZAsuaa0HYPEu3268SYcYamCzImvQHmKAPi3klaFqwLelUsQmEDq5mBBAIiUUPRBn7zCjRgwiOyR9dscrESfxnDdmU2ZCBdUgEtsZA4vhLiuZCeSoJ8BF9gblelzQ4BX1LhRgTZBVZCHYsuRUj6IZASSfadEPwgZDZD&limit=25&until=1480467748&__paging_token=enc_AdAouDrgKcOT6NzpIo5FQ2okwiMMXUyJ6EYmSECZBQ4MUmemGVZCsCHDjrJXmlj9y2sdYOooLORPQZB0BzSIweYIs1r"
  }
}

*/
//response:location: latitude, longitude
// parse FB data and output array of lat/long objects
var getFBData = function (response) {
  let output = [];
  for (let post of response.data) {
    output.push({lat: post.place.location.latitude, lng: post.place.location.longitude});
  }
  console.log('output is ', output);
  return output;

}

// take an array of lat/long objects and create markers on GMaps
var createGoogleMapsMarker = function (array) {

}