import './style.css'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

/*initialize the map and set its view to our chosen 
geographical coordinates and a zoom level*/
const map = L.map('map').setView([50.88, 4.47], 13);

/*add a tile layer to add to our map
 creating a tile layer usually involves setting the URL template 
 for the tile images, the attribution text, and the maximum zoom 
 level of the layer*/
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);