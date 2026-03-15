/*
CITY SIMULATION ENGINE
----------------------

This is the MAIN file that runs the entire system.

Responsibilities:

1. Create the city
2. Create signals
3. Create roads
4. Create vehicles
5. Create ambulance
6. Control signals using GreenWave
7. Run the simulation clock
*/

const Intersection = require("./intersection")
const Road = require("./road")
const Hospital = require("./hospital")
const Ambulance = require("./ambulance")
const Vehicle = require("./vehicle")



// ======================================================
// CREATE INTERSECTIONS
// ======================================================

/*
City layout:

A ---- B ---- C

A = ambulance start
C = hospital
*/

const A = new Intersection("A",0,0)
const B = new Intersection("B",1,0)
const C = new Intersection("C",2,0)



// ======================================================
// CREATE ROADS
// ======================================================

const road1 = new Road(A,B,1)
const road2 = new Road(B,C,1)



// ======================================================
// CREATE HOSPITAL
// ======================================================

const hospital = new Hospital("H1",C)



// ======================================================
// CREATE AMBULANCE
// ======================================================

const ambulance = new Ambulance(A)

// route ambulance will take
const route = [B,C]

// assign route
ambulance.setRoute(route)



// ======================================================
// CREATE NORMAL VEHICLES
// ======================================================

/*
These vehicles simulate normal traffic.
*/

const vehicle1 = new Vehicle("V1",A)
vehicle1.setRoute([B,C])

const vehicle2 = new Vehicle("V2",A)
vehicle2.setRoute([B,C])



// ======================================================
// INITIAL SIGNAL STATE
// ======================================================

B.turnRed()
C.turnRed()



// ======================================================
// GREENWAVE SETTINGS
// ======================================================

/*
Distance threshold for signal activation
*/

const activationDistance = 1



// ======================================================
// GREENWAVE CONTROLLER
// ======================================================

function greenWaveController(){

    // get next signal ambulance will reach
    const nextIntersection = ambulance.route[ambulance.routeIndex]

    // if ambulance finished route
    if(!nextIntersection){
        return
    }

    // calculate distance
    const distance = nextIntersection.distanceTo(ambulance.currentLocation)

    console.log("Distance to signal",nextIntersection.id,"=",distance)

    // check if ambulance is near signal
    if(distance <= activationDistance){

        // if signal still red
        if(nextIntersection.signalState === "RED"){

            console.log("GreenWave activated for signal",nextIntersection.id)

            // turn signal green
            nextIntersection.turnGreen()
        }
    }
}



console.log("Simulation started")



// ======================================================
// SIMULATION LOOP
// ======================================================

/*
Runs every 2 seconds.
Simulates real time traffic.
*/

const simulation = setInterval(()=>{

    // run smart signal controller
    greenWaveController()

    // move normal vehicles
    vehicle1.move()
    vehicle2.move()

    // move ambulance
    const location = ambulance.move()

    if(!location){

        console.log("Ambulance reached destination")

        clearInterval(simulation)

        return
    }

    console.log("Ambulance at:",location.id)

    // check if hospital reached
    if(location === hospital.location){

        console.log("Arrived at hospital")

        clearInterval(simulation)
    }

},2000)


// What Your Simulator Now Does

// Your system now simulates:
// 🚗 normal vehicles
// 🚦 traffic signals
// 🚑 ambulance priority
// 🏥 hospital destination

// Vehicles follow signals
// Ambulance triggers GreenWave
// Signals turn GREEN
// Ambulance reaches hospital faster