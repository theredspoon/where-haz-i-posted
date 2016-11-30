
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
  console.log('in getFBData');
  let output = [
    {lat: 52.518611, lng: 13.408056}, 
    {lat: 51.519475, lng: 7.46694444},
    {lat: 51.50, lng: 7.40}, 
    {lat: 51.555, lng: 7.40},
    {lat: 51.555, lng: 7.625},
    {lat: 51.5125, lng: 7.625},
    {lat: 51.5103, lng: 7.49347},
    {lat: 52.516272, lng: 13.377722},
    {lat: 51.515, lng: 7.453619},
    {lat: 51.503333, lng: -0.119722},
    {lat: 52.516272, lng: 13.377722},
    {lat: 51.515, lng: 7.453619},
    {lat: 51.503333, lng: -0.119722},
    {lat: 55.751667, lng: 37.617778},
    {lat: 48.8583, lng: 2.2945},
    {lat: 59.3275, lng: 18.0675},
    {lat: 59.916911, lng: 10.727567}
    ];
  for (let post of response.data) {
    output.push({lat: post.place.location.latitude, lng: post.place.location.longitude});
  }
  console.log('output is ', output);
  return output;
}

