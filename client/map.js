console.log('in map.js');

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.16031655, lng: -61.5234375},
      zoom: 2
  });


};

window.eqfeed_callback = function (latLngArray) {
  let markers = [];
  for (let i = 0, l = latLngArray.length; i < l; i++) {
    let latLng = new google.maps.LatLng(latLngArray[i].lat,latLngArray[i].lng);

    let marker = new google.maps.Marker({
      position: latLng,
      map: map
    });

    markers.push(marker);
  }

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: './assets/map/m'
  });
}