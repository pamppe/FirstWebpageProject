
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 60.192, lng: 24.945 },
        zoom: 6,

    });










    infoWindow = new google.maps.InfoWindow();





    paikannaElem.addEventListener("click", () => {
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
                    map.setZoom(12);
                    var request = {
                        location: pos,
                        radius: 5000,
                        type: ['restaurant'],


                    };

                    service = new google.maps.places.PlacesService(map);
                    service.nearbySearch(request, callback);



                    function callback(results, status) {
                        if (status == google.maps.places.PlacesServiceStatus.OK) {

                            for (var i = 0; i < results.length; i++) {
                                var place = results[i];









                                createMarker(results[i].geometry.location,place.name, place);


                                console.log(place);
                                console.log(place.name);
                                console.log(place.rating);
                                console.log(place.user_ratings_total);
                                console.log(place.price_level);
                                console.log(place.opening_hours);
                                console.log(place.reviews);
                                console.log(place.place_id);






                                //console.log(place.icon);
                                //console.log(place.opening_hours);






                            }
                        }
                    }




                    function createMarker(position,title, place) {


                        var merkki = new google.maps.Marker({
                            position: position,
                            map: map,
                            animation: google.maps.Animation.DROP,
                            title: title,






                        });



                        google.maps.event.addListener(merkki, 'click', function() {

                            const kuva = place.photos[0].getUrl({'maxWidth': 500, 'maxHeight': 500});

                            map.setZoom(20);
                            map.setCenter(merkki.getPosition());
                            infoWindow.setPosition(position);

                            if (kuva == null){
                                infoWindow.setContent(   `
               <div>
                     <article> 
                            <header> ${place.name} </header> 
                        
                            <figure class="fullwrap">
                                <img id="ravintolakuva" src = "imagenotfound.png" alt = "${place.name}">
                                <figcaption class="fullcap"> ${place.name} </figcaption> 
                             </figure>
                            <p> ${place.name} </p>
                            <p> 
                                <a></a>
                            </p>
                     </article>
                  </div>   
              
              
              
              `)
                                infoWindow.open(map, merkki);
                                ;
                            } else {
                                infoWindow.setContent(  `
               <div>
                     <article> 
                            <header> ${place.name} </header> 
                        
                            <figure class="fullwrap">
                                <img id="ravintolakuva" src = "${kuva}" alt = "${place.name}">
                                <figcaption class="fullcap"> ${place.name} </figcaption> 
                             </figure>
                            <p> ${place.name} </p>
                            <p> 
                                <a></a>
                            </p>
                     </article>
                  </div>   
              
              
              
              `)
                                infoWindow.open(map, merkki);
                                ;
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
        browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
    Results();
}

window.onload = initMap;

const paikannaElem = document.getElementById("nayta");
