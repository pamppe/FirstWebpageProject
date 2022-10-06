


 let map, infoWindow;

let ravintolat = [
    {
        nimi: "Burger King",
        kuvaus: "Vuonna 1954 perustettu BURGER KING® on maailman toiseksi suurin hampurilaisravintolaketju. Ketjuun kuuluu yli 16 000 ravintolaa noin 100 maassa eri puolilla maailmaa. Suurin osa (n. 97 %) BURGER KING® -ravintoloista on itsenäisesti franchise-sopimuksilla toimivien yrittäjien pyörittämiä ravintoloita, joista monet ovat vuosikymmeniä toimineita perheyrityksiä. \n" +
            "\n" +
            "BURGER KING®-ravintoloissa käy maailmanlaajuisesti jopa yli 11 miljoona asiakasta päivässä. He tulevat, koska ravintolamme ovat tunnettuja siitä, että ne tarjoavat korkealaatuista, maukasta ja edullista ruokaa. BURGER KING®on alkuperäinen HOME OF THE WHOPPER®, jonka ensiluokkaiset raaka-aineet, itse kehittämämme reseptit, liekillä grillatut hampurilaiset ja perheystävällinen ruokailuympäristö ovat olleet tunnusmerkkimme jo yli 50 menestyksekästä vuotta.",
        kuva : 'https://images.deliveryhero.io/image/fd-po/LH/s4wr-hero.jpg?width=1600&height=400&quality=45'

    },
    {
        nimi: "Mc Donald's",
        kuvaus:"Tällä hetkellä asiakkaita palvelee 69 McDonald’s -perheravintolaa Helsingistä Rovaniemelle. McDonald’s-ravintolat toimivat pääasiassa paikallisin yrittäjävoimin ja ovat monella alueella tärkeä työllistäjä. Työskentely Mäkkärissä tarjoaa monelle hyvän ponnahduslaudan työelämään.",
        osoite: "",
        kuva: ""

    },
    {
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },
    {
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },
    {
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },
    {
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },
    {
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },
    {
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },
    {
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },
    {
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },
    {
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },
    {
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },
    {
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },
    {
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },
    {
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },{
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },{
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },{
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },{
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },{
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },{
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },{
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },{
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },{
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },{
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },{
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },{
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },{
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },{
        nimi: "",
        kuvaus:"",
        osoite: "",
        kuva: ""

    },
];
let placeID = [];


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
                     map.setZoom(12);
                     var request = {
                         location: pos,
                         radius: 5000,
                         type: ['restaurant'],


                     };
                     infoWindow = new google.maps.InfoWindow();
                     service = new google.maps.places.PlacesService(map);
                     service.nearbySearch(request, callback);



                     function callback(results, status) {
                         if (status == google.maps.places.PlacesServiceStatus.OK) {
                             for (var i = 0; i < results.length; i++) {
                                 var place = results[i];

                                 createMarker(results[i].geometry.location, place.name);

                                 console.log(place);
                                 console.log(place.name);
                                 console.log(place.rating);
                                 console.log(place.user_ratings_total);
                                 console.log(place.price_level);
                                 console.log(place.opening_hours);
                                 console.log(place.reviews);
                                 console.log(place.place_id);

                                 placeID.push(place.place_id);



                                 ravintolat.push(place.name);
                                 //console.log(place.icon);
                                 //console.log(place.opening_hours);



                                 listItems(place);


                             }
                         }
                     }




                     function createMarker(position,title) {

                        var merkki = new google.maps.Marker({
                             position: position,
                             map: map,
                             animation: google.maps.Animation.DROP,
                             title: title,




                         });
                         google.maps.event.addListener(merkki, 'click', function() {
                             map.setZoom(20);
                             map.setCenter(merkki.getPosition());
                             merkki.setMap(null);







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
function listItems(paikka){
    const pElem = document.createElement("p");
   // const imgElem = document.createElement("img");
   // imgElem.src = paikka.photos[i].getUrl({'maxWidth': 100, 'maxHeight': 100});
    //imgElem.alt = paikka;

    const divElem = document.getElementById("places");
   // divElem.appendChild(imgElem);
    divElem.appendChild(pElem);

    pElem.innerText = paikka.name;
    //pElem.innerText = paikka.rating;
    //if (imgElem.src == null){
       // pElem.innerText = paikka.name;
    //}
}





window.onload = initMap;




