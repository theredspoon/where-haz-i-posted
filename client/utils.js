var getFBData = function (response) {
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
  return output;
}

