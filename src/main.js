import './style.css'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { classes, depots, drones } from './drone-data.js'

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

/*displaying DRONES on the map */

/*mapping each class to a color*/
const classColors = {
    light:'#0EA5E9',
    medium: '#F97316',
    heavy: '#8B5CF6'
}

drones.forEach(drone => {
    L.circleMarker(drone.position, {
        radius: 12,          
        color: '#fff',    
        weight: 2,           
        opacity: 1,         
        fillColor: classColors[drone.droneClass],   
        fillOpacity: 1    
    }).addTo(map);
});

/*displaying DEPOTS on the map */

/* squares aren't available on Leaflet 
so they are created by first making a divIcon and then 
adding it to the map through L.marker */

const squareIcon = L.divIcon({
    className: 'my-square-marker',
    iconSize: [24, 24] // Width and height in pixels (24x24 is similar to a 12px radius)
});

depots.forEach(depot => {
    const marker = L.marker(depot.position, {
        icon: squareIcon   
    }).addTo(map);

    marker.bindTooltip(depot.name, {
        permanent: true,  // Keeps the name of depot visible at all times
        direction: 'bottom',
        className: 'marker-label'
    })
});