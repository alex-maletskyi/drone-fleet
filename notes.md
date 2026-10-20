# FUTURE CHANGES:
- MAYBE change *object* notation to *classes* once behavior (fluing, picking up package at, etc) of drones gets to be implemented 
- *DEPOT* markers cover the *drones*; Leaflet draws L.marker (your depots) on a layer above circle markers (your drones), so depots always end up on top. It’s not urgent; just keep it on the list for when you polish the map.
  
## 02.10
- up to this point the proect is setup in VS Code
- created a gitignore
- created a planning folder
    - added a design.md with wireframe for the main dashboard

## 12.10 
- created project on GH
- added issues on GH
- added map from Leaflet
- made the layout of main page for the platform
- started working on the data for drones in drone-data.js

## 13.10 
- displaying drones and depots on the map

## 15.10 
- added the sidebar and displaying data on it

## 16-18.10
- data about drones shows up on the sidebar
- added filter bar which sifts through the drone data by class of drones

## 20.10 
- added the top bar summary with how many drones are doing what

plan for next weeks:
- [x] Render Leaflet map (#1, already exists)
- [x] Page layout shell: top bar, map area, sidebar, with placeholder text in each region
- [ ] Drone data model: the "brain" side: what a drone is (class, battery, status, position), plus some sample drones and depots. No visuals.
- [ ] Show depots and drones on the map, color-coded by class
- [ ] Fleet roster in the sidebar
- [ ] Fleet summary in the top bar
- [ ] Drone detail view: click a drone, sidebar switches state
