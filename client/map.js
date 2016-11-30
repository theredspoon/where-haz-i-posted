console.log('in map.js');

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.0625, lng: -95.677068},
      zoom: 2
  });


};

window.eqfeed_callback = function (latLngArray) {

  for (let i = 0, l = latLngArray.length; i < l; i++) {
    console.log('latLngArray[i].lng is ', latLngArray[i].lng);
    let latLng = new google.maps.LatLng(latLngArray[i].lat,latLngArray[i].lng);
    console.log('latLng is ', latLng);

    let marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }
}