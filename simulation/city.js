/*
City Simulation Engine
This runs the simulation of the city.
*/

const Intersection = require("./intersection")
const Road = require("./road")
const Hospital = require("./hospital")
const Ambulance = require("./ambulance")

// Create intersections
const A = new Intersection("A",0,0)
const B = new Intersection("B",1,0)
const C = new Intersection("C",2,0)

// Create roads
const road1 = new Road(A,B,1)
const road2 = new Road(B,C,1)

// Create hospital
const hospital = new Hospital("H1",C)

// Create ambulance
const ambulance = new Ambulance(A)

// Define ambulance route
const route = [A,B,C]

ambulance.setRoute(route)

console.log("Simulation started")

/*
Simulation Loop

Every 2 seconds
Ambulance moves forward
*/

const simulation = setInterval(()=>{

    const location = ambulance.move()

    if(location === null){
        console.log("Ambulance reached destination")
        clearInterval(simulation)
        return
    }

    console.log("Ambulance at:",location.id)

    if(location === hospital.location){
        console.log("Arrived at hospital")
        clearInterval(simulation)
    }

},2000)

// example: STEP 3 — Build the Simulation Engine
// Goal of this step

// We want the system to behave like a time-based simulation.

// Every second the system should:

// Check where the ambulance is

// Move it to the next intersection

// Print the current location

// Example output we want:
// Ambulance moving...
// Ambulance at A
// Ambulance at B
// Ambulance at C
// Arrived at hospital