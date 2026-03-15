/*
CITY SIMULATION ENGINE
----------------------

This file is the MAIN ENTRY POINT of the traffic simulation.

Think of it as the "traffic control center".

It is responsible for:

1️⃣ Creating the virtual city
2️⃣ Creating intersections (traffic signals)
3️⃣ Creating roads
4️⃣ Creating the ambulance
5️⃣ Creating the hospital
6️⃣ Running the simulation clock
7️⃣ Activating GreenWave signal priority

The simulation runs in time steps (every 2 seconds).
*/


// Import the classes that represent different parts of the city

const Intersection = require("./intersection") // traffic signals
const Road = require("./road")                 // roads connecting signals
const Hospital = require("./hospital")         // destination
const Ambulance = require("./ambulance")       // emergency vehicle



// ======================================================
// STEP 1 — CREATE INTERSECTIONS (TRAFFIC SIGNALS)
// ======================================================

/*
Each intersection represents a TRAFFIC SIGNAL.

Coordinates represent its position in our virtual city.

City layout:

A ---- B ---- C

A = ambulance start
B = signal
C = hospital signal
*/

const A = new Intersection("A",0,0)
const B = new Intersection("B",1,0)
const C = new Intersection("C",2,0)



// ======================================================
// STEP 2 — CREATE ROADS
// ======================================================

/*
Roads connect intersections.

Example:

A ---- B
B ---- C

This allows vehicles to travel between signals.
*/

const road1 = new Road(A,B,1)
const road2 = new Road(B,C,1)



// ======================================================
// STEP 3 — CREATE HOSPITAL
// ======================================================

/*
Hospital is the FINAL DESTINATION.

We place the hospital at intersection C.

So the ambulance must reach C.
*/

const hospital = new Hospital("H1",C)



// ======================================================
// STEP 4 — CREATE AMBULANCE
// ======================================================

/*
Create an ambulance starting at intersection A.
*/

const ambulance = new Ambulance(A)



// ======================================================
// STEP 5 — DEFINE AMBULANCE ROUTE
// ======================================================

/*
The ambulance route defines which signals it will pass.

Start: A
Then:  B
Then:  C

Since the ambulance already starts at A,
the route only contains [B,C].
*/

const route = [B,C]

ambulance.setRoute(route)



// ======================================================
// SIMULATION START
// ======================================================

console.log("Simulation started")



// ======================================================
// INITIAL SIGNAL STATE
// ======================================================

/*
Initially all traffic signals are RED.

This simulates normal traffic conditions.

Ambulance cannot pass until the signal becomes GREEN.
*/

B.turnRed()
C.turnRed()



// ======================================================
// GREENWAVE SETTINGS
// ======================================================

/*
Activation distance determines when the signal should
automatically turn GREEN.

In a real city this might be:

100 meters
200 meters
300 meters

In our small simulation we use:

1 unit distance
*/

const activationDistance = 1



// ======================================================
// GREENWAVE CONTROLLER
// ======================================================

/*
This function is the BRAIN of the traffic system.

Every simulation cycle it checks:

1️⃣ Where the ambulance currently is
2️⃣ What the next signal is
3️⃣ How far the ambulance is from that signal
4️⃣ If the ambulance is close enough
5️⃣ Automatically turn the signal GREEN

This simulates:

🚑 Emergency Vehicle Preemption
*/

function greenWaveController(){

    /*
    Get the next intersection in the ambulance route
    */

    const nextIntersection = ambulance.route[ambulance.routeIndex]

    /*
    If there is no next intersection,
    the ambulance already reached the destination.
    */

    if(!nextIntersection){
        return
    }

    /*
    Calculate distance between ambulance location
    and the next signal.
    */

    const distance = nextIntersection.distanceTo(ambulance.currentLocation)

    console.log("Distance to signal", nextIntersection.id, "=", distance)

    /*
    If ambulance is close enough to the signal,
    activate GreenWave.
    */

    if(distance <= activationDistance){

        /*
        Only change the signal if it is currently RED.
        */

        if(nextIntersection.signalState === "RED"){

            console.log("GreenWave activated for signal", nextIntersection.id)

            /*
            Turn signal GREEN so ambulance can pass
            without stopping.
            */

            nextIntersection.turnGreen()
        }
    }
}



// ======================================================
// SIMULATION LOOP
// ======================================================

/*
This loop acts like the "clock" of the city.

Every 2 seconds the system performs:

1️⃣ Check ambulance position
2️⃣ Run GreenWave signal logic
3️⃣ Move ambulance forward
4️⃣ Check if hospital reached

setInterval() keeps repeating until stopped.
*/

const simulation = setInterval(()=>{

    /*
    Step 1
    Run GreenWave controller to prepare signals.
    */

    greenWaveController()


    /*
    Step 2
    Move ambulance to next intersection.
    */

    const location = ambulance.move()


    /*
    If ambulance cannot move,
    simulation ends.
    */

    if(!location){
        console.log("Ambulance reached destination")
        clearInterval(simulation)
        return
    }


    /*
    Print ambulance location.
    */

    console.log("Ambulance at:",location.id)



    /*
    Check if ambulance reached hospital.
    */

    if(location === hospital.location){

        console.log("Arrived at hospital")

        /*
        Stop the simulation loop.
        */

        clearInterval(simulation)
    }

},2000)

// STEP 6 — Distance-Based Detection
// Goal

// Signals should turn GREEN only when the ambulance is close enough.

// distance <= activationDistance
// activationDistance = 1 unit

// output;
// Simulation started
// Distance to signal B = 1
// GreenWave activated for signal B
// Ambulance at: B

// Distance to signal C = 1
// GreenWave activated for signal C
// Ambulance at: C

// Arrived at hospital