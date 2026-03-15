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

const route = [B,C]
ambulance.setRoute(route)

console.log("Simulation started")

/*
Signal control simulation

Every few seconds we change signals
*/

B.turnRed()
C.turnRed()

setTimeout(()=>{
    console.log("Signal at B turned GREEN")
    B.turnGreen()
},4000)

setTimeout(()=>{
    console.log("Signal at C turned GREEN")
    C.turnGreen()
},8000)

/*
Simulation loop
*/

const simulation = setInterval(()=>{

    const location = ambulance.move()

    console.log("Ambulance at:",location.id)

    if(location === hospital.location){
        console.log("Arrived at hospital")
        clearInterval(simulation)
    }

},2000)

// STEP 4 — Add Traffic Signal Behavior
// Goal of this step

// Introduce traffic lights that control movement.

// Behavior we want:
// If signal = RED
// Ambulance must STOP

// If signal = GREEN
// Ambulance can MOVE

// Expected Output

// Example run:Simulation started
// Signal RED at B Ambulance waiting...
// Ambulance at: A

// Signal at B turned GREEN

// Ambulance at: B

// Signal RED at C Ambulance waiting...

// Signal at C turned GREEN

// Ambulance at: C
// Arrived at hospital