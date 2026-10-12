// speed: km/h, range: km, payload: kg
const classes = {
    light: {
        speed: 50, 
        range: 10, 
        payload: 0.5
    },
    medium: {
        speed: 40,
        range: 20,
        payload: 5
    },
    heavy: {
        speed: 30,
        range: 30,
        payload: 25
    }
}

const depots = [
    { id: 1, name: 'Depot North', position: [50.895, 4.455] },
    { id: 2, name: 'Depot South', position: [50.865, 4.490] }, 
    { id: 3, name: 'Depot West', position: [50.878, 4.435] }
]

const drones = [
    { id: 1, name: 'Light-01', status: 'idle', battery: 92, droneClass: 'light', depotId: 1, position: [50.896, 4.456] },
    { id: 2, name: 'Light-02', status: 'flying', battery: 64, droneClass: 'light', depotId: null, position: [50.882, 4.472] },
    { id: 3, name: 'Medium-01', status: 'idle', battery: 88, droneClass: 'medium', depotId: 1, position: [50.896, 4.454] },
    { id: 4, name: 'Heavy-01', status: 'flying', battery: 47, droneClass: 'heavy', depotId: null, position: [50.871, 4.462] },
    { id: 5, name: 'Medium-02', status: 'charging', battery: 18, droneClass: 'medium', depotId: 1, position: [50.894, 4.456] }
]

export { classes, depots, drones }