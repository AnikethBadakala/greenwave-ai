/*
City Simulation Engine
----------------------

This file builds a mini city.

Steps:
1. Create intersections (traffic signals)
2. Create roads connecting them
3. Place hospital
4. Place ambulance
5. Print current city state
*/

const Intersection = require("./intersection")
const Road = require("./road")
const Hospital = require("./hospital")
const Ambulance = require("./ambulance")

/*
Step 1: Create Intersections

Think of them as traffic signals.
*/
const A = new Intersection("A", 0, 0)
const B = new Intersection("B", 1, 0)
const C = new Intersection("C", 2, 0)

/*
Step 2: Create Roads connecting intersections

A ---- B ---- C
*/
const road1 = new Road(A, B, 1)
const road2 = new Road(B, C, 1)

/*
Step 3: Create Hospital
Hospital located at intersection C
*/
const hospital = new Hospital("H1", C)

/*
Step 4: Create Ambulance
Ambulance starts at intersection A
*/
const ambulance = new Ambulance(A)

/*
Step 5: Display simulation status
*/
console.log("City initialized")
console.log("Ambulance at:", ambulance.currentLocation.id)
console.log("Hospital at:", hospital.location.id)

/*
Later this file will also:
- simulate traffic signals
- simulate vehicles
- simulate ambulance movement
- apply AI routing
- control signals automatically
*/