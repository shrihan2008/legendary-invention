let latitute=62.21382300499495
let longitude=40.48957644288593
mapboxgl.accessToken="pk.eyJ1IjoiZmMyMjEwMiIsImEiOiJjbGg5NnBna2MwMWR4M2tvMjZ4N2ZmZWh2In0.y3iYbhKMx8WNnLrGZveg0g"
var map=new mapboxgl.Map({
    container:"map",
    style:"mapbox://styles/mapbox/outdoors-v11",
    center:[latitute,longitude],
    zoom:14
});
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true

        },
        trackUserLocation:true
        
    })
);

map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    })
    ,
    "bottom-left"
)

var image=document.querySelector("agra")
var marker1=new mapboxgl.Marker({
    element:image
})
.setLngLat(75.833,26.9854)
.addTo(map)