



 // Google places api
const URL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDo_qdGJxpkN6sy5I0HpiPhWfolYfFDGZM&location=-33.8670522,151.1957362&radius=5000&type=restaurant";

fetch(URL).then(data=> {
    return data.json()
}).then(jsonData => {
    console.log(jsonData.results)
}).catch(error=> {
    console.log(error);
})


 /*var axios = require('axios');

 var config = {
     method: 'get',
     url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyDHipSWHOAyneYMFXWMMx9DmNAAi_HWRc4',
     headers: { }
 };

 axios(config)
     .then(function (response) {
         console.log(JSON.stringify(response.data));
     })
     .catch(function (error) {
         console.log(error);
     });*/




// Asetukset paikkatiedon hakua varten (valinnainen)
/*const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

// Funktio, joka ajetaan, kun paikkatiedot on haettu
function success(pos) {
    const crd = pos.coords;

    // Tulostetaan paikkatiedot konsoliin
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    // Käytetään leaflet.js -kirjastoa näyttämään sijainti kartalla (https://leafletjs.com/)
    const map = L.map('map').setView([crd.latitude, crd.longitude], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([crd.latitude, crd.longitude]).addTo(map)
        .bindPopup('Olen tässä.')
        .openPopup();
}

// Funktio, joka ajetaan, jos paikkatietojen hakemisessa tapahtuu virhe
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

// Käynnistetään paikkatietojen haku
navigator.geolocation.getCurrentPosition(success, error, options); */


 // Note: This example requires that you consent to location sharing when
 // prompted by your browser. If you see the error "The Geolocation service
 // failed.", it means you probably did not give permission for the browser to
 // locate you.
 let map, infoWindow;

 function initMap() {
     map = new google.maps.Map(document.getElementById("map"), {
         center: { lat: 60.192, lng: 24.945 },
         zoom: 6,
     });
     infoWindow = new google.maps.InfoWindow();

     const locationButton = document.createElement("button");

     locationButton.textContent = "Paikanna";
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

                     infoWindow.setPosition(pos);
                     infoWindow.setContent("Olet tässä");
                     infoWindow.open(map);
                     map.setCenter(pos);
                     map.setZoom(10);

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
 var request = {
     location: 'Espoo',
     radius: '500',
     query: 'restaurant'
 };

 service = new google.maps.places.PlacesService(map);
 service.textSearch(request, callback);

 function handleLocationError(browserHasGeolocation, infoWindow, pos) {
     infoWindow.setPosition(pos);
     infoWindow.setContent(
         browserHasGeolocation
             ? "Error: The Geolocation service failed."
             : "Error: Your browser doesn't support geolocation."
     );
     infoWindow.open(map);
 }

 window.initMap = initMap;


