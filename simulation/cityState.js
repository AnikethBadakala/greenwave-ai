/*
CITY STATE
----------

This class represents the full state of the simulated city.

AI agents should NOT directly manipulate simulation objects.
Instead they read information from this object.

This mirrors real-world AI systems where:

Environment → Agent → Actions
*/

class CityState {

    /*
    Constructor receives all simulation objects.
    */

    constructor(intersections, roads, vehicles, ambulance, hospital){

        // all traffic signals
        this.intersections = intersections

        // road network
        this.roads = roads

        // traffic vehicles
        this.vehicles = vehicles

        // ambulance object
        this.ambulance = ambulance

        // hospital destination
        this.hospital = hospital
    }

    /*
    getNextSignal()

    Returns the next signal the ambulance will encounter.
    */

    getNextSignal(){

        const routeIndex = this.ambulance.routeIndex

        return this.ambulance.route[routeIndex]
    }

}

module.exports = CityState