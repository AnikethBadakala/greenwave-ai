/*
CITY SIMULATION ENGINE
----------------------

This file initializes the virtual city
and runs the simulation loop.

Major responsibilities:

1. Create environment objects
2. Create AI agent
3. Run simulation clock
*/

const Intersection = require("./intersection")
const Road = require("./road")
const Hospital = require("./hospital")
const Ambulance = require("./ambulance")
const Vehicle = require("./vehicle")
const CityState = require("./cityState")

const TrafficAgent = require("../ai/trafficAgent")



/*
CREATE INTERSECTIONS
*/

const A = new Intersection("A",0,0)
const B = new Intersection("B",1,0)
const C = new Intersection("C",2,0)



/*
CREATE ROADS
*/

const road1 = new Road(A,B,1)
const road2 = new Road(B,C,1)



/*
CREATE HOSPITAL
*/

const hospital = new Hospital("H1",C)



/*
CREATE AMBULANCE
*/

const ambulance = new Ambulance(A)

const route = [B,C]

ambulance.setRoute(route)



/*
CREATE TRAFFIC VEHICLES
*/

const vehicles = []

for(let i=1;i<=5;i++){

    const vehicle = new Vehicle("V"+i,A)

    vehicle.setRoute([B,C])

    vehicles.push(vehicle)
}



/*
SET INITIAL SIGNAL STATES
*/

B.turnRed()
C.turnRed()



/*
CREATE CITY STATE
*/

const cityState = new CityState(
    [A,B,C],
    [road1,road2],
    vehicles,
    ambulance,
    hospital
)



/*
CREATE AI AGENT
*/

const trafficAgent = new TrafficAgent(cityState)



console.log("Simulation started")



/*
SIMULATION LOOP
*/

const simulation = setInterval(()=>{

    /*
    AI agent observes environment
    and controls signals
    */

    trafficAgent.step()



    /*
    Move normal vehicles
    */

    vehicles.forEach(vehicle=>{
        vehicle.move()
    })



    /*
    Move ambulance
    */

    const location = ambulance.move()

    if(!location){

        console.log("Ambulance reached destination")

        clearInterval(simulation)

        return
    }

    console.log("Ambulance at:",location.id)



    /*
    Check hospital arrival
    */

    if(location === hospital.location){

        console.log("Arrived at hospital")

        clearInterval(simulation)
    }

},2000)