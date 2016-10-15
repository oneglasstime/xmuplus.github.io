$('a[title]').qtip({
    style: {
        classes: 'qtip-green qtip-shadow qtip-rounded'
    }
});

$('span[title]').qtip({
    style: {
        classes: 'qtip-green qtip-shadow qtip-rounded'
    }
});

$('strong[title]').qtip({
    style: {
        classes: 'qtip-green qtip-shadow qtip-rounded'
    }
});

$('img[title]').qtip({
    style: {
        classes: 'qtip-green qtip-shadow qtip-rounded'
    }
});
$('i[title]').qtip({
    style: {
        classes: 'qtip-green qtip-shadow qtip-rounded'
    }
});






//Google Map
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

function initialize() {
  var Xiamen = { lat: 24.437359, lng: 118.097844 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: Xiamen
  });

  // This event listener calls addMarker() when the map is clicked.
  google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng, map);
  });

  // Add a marker at the center of the map.
  addMarker(Xiamen, map);
}

// Adds a marker to the map.
function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map
  });
}

google.maps.event.addDomListener(window, 'load', initialize);