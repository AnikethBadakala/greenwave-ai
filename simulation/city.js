/*
CITY SIMULATION ENGINE
----------------------

This file runs the entire traffic simulation.

New features in STEP 8:

- Signal timers
- Vehicle queues
- Traffic congestion
- GreenWave ambulance priority
*/

const Intersection = require("./intersection")
const Road = require("./road")
const Hospital = require("./hospital")
const Ambulance = require("./ambulance")
const Vehicle = require("./vehicle")



// CREATE INTERSECTIONS

const A = new Intersection("A",0,0)
const B = new Intersection("B",1,0)
const C = new Intersection("C",2,0)



// CREATE ROADS

const road1 = new Road(A,B,1)
const road2 = new Road(B,C,1)



// CREATE HOSPITAL

const hospital = new Hospital("H1",C)



// CREATE AMBULANCE

const ambulance = new Ambulance(A)

const route = [B,C]

ambulance.setRoute(route)



// CREATE TRAFFIC VEHICLES

const vehicles = []

/*
Create multiple vehicles
to simulate traffic congestion
*/

for(let i=1;i<=5;i++){

    const vehicle = new Vehicle("V"+i,A)

    vehicle.setRoute([B,C])

    vehicles.push(vehicle)
}



// SIGNAL INITIAL STATE

B.turnRed()
C.turnRed()



// GREENWAVE SETTINGS

const activationDistance = 1



/*
GreenWave controller gives
ambulance priority
*/

function greenWaveController(){

    const nextIntersection = ambulance.route[ambulance.routeIndex]

    if(!nextIntersection){
        return
    }

    const distance = nextIntersection.distanceTo(ambulance.currentLocation)

    console.log("Ambulance distance to",nextIntersection.id,"=",distance)

    if(distance <= activationDistance){

        if(nextIntersection.signalState === "RED"){

            console.log("GreenWave activated for signal",nextIntersection.id)

            nextIntersection.turnGreen()
        }
    }
}



console.log("Simulation started")



/*
SIMULATION LOOP

Runs every 2 seconds
*/

const simulation = setInterval(()=>{

    // update traffic signals
    B.updateSignal()
    C.updateSignal()

    // run ambulance priority logic
    greenWaveController()

    // move traffic vehicles
    vehicles.forEach(vehicle=>{
        vehicle.move()
    })

    // process vehicle queues
    B.processQueue()
    C.processQueue()

    // move ambulance
    const location = ambulance.move()

    if(!location){

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

// What Your Simulator Now Does

// You now have a mini traffic ecosystem:
// 🚗 multiple vehicles
// 🚦 signal cycles
// 🚗 queues at signals
// 🚑 ambulance priority
// 🏥 hospital destination

// Simulation behavior:
// Vehicles wait at red
// Queues form
// Signals change
// Ambulance triggers GreenWave
// Traffic clears
// Ambulance reaches hospital