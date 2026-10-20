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

const fleetList = document.getElementById('fleet-list');

/*Extending status of drones so it would be more detailed:
"Idle at Depot North*/

const statusText = {
    idle: 'Idle',
    flying: 'In flight',
    charging: 'Charging'
}
const getStatusText = (drone) => {
    let text = '';
    
    if(drone.depotId == null) {
        text = statusText[drone.status];
    } else {
        const depotName = depots.find(depot => depot.id === drone.depotId).name;
        text = statusText[drone.status] + " at " + depotName;
    }
    return text;
}


/*Adding list of drone names to the sidebar */
const renderFleetList = (droneList) => {
    fleetList.innerHTML = droneList.map(drone =>
        `<li>
            <span class="drone-dot" style="background-color: ${classColors[drone.droneClass]}"></span>
            <span>${drone.name}</span>
            <span>${getStatusText(drone)}</span>
            <span>${drone.battery}%</span>
        </li>`).join('');
}

const getDronesByClass = (selectedClass) => {
    if(selectedClass === 'all') return drones;
    return drones.filter(drone => drone.droneClass === selectedClass);
}

renderFleetList(drones);

document.getElementById('filter-group').addEventListener('click', function(event) {
    let value = event.target.dataset.class;
    if(!value) return;
    renderFleetList(getDronesByClass(value));
});

/*Adding top-bar summary of drones */
const countByStatus = (status) => {
    return drones.filter(drone => drone.status === status).length;
}

const topBarSummary = document.getElementById('top-bar-summary');

const renderSummary = () => {
    topBarSummary.innerHTML = 
    `
    <span>${drones.length} drones</span>
    <span>${countByStatus('idle')} idle</span>
    <span>${countByStatus('flying')} in flight</span>
    <span>${countByStatus('charging')} charging</span>
    `;
}

renderSummary();