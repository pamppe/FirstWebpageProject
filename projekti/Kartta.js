// Luodaan kartta elementtiin, keskitetään kuva Helsinkiin.
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 60.192,
            lng: 24.945
        },
        zoom: 6,

    });
    // Luodaan infoikkuna
    infoWindow = new google.maps.InfoWindow();

    // Lisätään Eventlistener kun käyttäjä clickaa buttonia.
    paikannaElem.addEventListener("click", () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = { // Paikannetaan laitteen koordinaatit
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    infoWindow.setPosition(pos); // Lisätään infoikkuna paikannettuihin koordinaatteihin
                    infoWindow.setContent("Olet tässä");
                    infoWindow.open(map);
                    map.setCenter(pos);
                    map.setZoom(12);


                    let request = { // Tallennetaan muuttujaan Api kyselyn vaatimat parametrit
                        location: pos,
                        radius: 5000,
                        type: ['restaurant'],
                    };
                    service = new google.maps.places.PlacesService(map); // Kutsutaan Googlemaps places Apia
                    service.nearbySearch(request, callback); // Kutsutaan places apin nearbysearch osiota ja lähetetään vaadittavat parametrit

                    function callback(results, status) {
                        if (status == google.maps.places.PlacesServiceStatus.OK) {

                            for (let i = 0; i < results.length; i++) { // Iteroidaan taulukko läpi for loopilla
                                let place = results[i];
                                createMarker(results[i].geometry.location, place.name, place); // Kutsutaan funktiota createmarker ja lähetetään parametreinä
                                // paikan koordinaatit, paikan nimi, sekä koko taulukko....
                            }
                        }
                    }

                    function createMarker(position, title, place) { // Luodaan markerit saatujen parametrien avulla
                        if (merkki && merkki.setMap) { // Poistetaan vanhat merkit jos käyttäjä painaa uudestaan nappia
                            merkki.setMap(null);
                        }

                        var merkki = new google.maps.Marker({ // Annetaan markkerille koordinaatit,kartan osoite, animaatio sekä nimi
                            position: position,
                            map: map,
                            animation: google.maps.Animation.DROP,
                            title: title,
                        });
                        google.maps.event.addListener(merkki, 'click', function() { // Lisätään markerille eventlisteneri jos käyttäjä clickkaa markkeria
                            map.setZoom(14);
                            map.setCenter(merkki.getPosition());
                            infoWindow.setPosition(position); // lisätään markkereille infoikkuna



                            // Luodaan if konditio jos api kyselystä ei palaudukkaan kuvaa, jotta muut merkit toimivat

                            if (place.photos[0].getUrl({
                                'maxWidth': 500,
                                'maxHeight': 500
                            }) == null) {
                                infoWindow.setContent(`
               <div>
                     <article> 
                            <header id="markerHeader"> ${place.name} </header> 
                        
                            <figure class="fullwrap">
                                <img id="ravintolakuva" src = "imagenotfound.png" alt = "${place.name}">
                                
                             </figure>
                            <p><strong>Osoite: </strong> ${place.vicinity} <br> <strong>Arvostelu: </strong> ${place.rating}/5</p>
                            <p> 
                                <a></a>
                            </p>
                     </article>
                  </div>                              
              `)
                                infoWindow.open(map, merkki);
                            } else {
                                infoWindow.setContent(`
               <div>
                     <article> 
                            <header id="markerHeader"><h2> ${place.name} </h2></header> 
                        
                            <figure class="fullwrap">
                                <img id="ravintolakuva" src = "${place.photos[0].getUrl({'maxWidth': 500, 'maxHeight': 500})}" alt = "${place.name}">
                                
                             </figure>
                            <p><strong>Osoite: </strong> ${place.vicinity} <br> <strong>Arvostelu: </strong> ${place.rating}/5</p>
                            <p> 
                                <a></a>
                            </p>
                     </article>
                  </div>   
              `)
                                infoWindow.open(map, merkki); // Avataan infoikkuna markkereiden luokse
                            }
                        });
                    }
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
        browserHasGeolocation ?
            "Error: The Geolocation service failed." :
            "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
    Results();
}
window.onload = initMap;
const paikannaElem = document.getElementById("nayta"); // Tallennetaan button elementti