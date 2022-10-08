var map;
var infowindow;
var service;

function initMap() {
    var helsinki = {
        lat: 60.192,
        lng: 24.945
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: helsinki,
        zoom: 6
    });
    infowindow = new google.maps.InfoWindow();

    const locationButton = document.createElement("button");

    locationButton.textContent = "Pan to Current Location";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    infowindow = new google.maps.InfoWindow();
                    infoWindow.setPosition(pos);
                    infoWindow.setContent("Location found.");
                    infoWindow.open(map);
                    map.setCenter(pos);
                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                }
            );
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
    );


    var marker = new google.maps.Marker({
        position: messiah,
        map: map,
        title: 'Messiah College'
    });

    var request = {
        location: messiah,
        radius: 10000,
        type: ['restaurants']
    }

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);


}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        results.forEach(createMarker);
    }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        icon: {
            url: 'http://maps.gstatic.com/mapfiles/circle.png',
            anchor: new google.maps.Point(10, 10),
            scaledSize: new google.maps.Size(10, 17)
        },
        position: place.geometry.location
    });
    marker.addListener('click', function() {

        var request = {
            reference: place.reference
        };
        service.getDetails(request, function(details, status) {

            infowindow.setContent([
                details.name,
                details.formatted_address,
                details.website,
                details.rating,
                details.formatted_phone_number].join("<br />"));
            infowindow.open(map, marker);
        });

    })
}
window.onload = initMap;