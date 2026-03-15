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

// Route
const route = [B,C]
ambulance.setRoute(route)

console.log("Simulation started")

/*
Initially all signals RED
*/
B.turnRed()
C.turnRed()

/*
GreenWave Controller

If ambulance is about to reach a signal
we automatically turn that signal GREEN
*/

function greenWaveController(){

    const nextIntersection = ambulance.route[ambulance.routeIndex]

    if(!nextIntersection){
        return
    }

    if(nextIntersection.signalState === "RED"){
        console.log("GreenWave activated for signal",nextIntersection.id)
        nextIntersection.turnGreen()
    }
}

/*
Simulation Loop
*/

const simulation = setInterval(()=>{

    // Activate GreenWave logic
    greenWaveController()

    const location = ambulance.move()

    console.log("Ambulance at:",location.id)

    if(location === hospital.location){
        console.log("Arrived at hospital")
        clearInterval(simulation)
    }

},2000)

// GreenWave Algorithm (Automatic Signal Priority)

// output 
// Simulation started
// GreenWave activated for signal B
// Ambulance at: B
// GreenWave activated for signal C
// Ambulance at: C
// Arrived at hospital