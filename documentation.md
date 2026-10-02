# Documentation

## Branch + Issues Workflow

1. Issue = a written description of one unit of work ("Render Leaflet map centered on a city"). It gets a number (#1, #2...). This is your to-do list, but public and linkable.
2. Branch = a parallel copy of your code where you do that work, so main always stays in a working, deployable state. If you break something on a branch, main is untouched.
3. Pull Request (PR) = the request to merge your branch back into main. Even solo, it gives you a diff to review and a place to write what changed.
4. Closing the loop — if your PR description says "Closes #1", GitHub auto-closes that issue when the PR merges.

## Scope and Key Points

**Had an idea to develop an interface for military drones but rejected it for the reason that my domain knowledge is centered around urban logistics.*

- Three drone classes, color-coded → keep it, just make them logistics classes (light/fast small parcel, medium-range, heavy cargo) with different speed, range, and payload capacity. Same UI value, and the tradeoffs are real ones from your thesis.
- Altitude layers → this is the genuinely good idea in there. Multi-drone airspace deconfliction is a real, current problem in drone delivery (UTM / U-space regulation). Same engineering, and it ties directly to your research. Save it for later, but keep it on the list.
- Sensor footprints → becomes coverage/service-area radius per depot. Useful and much simpler.
- Click-a-drone side panel → keep. Cheap to build, makes the whole thing feel like a real product.

## Proposed MVP — the smallest version that's still impressive:

- Map renders, centered on your city
- Depots/warehouses + delivery destinations as markers
- A fleet of drones, color-coded by class, visible in a side roster
- Click a drone → panel with its class, battery, status, current job
- Assign a delivery → drone routes to it and animates along the path
- Battery drains with distance; drone must return to depot to recharge

Everything else — no-fly zones, altitude layers, multi-drone conflict, optimization heuristics — is a phase 2 addition on top of a working system, which is a much better position to build from than trying to design it all now.

## ORDER FOR NOW: 
    MVP working and deployed, then the database, then Python if one of those features is still what you want.
### Plan for next weeks:
- [ ] Render Leaflet map (#1, already exists)
- [ ] Page layout shell: top bar, map area, sidebar, with placeholder text in each region
- [ ] Drone data model: the "brain" side: what a drone is (class, battery, status, position), plus some sample drones and depots. No visuals.
- [ ] Show depots and drones on the map, color-coded by class
- [ ] Fleet roster in the sidebar
- [ ] Fleet summary in the top bar
- [ ] Drone detail view: click a drone, sidebar switches state